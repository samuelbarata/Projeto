// JavaScript Document
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show

/*var cultura = document.getElementById("cultura");
var desporto = document.getElementById("desporto");
var lazer = document.getElementById("lazer");
var outros = document.getElementById("outras_dinamicas");*/
var menu = -70;
var id

function hide_all() {
	"use strict";
	$("#cultura").css("display", "none");
	$("#desporto").css("display", "none");
	$("#lazer").css("display", "none");
	$("#outras_dinamicas").css("display", "none");
}
function cult() {
	"use strict";
	id = "#cultura";
	hide_all();
	$("#cultura").css("display", "block");
	if (screen.height < 750){scrollll(id);}
}
function deps() {
	"use strict";
	id = "#desporto";
	hide_all();
	$("#desporto").css("display", "block");
	if (screen.height < 750){scrollll(id);}
}
function laz() {
	"use strict";
	id = "#lazer";
	hide_all();
	$("#lazer").css("display", "block");
	if (screen.height < 750){scrollll(id);}
}
function outdin() {
	"use strict";
	id = "#outras_dinamicas";
	hide_all();
	$("#outras_dinamicas").css("display", "block");
	if (screen.height < 750){scrollll(id);}
}

$(document).ready(function(){"use strict"; hide_all();});

function scrollll(id){
	"use strict";
	$('html, body').animate({
		scrollTop: $(id).offset().top+menu
	}, 1000);
}