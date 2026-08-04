/**
 * Searches a Google Sheet for rows where a specific column matches a target value.
 *
 * @param {string} sheetDocID - The ID of the Google Sheet to search in.
 * @param {string} sheetName - The name of the tab/sheet to search in.
 * @param {string} searchValue - The value to look for (e.g., "s").
 * @param {number} columnNumber - The 1-based column number (e.g., 10 for column J).
 * @return {Array<Array<any>>} Array of matching rows.
 */
function searchRowsByColumn(sheetDocID, sheetName, searchValue, column) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const columnNumber = alphabet.indexOf(column) + 1;
  // 1. Open sheet by ID
  const ss = SpreadsheetApp.openById(sheetDocID);
  const sheet = sheetName ? ss.getSheetByName(sheetName) : ss.getSheets()[0];

  if (!sheet) {
    console.error("Sheet not found: " + sheetName);
    return [];
  }

  // 2. Fetch all data within the sheet's populated range
  const range = sheet.getDataRange();
  const data = range.getValues();

  // 3. Convert 1-based column number to 0-based JavaScript array index
  const columnIndex = columnNumber - 1;

  // 4. Filter the rows based on the column condition
  const filteredRows = data.filter((row) => {
    // Ensure the index exists and handle values as trimmed strings
    if (row[columnIndex] !== undefined) {
      return String(row[columnIndex]).trim() === searchValue;
    }
    return false;
  });

  // 5. Log operational insights for debugging
  console.log(
    "Search completed. Found " + filteredRows.length + " matching rows.",
  );

  return filteredRows;
}
