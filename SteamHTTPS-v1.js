// ==UserScript==
// @name         SteamHTTPS
// @namespace    https://xjoeyv.com
// @version      0.1
// @description  Replaces all Steam URL's for https.
// @author       Joey de Vries ( XJoeyV )
// @match        https://steamcommunity.com/*
// @grant        none
// ==/UserScript==

var elem = document.body.getElementsByTagName('a');

for (var i = 0; i < elem.length; i++) {
     elem[i].href = elem[i].href.replace("http://", "https://");
}
