function getPageConfig(e, test = null) {
  let id

  if(!e){
    id = test
  } else 
  
  if(e){
    try {
      id = e.parameter.id
    } catch(err){
      Logger.log("Parametro ID es requerido")
      Logger.log(err)
      id = null
    }
  }

  const client = {
    clientID: id,
    clientSTR: id ? id.replaceAll("-", " ") : id,
  }

  return client
}
