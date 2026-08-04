function getYoutubeVideos() {
  const youtubeSheetID = "1hIr_jN9ABi6seWPuECMMe8lmqJE6q0jimFNQvt3Hsno";
  const youtubeSheet = SpreadsheetApp.openById(youtubeSheetID).getSheets()[0];
  const videos = youtubeSheet
    .getRange(2, 1, youtubeSheet.getLastRow() - 1, youtubeSheet.getLastColumn())
    .getValues();

  const videosMapped = videos.map((video) => {
    return {
      title: video[0],
      videoURL: video[1],
      // TODO: Transformar el videoURL a formato embed de
      // Youtube para utilizar en un 'iframe' ???
    };
  });

  // Logger.log(JSON.stringify(videosMapped));
  return videosMapped;
}