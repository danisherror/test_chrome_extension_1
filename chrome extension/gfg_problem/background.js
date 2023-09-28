chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ problems: [] });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "storeProblem") {
    const problemName = request.problem;
    if (problemName) {
      chrome.storage.sync.get("problems", (data) => {
        const problems = data.problems || [];
        const existingProblem = problems.find((problem) => problem.name === problemName);
        if (existingProblem) {
          existingProblem.visits++;
        } else {
          problems.push({ name: problemName, visits: 1 });
        }
        chrome.storage.sync.set({ problems });
      });
    }
  }
});
