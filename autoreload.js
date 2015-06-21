// ==UserScript==
// @name        Auto Reload Protopage
// @namespace   anaaa
// @description Reload pages every 5 minutes
// @match        *://steamcommunity.com/minigame/towerattack/*
// @match        *://steamcommunity.com//minigame/towerattack*
// @match        *://steamcommunity.com//minigame/towerattack/*
// @match        *://steamcommunity.com/minigame/towerattack/*
// @include     http://ww.bbc.co.uk//
    // @grant               none
// ==/UserScript==

// based on code by Julien Couvreur
// and included here with his gracious permission

var numMinutes = 5;
window.setTimeout("document.location.reload();", numMinutes*60*1000);
