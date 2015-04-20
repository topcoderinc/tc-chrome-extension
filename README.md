# Topcoder Google Chrome Extension

A simple Chrome Extension that allows you to perform a keyword search across challenges and look up members by handle or email.

For challenges you can pick the scope of the search (defaults to the name of the challenge) and whether to exclude completed challenges. When the results return you can choose either a simple or expanded view of the challenges.

For members you can search either by handle or email address and it will bring back all sorts of private info (name, email, country, etc.).

## Disclaimer

This is bleeding-edge.... like "walking dead" bleeding edge and therefore may change or die with a bullet to the head.

## API Key

If you want to search for member data, you must have an API key (since we don't want this info public). Email jeff@appirio.com he'll send you a key that you can add to the `Options` for the extension.

![options view](https://github.com/topcoderinc/tc-chrome-extension/blob/master/images/screenshot-options.png?raw=true)

## Simple Challenge Result View

![simple view](https://github.com/topcoderinc/tc-chrome-extension/blob/master/images/screenshot-simple.png?raw=true)

## Detailed Challenge Result View

Displays technologies, platforms, number of registrants, number of submissions, type of challenge and current phase of challenge. Also provides a link to the challenge in Direct, a link to the forums for the challenge and a link to the challenge project in Direct.

![detailed view](https://raw.githubusercontent.com/topcoderinc/tc-chrome-extension/master/images/screenshot-detailed.png)

## Member Result View

Display member info from Saleforce for a member by handle or email. If the member is new and hasn't been sync'd to Salesforce yet, it will only return the email address from topcoder.

![member  view](https://github.com/topcoderinc/tc-chrome-extension/blob/master/images/screenshot-member.png?raw=true)

## Installation

The extension is not registered on the Chrome Web Store as of now so you will need to download it and manually add it. It's pretty simple.

Either click the "Download ZIP" button on this page to download the code (hint.. it's on the right towards the bottom) or even easier run this from terminal:

    git clone git@github.com:topcoderinc/tc-chrome-extension.git YOUR-TARGET-DIRECTORY

1. In Chrome, open Settings -> Extensions  
2. Make sure "Developer Mode" is checked in the upper right.  
3. Click the "Load unpacked extension..." button and select YOUR-TARGET-DIRECTORY that you cloned the extension into.

This should successfully install the extension and you should see it on your browser.
