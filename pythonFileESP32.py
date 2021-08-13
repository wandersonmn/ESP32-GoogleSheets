import network
import time
import prequests
import ujson

request_data = ujson.dumps({
    	"parameters": {
        "tag": "tagtest",
        "value":"valuetest"
    	}
})

r = urequests.post("https://script.google.com/macros/s/"Deployment_code"/exec",
                  headers = {'content-type': 'application/json'},
                  data = request_data)
print(r.content)
r.close()
