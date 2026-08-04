function initClientFolders(clientSTR, clientsSheetID, clientsFolderID) {
  // CONFIG
  const implementacionesFolders = [
    {name:"Implementaciones", role: "writer"},
    {name:"Imp. Destacadas", role: "reader"}
  ]

  // NEW Client folders
  const newClientFolder = GrowithSDK.createFolder(clientSTR, clientsFolderID)
  const registerResponse = registerClientFolderID(clientSTR, newClientFolder.id, clientsSheetID) 
  Logger.log({method: "register", output: registerResponse})
  // Logger.log(registerResponse)
  const newAcademia = GrowithSDK.createFolder("Academia", newClientFolder.id)
  const newImplementaciones = implementacionesFolders.map(nFolder => (
    GrowithSDK.createFolder(
      nFolder.name, 
      newAcademia.id, 
      true,
      nFolder.role
    )
  ))

  return {
    cliente: newClientFolder,
    academia: newAcademia,
    implementaciones: newImplementaciones
  }
}
