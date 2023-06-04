
function limpiarUrl(url) {
  let urlObj = new URL(url);
  return urlObj.origin + urlObj.pathname;
}

document.addEventListener('DOMContentLoaded', function() {
  // Botón 12ft
  document.getElementById('boton-12ft').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          let urlActual = tabs[0].url;
          let urlLimpia = limpiarUrl(urlActual);
          let urlDestino = 'https://12ft.io/' + urlLimpia;
          chrome.tabs.create({ url: urlDestino });
      });
  });

  document.getElementById('boton-internetarchive').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          let urlActual = tabs[0].url;
          let urlLimpia = limpiarUrl(urlActual);
          let urlDestino = 'https://web.archive.org/' + urlLimpia;
          chrome.tabs.create({ url: urlDestino });
      });
  });

  document.getElementById('boton-archiveis').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          let urlActual = tabs[0].url;
          let urlLimpia = limpiarUrl(urlActual);
          let urlDestino = 'https://archive.is/newest/' + urlLimpia;
          chrome.tabs.create({ url: urlDestino });
      });
  });

//   document.getElementById('boton-removepaywall').addEventListener('click', function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         let urlActual = tabs[0].url;
//         let urlLimpia = limpiarUrl(urlActual);
//         let urlDestino = 'https://removepaywall.com/' + urlLimpia;
//         chrome.tabs.create({ url: urlDestino });
//     });
// });
});
