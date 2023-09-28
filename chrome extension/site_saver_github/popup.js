chrome.webNavigation.onCompleted.addListener(function (details) {
    if (details.frameId === 0) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            if (activeTab && activeTab.url) {
                const token = "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"; // Replace with your GitHub access token
                const repoOwner = "danisherror"; // Replace with the repository owner's username
                const repoName = "site_visited"; // Replace with the repository name

                const data = {
                    websiteUrl: activeTab.url,
                    timestamp: new Date().toISOString()
                };

                fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/data.json`, {
                    method: "PUT",
                    headers: {
                        "Authorization": `token ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message: "Add website data",
                        content: btoa(JSON.stringify(data))
                    })
                })
                .then(response => response.json())
                .then(result => {
                    console.log("Data stored:", result);
                })
                .catch(error => console.error("Error storing data:", error));
            }
        });
    }
});

