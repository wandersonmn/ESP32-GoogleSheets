# ESP32-GoogleSpreadsheet
Send data to google spreadsheets using ESP32 with Micropython
# Hardware
* ESP32
# Software
* ESP32 Micropython Firmware v1.16 (https://docs.micropython.org/en/latest/esp32/tutorial/intro.html)
* BIPES (https://bipes.net.br/beta2/ui/)
* prequests.py copy from: https://gist.github.com/SpotlightKid/8637c685626b334e5c0ec341dd269c44
* Google Sheets
# Google Script
1. Create a new google spreadsheet and name it as you want
2. Select the menu item Tools > Script editor.
3. Delete any code in your script editor, and paste the code in saveDataGoogleSheet.gs
4. Replace in the code your spreadsheet_ID and spreadsheet page name
> var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/"spreadsheet_ID"/edit");
> 
> var dataLoggerSheet = ss.getSheetByName("Sheet1");
- Sheet1 is the default page name if you haven't changed it
5. Save the project
6. Click on Deploy > New Deployment
7. Select type > Web app
8. Type a description for your deployment, in the option _**Who has access**_ select _**anyone**_ and click on _**Deploy**_
9. Copy the **deployment id** to somewhere else and keep it, we'll use it later
# ESP32 Micropython code
- The urequests library included in firmware version v1.16 does not suport redirects, so we are using an altered version of the library, **prequests.py** that can handle redirects, then you need to include this file in ESP32 file system.
- Using BIPES allows you quickly connect, program, deploy, test,... ESP32
- You must connect esp32 to the internet
1. Open the file pythonFileESP32.py and paste your **deployment id** on **deployment_code**
> deployment_code = "Paste here your google script deployment code"
2. Define all data you want to insert in the spreadsheet on dictionary **row_data**
> row_data = {}<br />
> row_data["var1"] = "valor 1" <br />
> row_data["var2"] = 500 <br />
> row_data["var3"] = "teste deploy" <br />
> #row_data["varx"] = valuex  (using this you can create more attributes to send)
3. send files to the ESP32
