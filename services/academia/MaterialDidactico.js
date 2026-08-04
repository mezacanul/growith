function getMaterialDidacticoURLs(periodStr) {
  const resourcesFolderID = "1nHcC9jaZ5yFV3G3uVvQCkpQWczxLfA8B"
  const allFiles = GrowithSDK.getAllFilesFromFolder(resourcesFolderID)
  const periodFolder = allFiles.find(f => {
    return f.name.split(".")[0] == GrowithSDK.toTitleCase(periodStr)
  })
  
  // JSONLog("Period folder:", periodFolder)
  return {
    embed: GrowithSDK.URLUtils(periodFolder.id).getEmbedURL("grid"),
    webLink: periodFolder.webViewLink
  }
  // const periodFolderID = getChildFolderId(resourcesFolderID, periodStr)
  // return createDriveEmbedURL(periodFolderID)
}
