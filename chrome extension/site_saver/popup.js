chrome.storage.sync.get("websites", (data) => {
    const websiteList = document.getElementById("websiteList");
    if (data.websites) {
      data.websites.forEach((website) => {
        const listItem = document.createElement("li");
        listItem.textContent = website;
        websiteList.appendChild(listItem);
      });
    }
  });
  