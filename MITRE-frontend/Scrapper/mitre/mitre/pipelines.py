# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter   

import json
import os
import mysql.connector

class JsonWriterPipeline:
    
    def open_spider(self, spider):
        self.file = open('MitreData.json', 'w')

    def close_spider(self, spider):
        self.file.close()

    def process_item(self, item, spider):
        #if "q" not in item:
        line = json.dumps(ItemAdapter(item).asdict()) + "\n"
        self.file.write(line)
        return item
        # else:
        #     return item

class DataSourcesPipeline:
    
    def open_spider(self, spider):
        self.file = open('DataSources.json', 'w')

    def close_spider(self, spider):
        self.file.close()

    def process_item(self, item, spider):
        #if "q" not in item:
        line = json.dumps(ItemAdapter(item).asdict()) + "\n"
        self.file.write(line)
        return item

# class MetricsMysqlPipeline:
#     def __init__(self):
#         self.create_connection()
#         self.create_table()

#     def create_connection(self):
#         self.conn = mysql.connector.connect(
#             host = 'localhost',
#             user = 'root',
#             passwd = '',
#             database = 'mitreattack'
#         )
#         self.curr = self.conn.cursor

#     def create_table(self):
#         self.curr.execute(""" DROP TABLE IF EXISTS metrics""")
#         self.curr.execute(""" create table metrics(
#             techniquename text,
#             detection text,
#             description text,
#             )""")


