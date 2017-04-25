// ==UserScript==
// @name         MMBBSUtils
// @namespace    http://raw-onslaught.ddns.net/
// @version      1.0
// @description  Multimedia BBS Berufsschule - Utilities & Extensions.
// @author       TheCharmingCthulhu
// @match        http://www.mmbbs.de/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @downloadURL  http://raw-onslaught.ddns.net/js/userscripts/MMBBSUtils.user.js
// @updateURL 	 http://raw-onslaught.ddns.net/js/userscripts/MMBBSUtils.user.js
// ==/UserScript==

(function() {
    'use strict';

    var classID  = 'c00026';
    var proxyID = 'c00030';
    var blockPlan = 'http://www.mmbbs.de/uploads/media/IT-Blockkalender_2016_2017.pdf';

    Date.prototype.getWeek = function() {
        var target  = new Date(this.valueOf());
        var dayNr   = (this.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        var jan4    = new Date(target.getFullYear(), 0, 4);
        var dayDiff = (target - jan4) / 86400000;
        var weekNr = 1 + Math.ceil(dayDiff / 7);
        return weekNr - 1;
    };

    var today = new Date();

    var menu = '<li onmouseover="show(this)" onmouseout="hide(this)">';
    menu += '<a href="">Werkzeuge</a>';
    menu += '<ul>';
    menu += '<li>';
    menu += '<a href="http://stundenplan.mmbbs.de/plan1011/klassen/' + (today.getWeek() < 10 ? "0" : "") + today.getWeek() + '/c/' + classID +'.htm">Stundenplan</a>';
    menu += '</li>';
    menu += '<li>';
    menu += '<a href="http://stundenplan.mmbbs.de/plan1011/ver_kla/' + (today.getWeek() < 10 ? "0" : "") + today.getWeek() + '/c/' + proxyID +'.htm">Vertretungsplan</a>';
    menu += '</li>';
    menu += '<li>';
    menu += '<a href="' + blockPlan + '">Blockplan: 2016 - 2017</a>';
    menu += '</li>';
    menu += '</ul>';
    menu += '</li>';

    $(".menu").append(menu);
})();