chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ websites: [] });
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "storeWebsite") {
      chrome.storage.sync.get("websites", (data) => {
        const websites = data.websites || [];
        websites.push(request.website);
        chrome.storage.sync.set({ websites });
      });
    }
  });
  