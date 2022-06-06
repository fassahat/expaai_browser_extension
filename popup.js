analyze.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: copyAndSend,
  });
});
  
function copyAndSend() {
  console.log("copy and send called!");
  //const text = chrome.extension.sendMessage({ text: document.documentElement.innerHTML });
  console.log(document.documentElement);
}