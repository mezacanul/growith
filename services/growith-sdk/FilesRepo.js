function readerOrWriter(role) {
  return role === "reader" || role === "writer"
}

function getAllFilesFromFolder(folderID, includePermissions = false) {
  const files = Drive.Files.list({
    q: `'${folderID}' in parents and trashed = false`,
    fields: 'files(id,name,mimeType,webContentLink,webViewLink)',
    supportsAllDrives: true,
    includeItemsFromAllDrives: true
  }).files;
  
  if(includePermissions){
    return files.map(file => {
      const { permissions } = Drive.Permissions.list(file.id, {supportsAllDrives: true})
      const isPublic = permissions.filter(
        ({ type, role }) => type === 'anyone' && readerOrWriter(role) 
      );
      
      return {
        ...file,
        permissions: {
          isPublic: isPublic.length > 0 ? isPublic : false,
          // all: permissions
        }
      }
    })
  } 

  return files
}

/**
 * Gets the first file with a given name inside a parent folder.
 *
 * @param {string} parentId
 * @param {string} name
 * @param {boolean} includePermissions
 * @returns {GoogleAppsScript.Drive.Schema.File|null}
 */
function getFileByName(parentId, name, includePermissions = false) {
  const query = [
    `'${parentId}' in parents`,
    `name contains '${name.replace(/'/g, "\\'")}'`,
    'trashed = false',
  ].join(' and ');

  const res = Drive.Files.list({
    q: query,
    pageSize: 1,
    fields: 'files(id,name,mimeType,webContentLink,webViewLink)',
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });

  const foundFile = res.files?.[0] ?? false
  if(!foundFile){
    Logger.log(`File '${name}' not found`)
    return null
    // throw new Error(`Archivo ${name} no encontrado`)
  }

  if(includePermissions){
    const { permissions } = Drive.Permissions.list(foundFile.id, {supportsAllDrives: true})
    const isPublic = permissions.some(
      ({ type, role }) => type === 'anyone' && readerOrWriter(role)
    ) ?? false;

    return { ...foundFile, permissions: { isPublic }}
  } else {
    return foundFile
  }
}

/**
 * Makes a file public if needed.
 *
 * @param {GoogleAppsScript.Drive.Schema.File} file
 * @returns {{isPublic: boolean, updated: boolean}}
 */
function makeFilePublic(file) {
  if (!file) {
    throw new Error('No file provided.');
  }

  if (!file.permissions) {
    throw new Error(
      `File object must include permissions. Call getFileByName(..., true). ${JSON.stringify(file)}`
    );
  }

  if (file.permissions.isPublic) {
    return {
      isPublic: true,
      updated: false,
      fileName: file.name
    };
  }

  Drive.Permissions.create(
    {
      type: 'anyone',
      role: 'reader',
    },
    file.id,
    {
      supportsAllDrives: true,
    }
  );

  return {
    isPublic: true,
    updated: true,
    fileName: file.name
  };
}

/**
 * Creates a folder inside a parent folder.
 *
 * @param {string} folderName
 * @param {string} parentId
 * @param {boolean} makePublic
 * @returns {GoogleAppsScript.Drive.Schema.File}
 */
function createFolder(folderName, parentId, makePublic = false, role = "reader") {
  const folder = Drive.Files.create(
    {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
      parents: [parentId],
    },
    null,
    {
      supportsAllDrives: true,
      fields: 'id,name,mimeType,webViewLink',
    }
  );

  if (!makePublic) {
    return {
      ...folder,
      permissions: {
        isPublic: false
      }
    };
  }

  const newPermission = Drive.Permissions.create(
    {
      type: 'anyone',
      role: role,
    },
    folder.id,
    {
      supportsAllDrives: true,
    }
  );

  return {
    ...folder,
    permissions: {
      isPublic: newPermission,
    },
  };
}