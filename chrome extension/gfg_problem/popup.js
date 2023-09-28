chrome.storage.sync.get("problems", (data) => {
  const problemList = document.getElementById("problemList");
  if (data.problems) {
    data.problems.forEach((problem) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${problem.name} - Visits: ${problem.visits}`;
      problemList.appendChild(listItem);
    });
  }
});
