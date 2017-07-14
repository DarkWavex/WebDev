// ==UserScript==
// @name         Imgurex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Slightly better experience.
// @author       TheCharmingCthulhu
// @match        *://imgur.com/gallery/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('span.linkified').each(function(i){
        var url = $(this).find('a');
        $(this).append('<img src="'+url.attr('href').replace('.gifv', '.gif')+'"></img>');
        url.remove();
    });
})();
