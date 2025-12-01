// ==UserScript==
// @name         Version control test from github
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Version control test2 script
// @downloadURL  https://github.com/Garytang412/version-test/raw/refs/heads/main/version-test-github.user.js
// @updateURL    https://github.com/Garytang412/version-test/raw/refs/heads/main/version-test-github.meta.js
// @author       ptangary
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    const box = document.createElement('div');
    box.style.cssText = 'position:fixed;top:10px;right:10px;background:blue;color:red;padding:10px;border:1px solid black;z-index:9999;';
    box.textContent = 'Version2 Test v1.1';
    document.body.appendChild(box);
})();
