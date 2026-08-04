function getGlobalAssets(globalAssetsArr){
  const assetsFolderID = "1b9H1RwZEgkVh_KxDNbriDdN_98cTgbyN"
  const assetsFiles = GrowithSDK.getAllFilesFromFolder(assetsFolderID)
  const filteredAssets = assetsFiles
    .map(asset => {
      const onlyName = asset.name.split(".")[0]
      return {id: asset.id, name: onlyName}
    })
    .filter((asset) => {
      return globalAssetsArr.includes(asset.name)
    })
  
  const assetsObj = Object.fromEntries(
    filteredAssets.map(({id, name}) => [GrowithSDK.toCamelCase(name), id])
  )
  return assetsObj
}