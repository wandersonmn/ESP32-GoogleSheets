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
