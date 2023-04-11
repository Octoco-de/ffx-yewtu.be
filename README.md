## Description

This Firefox extension provides a simple and convenient way to automatically redirect YouTube video URLs to yewtu.be without the need for user interaction. 

To function properly, this extension requires the following permissions:

- `activeTab`: This permission allows the extension to access the currently active tab in the browser.
- `<all_urls>`: This permission allows the extension to access all URLs, which is necessary to intercept and redirect requests made to YouTube video URLs.
- `webRequest` and `webRequestBlocking`: These permissions allow the extension to use the webRequest API to intercept and block requests made by the browser. The `webRequestBlocking` permission is needed to block the original request and redirect it to yewtu.be.
