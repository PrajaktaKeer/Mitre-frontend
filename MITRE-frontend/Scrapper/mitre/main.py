#this is the main file to be executed
from flask import Flask

import os
app = Flask(__name__)

@app.route('/scrape',methods=['GET'])
def scrape():
    os.system('scrapy crawl metrics') #calling the scrapper after which data will be stored in json file
   

    # data = open("log.txt","r")

    # return {
    #     data
    # }
    return "hello"