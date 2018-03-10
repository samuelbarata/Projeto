// JavaScript Document
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show

/*var cultura = document.getElementById("cultura");
var desporto = document.getElementById("desporto");
var lazer = document.getElementById("lazer");
var outros = document.getElementById("outras_dinamicas");*/
var menu = -70;
var id;
var element;

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
	element = document.getElementById("cultura");
	hide_all();
	$("#cultura").css("display", "block");
	scrollToBottom();
}
function deps() {
	"use strict";
	id = "#desporto";
	element = document.getElementById("desporto");
	hide_all();
	$("#desporto").css("display", "block");
	scrollToBottom();
}
function laz() {
	"use strict";
	id = "#lazer";
	element = document.getElementById("lazer");
	hide_all();
	$("#lazer").css("display", "block");
	scrollToBottom();
}
function outdin() {
	"use strict";
	id = "#outras_dinamicas";
	element = document.getElementById("outras_dinamicas");
	hide_all();
	$("#outras_dinamicas").css("display", "block");
	scrollToBottom();
}

$(document).ready(function(){"use strict"; hide_all();});


/*function scrollll(id){
	"use strict";
	$('html, body').animate({
		scrollTop: $(id).offset().top+menu
	}, 1000);
}*/



function scrollToBottom() {
	"use strict";
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}); // ! NÃO FUNCIONA PRA WEBKIT ! //
}