function URLUtils(id) {
  return {
    getCDNURL: () => (`https://lh3.googleusercontent.com/d/${id}`),
    // type: 'list' | 'grid'
    getEmbedURL: (type) => (`https://drive.google.com/embeddedfolderview?id=${id}#${type}`),
    getLinkURL: () => `http://drive.google.com/open?id=${id}`
  }
}