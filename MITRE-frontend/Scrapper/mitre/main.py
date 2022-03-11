# import os

# os.system('scrapy crawl metrics')
# os.system('scrapy crawl datasources')
# os.system('python3 create_index.py')
# os.system('python3 JsonToEsMatrix.py')
# os.system('python3 JsonToEsDataSources.py')
# os.remove('MitreData.json')
# os.remove('DataSources.json')

#this is the main file to be executed
from flask import Flask
from pathlib import Path

import os
app = Flask(__name__)

@app.route('/scrape',methods=['GET'])
def scrape():
    os.system('scrapy crawl metrics')
    os.system('scrapy crawl datasources')
    os.system('python3 create_index.py')
    os.system('python3 JsonToEsMatrix.py')
    os.system('python3 JsonToEsDataSources.py')
    os.remove('MitreData.json')
    os.remove('DataSources.json')

    data = Path('log.txt').read_text()

    return data
    # return "hello"