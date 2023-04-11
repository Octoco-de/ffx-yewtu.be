// Put all the javascript code here, that you want to execute in background.
// Listen for browser action clicks
// browser.browserAction.onClicked.addListener(function(tab) {
//     // Check if the tab is loading a YouTube video
//     if (tab.url.match(/youtube.com*/)) {
//       // Redirect the tab to yewtu.be
//       browser.tabs.update(tab.id, {
//         url: tab.url.replace('youtube.com', 'yewtu.be')
//       });
//     }
//   });

  browser.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.url.match(/youtube.com\/watch\?v=.+/)) {
        return {
          redirectUrl: details.url.replace('youtube.com', 'yewtu.be')
        };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  