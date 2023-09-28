chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "storeWebsite") {
      chrome.storage.local.get("visitedWebsites", function (data) {
          const visitedWebsites = data.visitedWebsites || [];
          visitedWebsites.push(message.url);

          chrome.storage.local.set({ visitedWebsites }, function () {
              console.log("Website stored locally:", message.url);
          });
      });
  }
});
