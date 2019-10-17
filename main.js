// ==UserScript==
// @name         洛谷评测记录跳转
// @version      1.0
// @author       colazcy
// @match        https://www.luogu.org/record/*
// ==/UserScript==

(function() {
	var url = window.location.href
	var tmp = url.split('/')
	var id = tmp[tmp.length-1]
    if(isNaN(id))return
	var newurl = 'http://www.luogu.org/recordnew/show/' + id
	window.location.href = newurl
})();
