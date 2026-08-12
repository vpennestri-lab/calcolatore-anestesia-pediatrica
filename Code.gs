function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Calcolatore Anestesia Pediatrica')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
