// type ScriptConfig = "dev" | "live"
const scriptConfig = {
  status: "live",
};

function doGet(e) {
  // ************************************
  // Configuracion
  // ************************************
  const pageConfig = getPageConfig(e, "soferp");
  let errorObj;

  // ************************************
  // Si no hay ID de cliente,
  // se envia mensaje de error al usuario
  // ************************************
  if (pageConfig.clientID == null) {
    errorObj = {
      status: "error",
      message: "Parametro ID es requerido",
    };
    JSONLog("Error:", errorObj);
    return ContentService.createTextOutput(JSON.stringify(errorObj));
  }

  const clientData = getClientData(pageConfig);

  if (!clientData) {
    errorObj = {
      status: "error",
      message: `No se encontro cliente '${pageConfig.clientSTR}'`,
    };
    JSONLog("Error", errorObj);
    return ContentService.createTextOutput(JSON.stringify(errorObj));
  }

  JSONLog("DATA:", clientData);
  return ContentService.createTextOutput(JSON.stringify(clientData));
}

function getClientData(pageConfig) {
  // ************************************
  // Configuracion
  // ************************************
  // const pageConfig = getPageConfig(e, "soferp")
  const globalAssetsArr = [
    "lets-growith",
    "logo-business-academy",
    "logo-growith",
    "hero-bg",
  ];

  // ************************************
  // - se obtienen la CONFIG del cliente
  // - se obtiene la CONFIG de pagina
  // ************************************

  // ************************************
  // Configuracion de cliente
  // ************************************
  const clientConfig = getClientConfig(pageConfig.clientSTR);
  // Si no se encontro cliente, se envia null
  if (!clientConfig) {
    return null;
  }

  const clientFolder = getClientFolder(pageConfig.clientSTR);
  const periodStr = `${clientConfig.period} ${clientConfig.year}`;
  const logo = getClientLogo(clientFolder);
  const calendar = getClientCalendar(
    `${periodStr}-${clientConfig.modality}`,
    pageConfig.clientID,
  );
  const implementacionesFolders = getImplementacionesFolders(clientFolder);

  // ************************************
  // Configuracion de pagina
  // ************************************
  const evento = getEventDetails();
  const globalAssets = getGlobalAssets(globalAssetsArr);
  const materialDidacticoURLs = getMaterialDidacticoURLs(periodStr);
  const youtubeVideos = getYoutubeVideos();

  // TESTING BLOCK
  if (scriptConfig.status == "dev") {
    JSONLog("Evento:", evento);
    JSONLog("Global Assets:", globalAssets);
    JSONLog("Client Config:", clientConfig);
    JSONLog("Client Folder:", clientFolder);
    JSONLog("Period:", periodStr);
    JSONLog("Logo:", logo);
    JSONLog("Calendar:", calendar);
    JSONLog("Implementaciones", implementacionesFolders);
    JSONLog("Material Didactico URLs:", materialDidacticoURLs);
    JSONLog("Youtube Videos:", youtubeVideos);
  }

  // PRODUCTION BLOCK
  // Mapear global assets para obtener sus URL de Google
  const mappedGlobalAssets = {};
  Object.keys(globalAssets).forEach((gak) => {
    mappedGlobalAssets[gak] = GrowithSDK.URLUtils(
      globalAssets[gak],
    ).getCDNURL();
  });
  // Mapear carpetas Implementaciones para obtener sus URL de Google
  const implementaciones = implementacionesFolders.reduce((acc, impF) => {
    const camelCaseKey = GrowithSDK.toCamelCase(impF.name);
    acc[camelCaseKey] = {
      embed: GrowithSDK.URLUtils(impF.id).getEmbedURL("grid"),
      webLink: impF.webViewLink,
    };
    return acc;
  }, {});

  // Construimos objeto JSON a enviar
  const data = {
    period: periodStr.toUpperCase(),
    modality: clientConfig.modality,
    assets: {
      ...mappedGlobalAssets,
      clientLogo: GrowithSDK.URLUtils(logo.id).getCDNURL(),
      calendario: GrowithSDK.URLUtils(calendar.id).getCDNURL(),
    },
    evento,
    drive: {
      ...implementaciones,
      materialDidactico: materialDidacticoURLs,
    },
    meet: {
      meetURL: clientConfig.meetURL,
      dayOfCall: clientConfig.dayOfCall,
      timeOfCall: clientConfig.timeOfCall,
    },
    youtube: youtubeVideos,
  };

  return data;
}
