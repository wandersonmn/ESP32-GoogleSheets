function doGet(e) {
  dataDrive = e;
  read_data(dataDrive);
}

function doPost(e) {
  dataDrive = JSON.parse(e.postData.contents);
  read_data(dataDrive);
}

function read_data(e){
  Logger.log("--- read_data ---");
  /*
  for a future version, try to implement something that allows sending the spreadsheet you want to write as a parameter
  */
  try {
    save_data(e);
    return ContentService.createTextOutput("the data was written in the spreadsheet");
 
  } catch(error) { 
    Logger.log(error);    
    return ContentService.createTextOutput("oops...." + error.message);
  }  
}
 
// Method to save given data to a sheet
function save_data(e){
  Logger.log("--- save_data ---"); 
  try {
    var dateTime = new Date();
    // ss must be the URL of the Google Sheets starting from https thru /edit 
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/"spreadsheet_ID"/edit");
    var dataLoggerSheet = ss.getSheetByName("PG1"); //spreadsheet page name(it's not the file name)
 
    // Get last edited row from DataLogger sheet
    var row = dataLoggerSheet.getLastRow() + 1;
 
    // Start Populating the data
    dataLoggerSheet.getRange(row, 1).setValue(row -1); // ID in column A
    dataLoggerSheet.getRange(row, 2).setValue(dateTime); // dateTime in column B
    
    //itarate over the object writting it's parameters in the spreadsheet
    var column = 3;
    var object = e.parameters;
    for (var i in object){
      dataLoggerSheet.getRange(row, column).setValue(object[i]);
      column ++;
    }
      
  }
 
  catch(error) {
    Logger.log(JSON.stringify(error));
  }
 
  Logger.log("--- save_data end---"); 
}
