// ==UserScript==
// @name         RAW-Onslaught
// @namespace    http://raw-onslaught.ddns.net/
// @version      0.1
// @description  Optimizations!
// @author       TheCharmingCthulhu
// @match        http://raw-onslaught.ddns.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location = window.location.origin.replace("raw-onslaught.ddns.net", "192.168.2.103");
})();