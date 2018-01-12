// ==UserScript==
// @name         RecordMP3
// @namespace    https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/
// @version      1.0
// @description  Try to take over youtube & get all of the music!
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// @downloadURL  https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/RecordMP3.user.js
// @updateURL    https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/RecordMP3.user.js
// ==/UserScript==

waitForKeyElements("#search", onPageLoad);

var root = "https://ytb.zone/mp3/";
var injected = false;

function onPageLoad(jNode){
    // Video ID
    var id = $("ytd-watch").attr('video-id');
    // Append form if searchbar exists...
    var searchNode = $('#search');
    if (searchNode) {
        searchNode.append('<form id="recordmp3" action="' + root + id + '" target="_blank"><input type="submit" id="downloadmp3" value="Injecting..." style="background-color:red;height:32px;border-radius:3px;color: white;text-align: center; cursor:pointer"/></form>');
    }
    if (id === undefined) {
        $("#downloadmp3").attr('value', 'Disabled');
        $("#downloadmp3").attr('type', 'button');
        $("#downloadmp3").css('background-color', 'gray');
    }
    // Listener
    injectXHRListener();
}

function updateForm(){
    var id = $("ytd-watch").attr('video-id');

    if (id !== undefined && window.location.href !== 'https://www.youtube.com/') {
        $("#recordmp3").attr('action', root + id);
        $("#downloadmp3").attr('type', 'submit');
        $("#downloadmp3").attr('value', 'Download Ready - "' + id + '"');
        $("#downloadmp3").css('background-color', 'red');
    } else {
        $("#downloadmp3").attr('value', 'Disabled');
        $("#downloadmp3").attr('type', 'button');
        $("#downloadmp3").css('background-color', 'gray');
    }
}

function injectXHRListener(){
    var open = window.XMLHttpRequest.prototype.open;

    function openReplacement(method, url, async, user, password) {
        updateForm();
        return open.apply(this, arguments);
    }

    window.XMLHttpRequest.prototype.open = openReplacement;
}