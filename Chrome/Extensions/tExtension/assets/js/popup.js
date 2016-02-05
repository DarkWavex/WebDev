// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

/**
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */
function getImageUrl(searchTerm, callback, errorCallback) {

    var authToken = "AIzaSyATk9g0sUSM7xiYsudAhRFI7jtGMPJ0ATw";
    // https://www.googleapis.com/customsearch/v1?q=youtube&c2coff=1&cx=015864249818619952172%3Ajgiyd_rao0c&searchType=image&imgSize=medium&key=AIzaSyATk9g0sUSM7xiYsudAhRFI7jtGMPJ0ATw
    var searchUrl = "https://www.googleapis.com/customsearch/v1?" +
        "q=" + encodeURIComponent(searchTerm) + "&" +
        "c2coff=" + "1" + "&" +
        "cx=" + encodeURIComponent("015864249818619952172:jgiyd_rao0c") + "&" +
        "searchType=" + "image" + "&" +
        "imgSize=" + "medium" + "&" +
        "key=" + authToken;

    var x = new XMLHttpRequest();
    x.open("GET", searchUrl);
    x.responseType = "json"; // Chrome parses JSON
    x.onload = function() {
        var response = x.response;

        if (!response || !response.searchInformation) {
          errorCallback("Google Image Search Failed!");
          return;
        }
        else if(response.searchInformation.totalResults == 0){
            errorCallback("No Images Have Been Found!");
        }

        var imageData = response.items[0];
        var imageUrl = imageData.link;
        var width = parseInt(imageData.image.width);
        var height = parseInt(imageData.image.height);

        console.assert(
            typeof imageUrl == 'string' && !isNaN(width) && !isNaN(height),
            'Unexpected respose from the Google Image Search API!');
        callback(imageUrl, width, height);
    };

    x.onerror = function() {
        errorCallback('Network error.');
    };

    x.send();
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
    getCurrentTabUrl(function(url) {
        // Put the image URL in Google search.
        renderStatus('Performing Google Image search for ' + url);

        getImageUrl(url, function(imageUrl, width, height) {

          renderStatus('Search term: ' + url + '\n' +
              'Google image search result: ' + imageUrl);
          var imageResult = document.getElementById('image-result');
          imageResult.width = width;
          imageResult.height = height;
          imageResult.src = imageUrl;
          imageResult.hidden = false;

        }, function(errorMessage) {
                renderStatus(errorMessage);
            });
    });
});
