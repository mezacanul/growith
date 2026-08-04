function getClientObjects(sheetID) {
  const keys = [
    "folderID",
    "clientSTR", 
    "period",
    "year",
    "modality",
    "dayOfCall",
    "timeOfCall",
    "meetURL",
  ]

  const sheet = SpreadsheetApp.openById(sheetID).getSheets()[0]
  const rows = sheet.getRange(
    2,
    1,
    sheet.getLastRow() - 1,
    7
  ).getValues();

  // return rows

  // For each row
  const mapped = rows.map(cRow => {
    // For each col
    const obj = cRow.reduce((acc, current, idx) => {
      acc[keys[idx]] = current
      return acc 
    }, {})
    return obj
  })
  return mapped
}