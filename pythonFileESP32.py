import prequests
import ujson

#esp32 must be connected to the internet

deployment_code = "Paste here your google script deployment code"

row_data = {}
row_data["var1"] = "valor 1"
row_data["var2"] = 500
row_data["var3"] = "teste deploy"
#row_data["varx"] = valuex  (using this you can create more attributes to send)

request_data = ujson.dumps({
    	"parameters": row_data
})

r = prequests.post("https://script.google.com/macros/s/" + deployment_code + "/exec",
                  headers = {'content-type': 'application/json'},
                  data = request_data)
r.close()
