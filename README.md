# [topcoder] Google Chrome Extension

A simple Chrome Extension for search [topcoder] challenges. Allows you to perform a keyword search across challenges and look up members by handle and email.

For challenges you can pick the scope of the search (defaults to the name of the challenge) and whether to exclude completed challenges. When the results return you can choose either a simple or expanded view of the challenges.

For members you can search either by handle or email address and it will bring back all sorts of private info.

**Disclaimer**: This is bleeding-edge.... like "walking dead" bleeding edge and therefore may change or die with a bullet to the head.

## Simple Result View

![simple view](https://raw.githubusercontent.com/cloudspokes/tc-chrome-extension/master/images/screenshot-simple.png)

## Detailed Result View

Displays technologies, platforms, number of registrants, number of submissions, type of challenge and current phase of challenge. Also provides a link to the challenge in Direct, a link to the forums for the challenge and a link to the challenge project in Direct.

![simple view](https://raw.githubusercontent.com/cloudspokes/tc-chrome-extension/master/images/screenshot-detailed.png)

## Installation

The extension is not registered on the Chrome Web Store as of now so you will need to download it and manually add it. It's pretty simple.

Either click the "Download ZIP" button on this page to download the code (hint.. it's on the right towards the bottom) or even easier run this from terminal:

    git clone git@github.com:cloudspokes/tc-chrome-extension.git YOUR-TARGET-DIRECTORY

1. In Chrome, open Settings -> Extensions  
2. Make sure "Developer Mode" is checked in the upper right.  
3. Click the "Load unpacked extension..." button and select YOUR-TARGET-DIRECTORY that you cloned the extension into.

This should successfully install the extension and you should see it on your browser.
