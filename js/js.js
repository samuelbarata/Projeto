// JavaScript Document

function scroll() {
	"use strict";
    window.scrollBy(0, -150);
	console.log("scroll");
}




$("#LinkProjeto").click(function() {
    $('html, body').animate({
        scrollTop: $("#proj").offset().top
    }, 2000);
});
$("#LinkCampanha").click(function() {
    $('html, body').animate({
        scrollTop: $("#campanha").offset().top
    }, 2000);
});
$("#LinkAdmin").click(function() {
    $('html, body').animate({
        scrollTop: $("#Carousel").offset().top
    }, 2000);
});
$("#LinkContactos").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactos").offset().top
    }, 2000);
});