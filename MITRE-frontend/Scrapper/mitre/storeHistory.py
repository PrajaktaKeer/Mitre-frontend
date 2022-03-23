import shelve
import json
from datetime import datetime
from pathlib import Path
from sys import stdout

history = shelve.open("scrapperHistory")

data = Path('log.txt').read_text()

actualOutput = data[-925:]

actualOutput = actualOutput.replace('\\n', '\n').replace('\\t', '\t')

timestamp = data[-522:-494]

#datetime.datetime(2022, 3, 12, 3, 4, 16, 57237)
# ‘year’, ‘month’, ‘date’, ‘hour’, ‘minute’, ‘seconds’, ‘microseconds’.
date_time_obj = datetime.strptime(timestamp, '%Y, %m, %d, %H, %M, %S, %f')

history[str(date_time_obj)] = actualOutput

print(str(list(history.items())))

# dictHistory = dict(history)

# for key in dictHistory:
#     value = dictHistory[key]
#     value = value.split(sep='\n')
#     dictHistory[key] = value

# print(str(dictHistory))

history.close()
