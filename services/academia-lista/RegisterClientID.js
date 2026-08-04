function registerClientFolderID(clientSTR, clientFolderID, clientsSheetID) {
  // Get the sheet and the column B
  const sheet = SpreadsheetApp.openById(clientsSheetID).getSheets()[0]
  const values = sheet.getRange("B1:B").getValues();

  let response
  
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] === clientSTR) {
      const row = i + 1; // Sheets are 1-indexed
      sheet.getRange(row, 1).setValue(clientFolderID); // Column A
      // return row;
      response = { clientSTR, clientFolderID }
    }
  }

  return response
}