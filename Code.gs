function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('BlueTiek Disco Party')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
