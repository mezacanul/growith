const baseURL = "growith.mx/academia"
const clientsSheetID = "1exc9-uO4Nz0G1YfoGr6uy-HMjSTlyyESIPEpRrn5FXg"
const clientsFolderID = "1p5asZvhvOJemHIOTKTDKC4uGEN4n-bTt"

const toAcademiaURL = (str) => `${baseURL}/${GrowithSDK.serializeString(str, "dash")}`

function doGet(e) {
  // Clientes
  // const clients = getClientsArray(clientsSheetID)
  const clientsConfig = getClientObjects(clientsSheetID)
  // const clientsFolders = GrowithSDK.getAllFilesFromFolder(clientsFolderID)

  const clientsMapped = clientsConfig.map(client => {
    return {
      clientSTR: client.clientSTR,
      folderID: client.folderID != "" ? client.folderID : null,
      websiteURL: client.folderID ? toAcademiaURL(client.clientSTR) : null
    }
  })

  Logger.log(JSON.stringify(clientsMapped))
  // Logger.log(JSON.stringify(clientsConfig))

}

function doPost(e){
  // CONFIG
  let httpResponse
  const payload = e ? JSON.parse(e.postData.contents) : null
  const clientName = payload ? payload.clientName : "Jafa"
  // const titleCased = GrowithSDK.toTitleCase(clientSTR)

  // Inicializar carpetas del cliente
  const newClientFolders = initClientFolders(clientName, clientsSheetID, clientsFolderID)
  const data = {
    newFolder: newClientFolders.cliente,
    websiteURL: toAcademiaURL(clientName)
  }
  Logger.log(data)

  // LOG and HTTP RESPONSE 
  httpResponse = {
    status: "success",
    message: `Carpetas de Cliente '${clientName}' creadas exitosamente`,
    data
  }
  const send = JSON.stringify(httpResponse)
  Logger.log(send) 
  return ContentService.createTextOutput(send)
}

