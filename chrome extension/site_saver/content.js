const websiteName = document.title;
chrome.runtime.sendMessage({
  action: "storeWebsite",
  website: websiteName
});
