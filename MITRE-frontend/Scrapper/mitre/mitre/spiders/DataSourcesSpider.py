import scrapy, time
import re
import string, collections
from ..items import MitreItem
import logging
from scrapy.utils.log import configure_logging 

class DataSourcesSpider(scrapy.Spider):
	
    name = 'datasources'  #name of the spider
    start_urls = [
        'https://attack.mitre.org/datasources/'
    ]
    custom_settings = {
        'ITEM_PIPELINES': {
            'mitre.pipelines.DataSourcesPipeline': 300
        }
    }

    def parse(self, response):
        rows = response.xpath("//table[@class = 'table table-bordered table-alternate mt-2']/tbody/tr")

        for i in range(len(rows)):
            url = rows[i].css("td a::attr(href)").extract()[1]
            yield response.follow(url, callback = self.parse_ds_contents)

    def parse_ds_contents(self, response):
        DsObject = {}

        name = response.xpath("//div[@class = 'container-fluid']/h1/text()").extract()
        name = "".join(name).strip().replace("\n", "")
        DsObject['name'] = name

        DsObject['description'] = response.xpath("//div[@class = 'description-body']/p/text()").extract()[0]

        keys = response.xpath("//span[@class = 'h5 card-title']")
        values = response.xpath("//div[@class = 'col-11 pl-0']")
        for i in range(len(keys)):
            key = keys[i].xpath('text()').extract()
            key[0] = key[0].replace("\xa0", "")
            key[0] = re.sub("\s","",key[0])
            key[0] = re.sub("-","",key[0])
            key[0] = re.sub(":","",key[0])
            key[0] = key[0].lower()
            value = values[i].xpath('text()').extract()[1]
            DsObject[key[0]] = "".join(value).strip().replace("\n", "")

        DsObject['datacomponents'] = []
        dcomps = response.xpath("//div[@class = 'col-md-12 section-view']")
        for i in range(len(dcomps)):
            tempDict  = {}
            title = dcomps[i].xpath("div[@class = 'section-desktop-view anchor-section']/h4/text()").extract()[0]
            title = title[len(name)+1 : ].strip()
            tempDict[title] = {}
            tempDict[title]['description'] = dcomps[i].xpath("div[@class = 'section-desktop-view anchor-section']/div[@class = 'description-body']/p/text()").extract()[0]
            tempDict[title]['associatedIds'] = []

            tempVar = ""
            trows = dcomps[i].xpath("table[@class = 'table techniques-used background table-bordered']/tbody/tr")
            for row in trows:
                ids = row.xpath("td/a/text()").extract()[0]
                if ids[0] == '.':
                    ids = tempVar + ids
                else :
                    tempVar = ids
                tempDict[title]['associatedIds'].append(ids)

            DsObject['datacomponents'].append(tempDict)

        yield DsObject