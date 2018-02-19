// JavaScript Document
/*
https://www.w3schools.com/jquery/css_offset.asp
https://stackoverflow.com/questions/19012495/smooth-scroll-to-div-id-jquery/26129950#26129950
*/

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
	$("#LinkContactos").click(function() {
		$('html, body').animate({
			scrollTop: $("#contactos").offset().top-150
		}, 1500);
	});
	$("#Linkre").click(function() {
		$('html, body').animate({
			scrollTop: $("#re").offset().top-150
		}, 1500);
	});
});