function serializeSectionName(name) {
  return String(name)
    .trim()
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .join('-');
}

function getNormalizedData() {
  const SHEET_ID = 'YOUR_SHEET_ID';
  const SHEET_NAME = 'Sheet1';

  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, 3).getValues();

  const result = {};
  let currentSection = null;

  values.forEach(([title, value, key]) => {
    if (title && !value && !key) {
      currentSection = serializeSectionName(title);
      result[currentSection] = {};
      return;
    }

    if (!currentSection || !key) return;

    result[currentSection][key] = value;
  });

  return result;
}
