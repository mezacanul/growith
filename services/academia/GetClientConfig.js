function getClientConfig(clientSTR) {
  const keys = [
    "folderId", 
    "id",
    "period", 
    "year", 
    "modality", 
    "dayOfCall", 
    "timeOfCall", 
    "meetURL"
  ]
  const sheetID = "1exc9-uO4Nz0G1YfoGr6uy-HMjSTlyyESIPEpRrn5FXg"
  const sheet = SpreadsheetApp
    .openById(sheetID).getSheets()[0] 
  
  const data = sheet.getRange(
    2,
    1,
    sheet.getLastRow() - 1,
    sheet.getLastColumn()
  ).getValues();
  // Logger.log("rows")
  // Logger.log(data)
  const row = data.find(r => r[1] === clientSTR);

  if(!row){
    return null
  } else {
    // Select the row with only the data needed
    const sliced = row.slice(0, 8)
    
    // Map the keys to values and make an object
    const object = Object.fromEntries(
      sliced.map((value, index) => [keys[index], value])
    )
    return object
  }
}

function getClientFolder(clientSTR){
  const clientsFolderID = "1p5asZvhvOJemHIOTKTDKC4uGEN4n-bTt"
  const folderName = GrowithSDK.toTitleCase(clientSTR)
  const clientFolder = GrowithSDK.getFileByName(clientsFolderID, folderName)
  return clientFolder
}

function getClientLogo(clientFolder){
  const logo = GrowithSDK.getFileByName(clientFolder.id, "logo", true)
  if(!logo){
    return null
  }
  // Logger.log(GrowithSDK.makeFilePublic(logo))
  GrowithSDK.makeFilePublic(logo)

  return logo
}

function getClientCalendar(periodSTR, clientID){
  const calendariosFolderID = "1O8zpO9BrDtJ-fVrgs63KaxmFlaUZ1QUR"
  const calendarios = GrowithSDK.getAllFilesFromFolder(calendariosFolderID)
  const names = calendarios
    .map(({name}) => name.split(".")[0])
  
  const clientIndex = names.indexOf(clientID)
  if(clientIndex !== -1){
    return calendarios[clientIndex]
  }

  const serializedPeriodSTR = GrowithSDK.serializeString(periodSTR, "dash")
  const periodIndex = names.indexOf(serializedPeriodSTR)
  if(periodIndex !== -1){
    return calendarios[periodIndex]
  }

  return null
}

function getImplementacionesFolders(clientFolder){
  // Config
  let academiaID
  const requiredFolders = [
    "Implementaciones", 
    "Imp. Destacadas"
  ]

  // Obtenemos carpeta Academia y su contenido
  const academiaFolder = GrowithSDK.getFileByName(clientFolder.id, "Academia")
  academiaID = academiaFolder.id
  const content = GrowithSDK.getAllFilesFromFolder(academiaID)
  
  // Filtramos las carpetas que requerimos
  const filteredContent = content
    .filter(f => requiredFolders.includes(f.name))
  
  if(filteredContent.length > 0){
    return filteredContent
  } else {
    return null
  }
}