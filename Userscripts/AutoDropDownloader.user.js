// ==UserScript==
// @name         AutoDropDownloader
// @namespace    https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/
// @version      0.3
// @description  Direct dropbox downloader.
// @author       TheCharmingCthulhu
// @match        https://www.dropbox.com/s/*
// @grant        none
// @downloadURL  https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/AutoDropDownloader.user.js
// @updateURL 	 https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/AutoDropDownloader.user.js
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("load", function(){
        window.location = window.location.href.replace("dl=0", "dl=1");
        document.getElementsByClassName("c-split-btn-container")[1].childNodes[0].innerText = "Downloading... :)";
    });
})();