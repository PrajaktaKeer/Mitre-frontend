import shelve
from datetime import datetime
from pathlib import Path

history = shelve.open("scrapperHistory.txt")

data = Path('log.txt').read_text()

actualOutput = data[-925:]

timestamp = data[-522:-494]

#datetime.datetime(2022, 3, 12, 3, 4, 16, 57237)
# ‘year’, ‘month’, ‘date’, ‘hour’, ‘minute’, ‘seconds’, ‘microseconds’.
date_time_obj = datetime.strptime(timestamp, '%Y, %m, %d, %H, %M, %S, %f')

history[str(date_time_obj)] = actualOutput

print(str(list(history.items())))

history.close()
