import prequests
import ujson

request_data = ujson.dumps({
    	"parameters": {
        "tag": "tagtest",
        "value":"valuetest",
        "valor3": 500
    	}
})

r = prequests.post("https://script.google.com/macros/s/"deployment_code"/exec",
                  headers = {'content-type': 'application/json'},
                  data = request_data)
print(r.content)
r.close()

