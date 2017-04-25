// ==UserScript==
// @name         AutoDropDownloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Direct dropbox downloader.
// @author       TheCharmingCthulhu
// @match        https://www.dropbox.com/s/*
// @grant        none
// @downloadURL  http://raw-onslaught.ddns.net/js/userscripts/AutoDropDownloader.user.js
// @updateURL 	 http://raw-onslaught.ddns.net/js/userscripts/AutoDropDownloader.user.js
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("load", function(){
        window.location = window.location.href.replace("dl=0", "dl=1");
        document.getElementsByClassName("c-split-btn-container")[1].childNodes[0].innerText = "Downloading... :)";
    });
})();