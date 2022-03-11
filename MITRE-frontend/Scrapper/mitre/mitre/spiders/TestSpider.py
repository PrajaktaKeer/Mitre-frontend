import scrapy, time
import re
import string, collections
from ..items import MitreItem
import logging
from scrapy.utils.log import configure_logging 

class MetricsSpider(scrapy.Spider):

    name = 'test'  #name of the spider
    start_urls = [
    'https://attack.mitre.org/techniques/T1595/'  #url which we want to scrap
    #'https://attack.mitre.org'
    ]

    custom_settings = {
        'ITEM_PIPELINES': {
            'mitre.pipelines.JsonWriterPipeline': 300
        }
    }

    def parse(self, response):
    # 	url = response.css('table.techniques-table a::attr(href)').extract()
    # 	for item in url:
    # 		yield response.follow(item, callback = self.parse_dir_contents)

    # def parse_dir_contents(self, response):
        TechniqueData = {}

        x = response.xpath("//div[@class = 'container-fluid']/div/p/text()").extract()
        y = response.xpath("//div[@class = 'description-body']/p/a/text()" + "|" + "//div[@class = 'description-body']/p/text()").extract()

        print("x = ", x)
        print()
        print("y = ", y)
        print()

        TechniqueData['detection'] = " ".join(response.xpath("//div[@class = 'container-fluid']/div/p/text()").extract())
        TechniqueData['description'] = " ".join(response.xpath("//div[@class = 'description-body']/p/a/text()" + "|" 
            + "//div[@class = 'description-body']/p/text()").extract())	
            
        yield MitreItem(**TechniqueData)	