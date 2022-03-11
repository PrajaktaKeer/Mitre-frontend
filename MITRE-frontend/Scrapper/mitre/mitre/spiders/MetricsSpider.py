import scrapy, time
import re
import string, collections
from ..items import MitreItem
import logging
from scrapy.utils.log import configure_logging 

class MetricsSpider(scrapy.Spider):
	configure_logging(install_root_handler=False)
	logging.basicConfig(
		filename='log.txt',
		format='%(levelname)s: %(message)s',
		level=logging.ERROR
	)

	name = 'metrics'  #name of the spider
	start_urls = [
		#'https://attack.mitre.org/techniques/T1556/'  #url which we want to scrap
		'https://attack.mitre.org'
	]
	custom_settings = {
        'ITEM_PIPELINES': {
            'mitre.pipelines.JsonWriterPipeline': 300
        }
    }

	def parse(self, response):
		url = response.css('table.techniques-table a::attr(href)').extract()
		for item in url:
			yield response.follow(item, callback = self.parse_dir_contents)

	def parse_dir_contents(self, response):
		TechniqueData = {}
		techniquename = response.css('h1::text').extract()
		techniquename = "".join(techniquename).strip().replace("\n", "")
		TechniqueData['techniquename'] = techniquename

		TechniqueData['detection'] = " ".join(response.xpath("//div[@class = 'container-fluid']/div/p/text()").extract())
		TechniqueData['description'] = " ".join(response.xpath("//div[@class = 'description-body']/p/a/text()" + "|" 
			+ "//div[@class = 'description-body']/p/text()").extract())	

		Mitigations = {}
		ProcedureExamples = {}		    

		tables = response.xpath("//table[@class = 'table table-bordered table-alternate mt-2']")

		for i in range(len(tables)):
			type = tables[i].xpath('thead/tr/th/text()').extract()[1]
			for row in tables[i].xpath('tbody/tr'):
				keys = row.xpath('td/a/text()')[0].extract() 
				mid_values = row.xpath('td/a/text()')[1].extract()
				values = row.xpath("td/p/text()" + "|" + "td/p/a/text()").extract()
				values = "".join(values)
				keys=''.join(e for e in keys if e.isalnum())
				keys=re.sub(" ","",keys)
				keys=re.sub("-","",keys)
				if type == "Name":
					ProcedureExamples[keys.strip()] = mid_values + " : " + values
				elif type == "Mitigation":
					Mitigations[keys.strip()] = mid_values + " : " + values

		if Mitigations:
			TechniqueData['mitigations'] = Mitigations
		if ProcedureExamples:
			TechniqueData['procedureexamples'] = ProcedureExamples
			if not Mitigations:
				Mitigations['mitigations'] = response.xpath("//div[@class = 'container-fluid']/p[not(@scite-citeref-number)]/text()").extract()[0].strip() 
				TechniqueData['mitigations']= Mitigations

		keys = response.xpath("//span[@class = 'h5 card-title']")
		values = response.xpath("//div[@class = 'col-md-11 pl-0']")
		datasource_val={}
		data_value=""

		for i in range(len(keys)):
			key = keys[i].xpath('text()').extract()
			key[0] = key[0].replace("\xa0", "")
			key[0] = re.sub("\s","",key[0])
			key[0] = re.sub("-","",key[0])
			key[0] = re.sub(":","",key[0])
			key[0] = key[0].lower()
			value = values[i].xpath('text()' + "|" + "a/text()").extract()

			if key[0]=="id" or key[0]=="subtechniqueof" or key[0]=="created" or key[0]=="lastmodified" or key[0]=="version":
				temp_val=""
				for j in range(len(value)):			
					value[j] = value[j].strip()
					if not "\n" in value[j] and len(value[j]) > 1:
						temp_val+=value[j]
			else:
				temp_val = []
				for j in range(len(value)):	
					value[j] = value[j].strip()
					if not "\n" in value[j] and len(value[j]) > 1:
						temp_val.append(value[j])
				
			if key[0] == "tactic":
				TechniqueData["tactics"] = temp_val
				
			else :
				TechniqueData[key[0].lower()] = temp_val
		
		dataSourcesArray = []
		dsTableRows = response.xpath("//table[@class = 'table datasources-table table-bordered']/tbody/tr")

		for i in range(len(dsTableRows)):
			dsRowData = dsTableRows[i].xpath('td/a/text()').extract()
			if(len(dsRowData) == 3):
				if(i != 0):
					dataSourcesArray.append({'id' : did, 'data source' : dsource, 'data components' : dcomp})
				dcomp = []
				did = dsRowData[0]
				dsource = dsRowData[1]
				dcomp.append(dsRowData[2])

			elif(len(dsRowData) == 1):
				dcomp.append(dsRowData[0])
				
			if(i == len(dsTableRows) - 1):
				dataSourcesArray.append({'id' : did, 'data source' : dsource, 'data components' : dcomp})	

		if(len(dataSourcesArray) != 0):
			TechniqueData['datasources'] = dataSourcesArray
			
		yield MitreItem(**TechniqueData)	