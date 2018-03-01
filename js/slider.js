// JavaScript Document
//https://bootsnipp.com/snippets/featured/colourful-tabbed-slider-carousel

$(document).ready( function() {
	"use strict";
    $('#myCarousel').carousel({
    	interval:   4000
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function() {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count === id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});