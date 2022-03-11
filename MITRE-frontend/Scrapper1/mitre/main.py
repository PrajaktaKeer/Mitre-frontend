#this is the main file to be executed
from flask import Flask

import os
app = Flask(__name__)

@app.route('/scrape',methods=['GET'])
def scrape():
    os.system('scrapy crawl metrics') #calling the scrapper after which data will be stored in json file
    os.system('python3 create_index.py')
    os.system('python3 json_to_es.py')
    os.remove('MitreData.json')

    data = open("log.txt","r")

    return {
        data
    }
    # return "hello"