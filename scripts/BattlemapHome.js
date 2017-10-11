// ==UserScript==
// @name         Battlemap-Home
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Somewhat improved battlemap
// @author       qubi
// @match        https://battlemap.deltatgame.com/home*
// @grant        none
// ==/UserScript==

//original author @MjollnirZA (?)

function addGlobalStyle(css) {
    var head = document.getElementsByTagName('head')[0];
    if (!head) 
		return;
    var st = document.createElement('style');
    st.type = 'text/css';
    st.innerHTML = css;
    head.appendChild(st);
}
function showUI(state) {
    $("#warframe-container").css('display', state ? 'block' : 'none');
    $("#warframe").css('display', state ? 'block' : 'none');
    $("#footer_chat").css('display', state ? 'block' : 'none');
    $("#footer_vcb").css('display', state ? 'block' : 'none');
    $("#footer").css('display', state ? 'block' : 'none');
    $("#zoom-tooltip").css('display', state ? 'block' : 'none');
    $("#slidehelp").css('display', state ? 'table' : 'none');
    $("#home-logo-section").css('display', state ? 'block' : 'none');
    $("#player-details").css('display', state ? 'block' : 'none');
    $("#home-logo-section").css('display', state ? 'block' : 'none');
    $(".col-md-5.col-sm-5.padd-45").css('display', state ? 'block' : 'none');
}

$(function(){
    //remove useless html tags
    showUI(false);

    //add show core checkbox
    $("body").append("<div class='buttomLeft'><div class='controlItem'><input id='AllCoresShow' type='checkbox' value=''><label>Show all Cores</label></div> <div class='controlItem'><input id='ShowUI' type='checkbox' value=''><label>Show UI</label></div></div>");
    
    //modify css
	addGlobalStyle('.outerla{display: none !important;} #zoom-tooltip{padding:0 !important; font-size: 10px;} #page_loader{display: none !important;} .navbar {padding: 0 !important; transform: scale(0.8,0.8); min-height: initial; margin: 0;} .buttomLeft{position: fixed; bottom: 0; padding:3px; z-index: 1030; } .controlItem {display: flex; padding: 5px 10px; color:#fff; font-size:10px; background: #000; border:1px solid #0ff; border-radius:50px} div.controlItem>* {margin:0;}');
});


map.on('zoomend',function() {
    LoadCores();
});

map.on('dragend',function() {
    LoadCores();
});

$(document).ready(function() {
    $("#AllCoresShow").change(function(){
