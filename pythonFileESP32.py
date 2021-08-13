import network
import time
import urequests
import ujson

request_data = ujson.dumps({
    	"parameters": {
        "tag": "espdatatag",
        "value":"vvalue"
    	}
})

r = urequests.post("https://script.google.com/macros/s/AKfycbz9_6mlILU6XeCM89hFuu-_IAzc1pjAiuCPtnW-Q7u1vzNvTxsWYShHgu29bYTmXC4j/exec?tag=esptag&value=vvalue",
                  headers = {'content-type': 'application/json'},
                  data = request_data)
print(r.content)
r.close()
