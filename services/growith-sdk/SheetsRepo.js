function appendRowToSheet(sheetID, values, log = false) { 
  // Verify sheetID and values are present 
  if(!sheetID || !values){
    throw new Error("'sheetID' y 'values' son requeridos")
  }

  try {
    // Open sheet doc 
    const sheetDoc = SpreadsheetApp
      .openById(sheetID)
    // Get Name
    const sheetName = sheetDoc.getName()
    // Get first sheet
    const sheet = sheetDoc
      .getSheets()[0]
    // Append data (array) as row
    sheet.appendRow(values);
    
    const message = `Valores agregados al documento Google Sheet '${sheetName}': ${values}` 
    
    // Log if required 
    if(log){
      Logger.log(message)
    }

    return {
      success: true,
      message
    }
  } catch(e) {
    Logger.log(`Error appending to sheet: ${e.message}`)
    return {
      success: false,
      message: e.message
    }
  }
  
}
