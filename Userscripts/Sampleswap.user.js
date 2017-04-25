// ==UserScript==
// @name         Sampleswap
// @namespace    http://raw-onslaught.ddns.net/
// @version      0.1
// @description  Automatization features
// @author       TheCharmingCthulhu
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @match        http://sampleswap.org/*
// @downloadURL  http://raw-onslaught.ddns.net/js/userscripts/Sampleswap.user.js
// @updateURL 	 http://raw-onslaught.ddns.net/js/userscripts/Sampleswap.user.js
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