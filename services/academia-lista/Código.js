// const baseURL = "https://growith-academia.vercel.app/academia"
const clientsSheetID = "1exc9-uO4Nz0G1YfoGr6uy-HMjSTlyyESIPEpRrn5FXg"
const clientsFolderID = "1p5asZvhvOJemHIOTKTDKC4uGEN4n-bTt"

const toAcademiaURL = (str) => `/academia/${GrowithSDK.serializeString(str, "dash")}`

function doGet(e) {
  // Clientes
  // const clients = getClientsArray(clientsSheetID)
  const clientsConfig = getClientObjects(clientsSheetID)
  // const clientsFolders = GrowithSDK.getAllFilesFromFolder(clientsFolderID)

  const clientsMapped = clientsConfig.map(client => {
    const folderID = client.folderID != "" ? client.folderID : null
    const websiteURL = client.folderID ? toAcademiaURL(client.clientSTR) : null 
    const period = `${(GrowithSDK.toTitleCase(client.period))} ${client.year} - ${client.modality.toUpperCase()}`

    return {
      clientSTR: client.clientSTR,
      folderID,
      websiteURL,
      period
    }
  })

  const send = JSON.stringify(clientsMapped)  
  Logger.log(send)
  return ContentService.createTextOutput(send)
  // Logger.log(JSON.stringify(clientsConfig))

}

function doPost(e){
  // CONFIG
  let httpResponse
  try {
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
  } catch(e) {
    const send = JSON.stringify({
      status: "error",
      message: `Error al inicializar sitio: ${clientName}`
    })
    return ContentService.createTextOutput(send)
  }
}

