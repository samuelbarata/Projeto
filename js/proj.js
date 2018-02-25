// JavaScript Document
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show

/*var cultura = document.getElementById("cultura");
var desporto = document.getElementById("desporto");
var lazer = document.getElementById("lazer");
var outros = document.getElementById("outras_dinamicas");*/

function hide_all() {
	"use strict";
	$("#cultura").css("display", "none");
	$("#desporto").css("display", "none");
	$("#lazer").css("display", "none");
	$("#outras_dinamicas").css("display", "none");
}
function cult() {
	"use strict";
	hide_all();
	$("#cultura").css("display", "block");
}
function deps() {
	"use strict";
	hide_all();

	$("#desporto").css("display", "block");

}
function laz() {
	"use strict";
	hide_all();

	$("#lazer").css("display", "block");

}
function outdin() {
	"use strict";
	hide_all();
	$("#outras_dinamicas").css("display", "block");
}

$(document).ready(function(){"use strict"; hide_all();});