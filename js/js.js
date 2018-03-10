// JavaScript Document

/*
https://www.w3schools.com/jquery/css_offset.asp
https://stackoverflow.com/questions/19012495/smooth-scroll-to-div-id-jquery/26129950#26129950
*/

/*console.log(screen.height);*/
if (screen.height < 750){
	var menuuu = -70;
	var timeeer = 500;
}
else{
	var menuuu = -150;
	var timeeer = 1000;
}
/*
$(document).ready(function(){
	"use strict";
	$("#LinkProjeto").click(function() {
		$('html, body').animate({
			scrollTop: $("#proj").offset().top-150
		}, 1500);
	});
	$("#LinkCampanha").click(function() {
		$('html, body').animate({
			scrollTop: $("#campanha").offset().top-150
		}, 1500);
	});
	$("#LinkAdmin").click(function() {
		$('html, body').animate({
			scrollTop: $("#admin").offset().top-150
		}, 1500);
	});
});*/

function Slide(id){
	"use strict";
	$('html, body').animate({
		scrollTop: $(id).offset().top+menuuu
	}, timeeer);
}

/*
function Slide(id){
	"use strict";
	$(id).scrollIntoView();
}*/