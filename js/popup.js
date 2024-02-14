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

function cleanUrl(url) {
  let urlObj = new URL(url);
  return urlObj.origin + urlObj.pathname;
}

document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('button-12ft').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          let currentUrl = tabs[0].url;
          let cleanedUrl = cleanUrl(currentUrl);
          let finalUrl = 'https://12ft.io/' + cleanedUrl;
          chrome.tabs.create({ url: finalUrl });
      });
  });

  document.getElementById('button-internetarchive').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          let currentUrl = tabs[0].url;
          let cleanedUrl = cleanUrl(currentUrl);
          let finalUrl = 'https://web.archive.org/' + cleanedUrl;
          chrome.tabs.create({ url: finalUrl });
      });
  });

  document.getElementById('button-archiveis').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          let currentUrl = tabs[0].url;
          let cleanedUrl = cleanUrl(currentUrl);
          let finalUrl = 'https://archive.is/newest/' + cleanedUrl;
          chrome.tabs.create({ url: finalUrl });
      });
  });

  document.getElementById('button-gcache').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currentUrl = tabs[0].url;
        let cleanedUrl = cleanUrl(currentUrl);
        let finalUrl = 'https://webcache.googleusercontent.com/search?q=cache:' + cleanedUrl;
        chrome.tabs.create({ url: finalUrl });
    });
  });

  document.getElementById('button-removepaywall').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currentUrl = tabs[0].url;
        let cleanedUrl = cleanUrl(currentUrl);
        let finalUrl = 'https://removepaywall.com/' + cleanedUrl;
        chrome.tabs.create({ url: finalUrl });
    });
  });
  
});
