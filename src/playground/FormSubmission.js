function saveFormData(values) {
  const SHEET_ID = 'YOUR_SHEET_ID';
  const SHEET_NAME = 'Responses';

  const sheet = SpreadsheetApp
    .openById(SHEET_ID)
    .getSheetByName(SHEET_NAME);

  sheet.appendRow(values);
}
