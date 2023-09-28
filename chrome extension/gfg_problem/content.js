const urlPattern = /\/problems\/([a-zA-Z0-9\-]+)\/\d+/;
const match = window.location.href.match(urlPattern);
if (match && match[1]) {
  const problemName = match[1];
  chrome.runtime.sendMessage({
    action: "storeProblem",
    problem: problemName
  });
}
