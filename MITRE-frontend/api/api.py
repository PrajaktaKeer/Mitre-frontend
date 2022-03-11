from flask import Flask
from datetime import datetime
date = datetime.now()

app = Flask(__name__)

@app.route('/date',methods=['GET'])
def api():
    return {
        'date' : str(date.strftime("%d/%m/%y")),
        'time': str(date.strftime("%H:%M:%S"))
    }

# @app.route('/scrape',methods=['GET'])
# def scrape():
#     return {
#         str(os.system('python3 ./Scrapper/hello.py'))
#     }
# if __name__ == "__main__":
#     app.run(debug=True)