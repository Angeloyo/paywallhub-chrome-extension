let msg = document.getElementById("id-msg");

window.addEventListener('load', loadmsg);
function loadmsg() {
    const now = Date.now();
    fetch(`https://paywallhub.com/msg/msg1.txt?${now}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to obtain message");
        }
      })
      .then((data) => {
        msg.textContent = data.message;
        const style = data.style;
        Object.keys(style).forEach((property) => {
          msg.style[property] = style[property];
        });
      })
      .catch((error) => {
        console.error("Failed to obtain message:", error);
      }
    );
}


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

  document.getElementById('boton-gcache').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let urlActual = tabs[0].url;
        let urlLimpia = limpiarUrl(urlActual);
        let urlDestino = 'https://webcache.googleusercontent.com/search?q=cache:' + urlLimpia;
        chrome.tabs.create({ url: urlDestino });
    });
  });
  
});
