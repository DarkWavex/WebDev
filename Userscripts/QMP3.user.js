// ==UserScript==
// @name         QMP3
// @namespace    http://raw-onslaught.ddns.net
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @version      0.5
// @description  Youtube2MP3 extension.
// @author       TheCharmingCthulhu
// @match        https://www.youtube.com/*
// @grant        none
// @downloadURL  http://raw-onslaught.ddns.net/js/userscripts/QMP3.user.js
// @updateURL 	 http://raw-onslaught.ddns.net/js/userscripts/QMP3.user.js
// ==/UserScript==

waitForKeyElements("#watch-header", onPageLoad);

function onPageLoad(jNode){
    var video_id = window.location.search.substring(1).split('=')[1];
    var frame_code = '<iframe id="download" style="width:100%;height:40px;border:0;overflow:hidden;margin-top:8px;" scrolling="no" src="//www.youtubeinmp3.com/widget/button/?video=https://www.youtube.com/watch?v=' + video_id + '"&color=e62117>';
    if ($('#download').length === 0)
        jNode.append(frame_code);
}