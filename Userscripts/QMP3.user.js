// ==UserScript==
// @name         QMP3
// @namespace    https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @version      0.7.4
// @description  Youtube2MP3 extension.
// @author       TheCharmingCthulhu
// @match        https://www.youtube.com/*
// @exclude      http://www.mmbbs.de/*
// @grant        none
// @downloadURL  https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/QMP3.user.js
// @updateURL 	 https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/QMP3.user.js
// ==/UserScript==

waitForKeyElements("#search-form", onPageLoad);
waitForKeyElements("#watch-header", onPageLoad);

function onPageLoad(jNode) {
    var source = "";
    var style = (jNode[0].id === 'watch-header') ? "width:100%;height:40px;margin-top:8px;" : "width:25%;height:40px;margin-left:10px;";
    var frame_code = '<iframe id="download" style="' + style + '" scrolling="no" color=e62117>';
    if ($('#download').length === 0)
        jNode.append(frame_code);
    document.body.addEventListener('load', function(e) {
        if (source !== window.location.href && isValidURL(window.location.href)) {
            source = window.location.href;
            updateSource(window.location.href);
        }
    }, true);
}

function isValidURL(url) {
    return new RegExp(/http(?:s?):\/\/(?:www|youtu?).*\/(?:watch\?v=([A-z0-9-]{11})|([A-z0-9-]{11}) ?)/).test(url);
}

function updateSource(source) {
    if ($('#download').length > 0)
        $('#download').attr('src', "//www.youtubeinmp3.com/widget/button/?video=" + source); //https://www.youtube.com/watch?v=" + source);
}