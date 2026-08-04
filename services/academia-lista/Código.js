const baseURL = "growith.mx/academia"
const clientsSheetID = "1exc9-uO4Nz0G1YfoGr6uy-HMjSTlyyESIPEpRrn5FXg"

function doGet(e) {
  // Clientes
  // const clients = getClientsArray(clientsSheetID)
  const clients = getClientObjects(clientsSheetID)
  // TODO: Funcion para obtener carpetas de clientes 
  // TODO: Funcion para obtener logos de clientes

  Logger.log(JSON.stringify(clients))
}

function doPost(e){
  // CONFIG
  let httpResponse
  const clientSTR = e ? e.parameter.slug : "JSON V1"

  // Inicializar carpetas del cliente
  const newClientFolders = initClientFolders(clientSTR, clientsSheetID)

  // LOG and HTTP RESPONSE 
  httpResponse = {
    status: "success",
    message: `Carpetas de Cliente '${clientSTR}' creadas exitosamente`,
    data: newClientFolders
  }
  Logger.log(httpResponse) 
  return ContentService.createTextOutput(JSON.stringify(httpResponse))
}

