from flask import Flask
# from datetime import datetime
import shelve

# date = datetime.now()

app = Flask(__name__)

# @app.route('/date',methods=['GET'])
# def api():
#     return {
#         'date' : str(date.strftime("%d/%m/%y")),
#         'time': str(date.strftime("%H:%M:%S"))
#     }


@app.route('/history', methods=['GET'])
def api():

    history = shelve.open(
        "/home/prajakta/Mitre-frontend/MITRE-frontend/Scrapper/mitre/scrapperHistory.txt")

    return str(list(history.items()))
