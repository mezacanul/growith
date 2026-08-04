function getEventDetails() {
  const sheetID = "1OoogfuusTBlLGDsHgoLhD4S13MD0cPRx63SP9tmIzTA"
  const ss = SpreadsheetApp.openById(sheetID)
  const sheet = ss.getSheets()[0]
  const data = sheet.getRange("B2:B9").getValues()
  const evento = {
    titulo: data[0][0],
    descripcion: data[1][0],
    fecha: data[2][0],
    hora: data[3][0],
    url: data[4][0],
    mensaje: data[5][0],
    textoIzq: data[6][0],
    textoBtn: data[7][0],
  }
  return evento
}
