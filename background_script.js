// Put all the javascript code here, that you want to execute in background.

  browser.webRequest.onBeforeRequest.addListener(
    function(details) {

      // Do not redirect to yewtu.be if we're already on yewtu.be.
      if (details.originUrl && details.originUrl.match(/yewtu.be\//)) {
        return { cancel: false };
      }

      // Matches any URL with ".youtube.com/", that contains
      // - "?v="
      // - or "&v="
      // This allows handling the case where "v=" is not the first argument.
      const matchResult = details.url.match(/\.youtube.com\/watch\?(?:.*&)?(v=[^&]+)/);
      console.log('match:', matchResult, details);
      if (matchResult) {
        return {
          redirectUrl: 'https://yewtu.be/watch?' + matchResult[1]
        };
      } else  {
        return { cancel: false };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
