function getGlobalAssets(namesArray) {
  const assetsFolderID = "1b9H1RwZEgkVh_KxDNbriDdN_98cTgbyN";
  const assetsFiles = GrowithSDK.getAllFilesFromFolder(assetsFolderID);
  const filteredAssets = assetsFiles.filter((asset) =>
    namesArray.includes(asset.name.split(".")[0]),
  );

  return assetsFiles;
}
