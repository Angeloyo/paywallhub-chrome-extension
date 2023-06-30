
let msg = document.getElementById("id-msg");
let msgforbid = document.getElementById("id-msg-forbid");

// load remote message
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

function cleanURL(url) {
  let urlObj = new URL(url);
  return urlObj.origin + urlObj.pathname;
}

function checkDomain(url, bannedDomain) {
  let urlObj = new URL(url);
  return urlObj.hostname !== bannedDomain;
}

function showForbiddenMsg() {
  let mensaje = document.getElementById('id-msg-forbid');
  mensaje.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {

  const bannedDomain = 'www.washingtonpost.com';

  document.getElementById('boton-12ft').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          let thisUrl = tabs[0].url;
          if (checkDomain(thisUrl, bannedDomain)) {
              let cleanedUrl = cleanURL(thisUrl);
              let targetUrl = 'https://12ft.io/' + cleanedUrl;
              chrome.tabs.create({ url: targetUrl });
          } else {
              showForbiddenMsg();
          }
      });
  });

  document.getElementById('boton-internetarchive').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let thisUrl = tabs[0].url;
        if (checkDomain(thisUrl, bannedDomain)) {
            let cleanedUrl = cleanURL(thisUrl);
            let targetUrl = 'https://web.archive.org/' + cleanedUrl;
            chrome.tabs.create({ url: targetUrl });
        } else {
          showForbiddenMsg();
        }
    });
  });

  document.getElementById('boton-archiveis').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          let thisUrl = tabs[0].url;
          if (checkDomain(thisUrl, bannedDomain)) {
              let cleanedUrl = cleanURL(thisUrl);
              let targetUrl = 'https://archive.ph/newest/' + cleanedUrl;
              chrome.tabs.create({ url: targetUrl });
          } else {
            showForbiddenMsg();
          }
      });
  });

  document.getElementById('boton-gcache').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let thisUrl = tabs[0].url;
        if (checkDomain(thisUrl, bannedDomain)) {
            let cleanedUrl = cleanURL(thisUrl);
            let targetUrl = 'https://webcache.googleusercontent.com/search?q=cache:' + cleanedUrl;
            chrome.tabs.create({ url: targetUrl });
        } else {
          showForbiddenMsg();
        }
    });
  });
});
