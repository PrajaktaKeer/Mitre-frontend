
# this is the main file to be executed
from flask import Flask
from flask_cors import CORS, cross_origin
from pathlib import Path
from datetime import datetime

import os
app = Flask(__name__)
CORS(app)


@app.route('/scrape', methods=['GET'])
def scrape():
    os.system('scrapy crawl metrics')
    os.system('scrapy crawl datasources')
    os.system('python3 create_index.py')
    os.system('python3 JsonToEsMatrix.py')
    os.system('python3 JsonToEsDataSources.py')
    os.remove('MitreData.json')
    os.remove('DataSources.json')
    os.system('python3 storeHistory.py')

    data = Path('log.txt').read_text()

    dataToReturn = data[-925:]
    timestamp = data[-522:-494]

    date_time_obj = datetime.strptime(timestamp, '%Y, %m, %d, %H, %M, %S, %f')

    return {
        'log': dataToReturn,
        'date': str(date_time_obj.date()),
        'time': str(date_time_obj.time())
    }

if __name__ == '__main__':
    #app.run(host="0.0.0.0", port=8089)
    app.run(debug = True, port=8089)
