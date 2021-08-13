function doGet(e) {
  dataDrive = e;
  save_data_to_sheet(dataDrive);
}

function doPost(e) {
  dataDrive = e;
  save_data_to_sheet(dataDrive);
}



function save_data_to_sheet(e){
  Logger.log("--- doGet ---");
  Logger.log(e.parameters);
 
 var tag = "",
     value = "";
 
  try {
 
    // this helps during debuggin
    if (e == null){e={}; e.parameters = {tag:"test",value:"-1"};}
    tag = e.parameters.tag;
    value = e.parameters.value;
    // save the data to spreadsheet
    save_data(tag, value,e);
    return ContentService.createTextOutput("Wrote:\n  tag: " + tag + "\n  value: " + value);
 
  } catch(error) { 
    Logger.log(error);    
    return ContentService.createTextOutput("oops...." + error.message 
                                            + "\n" + new Date() 
                                            + "\ntag: " + tag +
                                            + "\nvalue: " + value);
  }  
}
 
// Method to save given data to a sheet
function save_data(tag, value,e){
  Logger.log("--- save_data ---"); 
  try {
    var dateTime = new Date();
    // Paste the URL of the Google Sheets starting from https thru /edit
    // For e.g.: https://docs.google.com/..../edit 
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/14C9TgdYTxNokt1g_KMBBiMaq0gqRmuUFhwTJKjViIBM/edit");
    var dataLoggerSheet = ss.getSheetByName("PG1");
 
    // Get last edited row from DataLogger sheet
    var row = dataLoggerSheet.getLastRow() + 1;
 
    // Start Populating the data
    dataLoggerSheet.getRange("E" + row).setValue(e);
    dataLoggerSheet.getRange("A" + row).setValue(row -1); // ID
    dataLoggerSheet.getRange("B" + row).setValue(dateTime); // dateTime
    dataLoggerSheet.getRange("C" + row).setValue(tag); // tag
    dataLoggerSheet.getRange("D" + row).setValue(value); // value
  }
 
  catch(error) {
    Logger.log(JSON.stringify(error));
  }
 
  Logger.log("--- save_data end---"); 
}

 var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/14C9TgdYTxNokt1g_KMBBiMaq0gqRmuUFhwTJKjViIBM/edit#gid=0");

