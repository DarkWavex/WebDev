// ==UserScript==
// @name         Sampleswap
// @namespace    http://raw-onslaught.ddns.net/
// @version      0.2
// @description  Automatization features
// @author       TheCharmingCthulhu
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @match        http://sampleswap.org/*
// @downloadURL  https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/Sampleswap.user.js
// @updateURL 	 https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/Sampleswap.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    waitForKeyElements(".col-md-9", expContainerWidth);
    waitForKeyElements("#soundScroller", expContainerHeight);
    waitForKeyElements(".playlist.samples", expContainerAdvance);
})();

function expContainerWidth(jNode){
    jNode.css("width", "100%");
}

function expContainerHeight(jNode){
    jNode.css("height", "100%");
}

function expContainerAdvance(jNode){
    jNode.css("margin", "10px");
}