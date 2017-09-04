// ==UserScript==
// @name         MMBBSUtils
// @namespace    https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/
// @version      1.5.3
// @description  Multimedia BBS Berufsschule - Utilities & Extensions.
// @author       TheCharmingCthulhu,littlejak20
// @match        http://www.mmbbs.de/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @downloadURL  https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/MMBBSUtils.user.js
// @updateURL    https://github.com/TheCharmingCthulhu/WebDev/raw/master/Userscripts/MMBBSUtils.user.js
// ==/UserScript==

(function() {
    'use strict';

    var classID = 'c00023';
    var proxyID = 'c00027';
    var proxyListID = 'w00027';
    var blockPlan = 'http://www.mmbbs.de/uploads/media/2017-2018_IT-Blockplan_2016-11-18.pdf';

    $('head').append("<style>.news-list-item:after{content: ''; display: table; clear: both;}</style>");

    Date.prototype.getWeek = function() {
        var target = new Date(this.valueOf());
        var dayNr = (this.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        var jan4 = new Date(target.getFullYear(), 0, 4);
        var dayDiff = (target - jan4) / 86400000;
        var weekNr = 1 + Math.ceil(dayDiff / 7);
        weekNr -= 1;

        var currentDate = new Date();
        if ((currentDate.getDay() == 5 && currentDate.getHours() >= 17) || currentDate.getDay() > 5) {
            weekNr += 1;
        }
        return weekNr;
    };

    var today = new Date();

    var menu = '<li onmouseover="show(this)" onmouseout="hide(this)">';
    menu += '<a href="">Werkzeuge</a>';
    menu += '<ul>';
    menu += '<li>';
    menu += '<a class="tools" href="http://stundenplan.mmbbs.de/plan1011/klassen/' + (today.getWeek() < 10 ? "0" : "") + today.getWeek() + '/c/' + classID + '.htm">Stundenplan Woche ' + (today.getWeek() < 10 ? "0" : "") + today.getWeek() + '</a>';
    menu += '</li>';
    menu += '<li>';
    menu += '<a class="tools" href="http://stundenplan.mmbbs.de/plan1011/ver_kla/' + (today.getWeek() < 10 ? "0" : "") + today.getWeek() + '/c/' + proxyID + '.htm">Vertretungsplan Woche ' + (today.getWeek() < 10 ? "0" : "") + today.getWeek() + '</a>';
    menu += '</li>';
    menu += '<li>';
    menu += '<a class="tools" href="http://stundenplan.mmbbs.de/plan1011/ver_kla/' + (today.getWeek() < 10 ? "0" : "") + today.getWeek() + '/w/' + proxyListID + '.htm">Vertretungsplan Liste Woche ' + (today.getWeek() < 10 ? "0" : "") + today.getWeek() + '</a>';
    menu += '</li>';
    menu += '<li>';
    menu += '<a class="tools" href="' + blockPlan + '">Blockplan: ' + today.getFullYear() + '-' + (today.getFullYear() + 1) + '</a>';
    menu += '</li>';
    menu += '</ul>';
    menu += '</li>';

    $(".menu").append(menu);
    //$("#mitte").html('<iframe style="width: 100%; height: 5000px; border: 0; overflow: hidden;" src="http://stundenplan.mmbbs.de/plan1011/ver_kla/' + (today.getWeek() < 10 ? "0" : "") + today.getWeek() + '/c/' + proxyID +'.htm""></iframe>');

    $(".tools").on("click", function(e) {
        e.preventDefault();
        $("#mitte").html('<iframe style="width: 100%; height: 5000px; border: 0; overflow: hidden;" src="' + $(this).attr('href') + '"></iframe>');
    });
})();
