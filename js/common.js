"use strict";

$(document).ready(function(){

//accordion

var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
  
//left-bar collapse menu and hover events

 	$('#toggleSide').on('click', function(){
		$('.logo').toggleClass('logo' + '--collapsed').addClass('event');
		$('.wrap-rightbar').toggleClass('wrap-rightbar' + '--collapsed');
		$('.leftbar').toggleClass('leftbar' + '--collapsed');
		$('.leftbar__user').toggleClass('leftbar__user' + '--collapsed');
		$('.leftbar__info').toggleClass('leftbar__info' + '--collapsed');
		$('.leftbar__header').toggleClass('leftbar__header' + '--collapsed');
		$('.leftbar__menu').toggleClass('leftbar__menu' + '--collapsed');
		$('.accordion').toggleClass('accordion' + '--collapsed');
		$('.msgcount').toggleClass('msgcount' + '--collapsed');
		$('.tablecontainer').toggleClass('tablecontainer' + '--collapsed');
		$('.menu').toggleClass('menu' + '--active');
		if ($('.logo').is('.logo--collapsed, .event')){
			$('.leftbar').on('mouseenter mouseleave', function(){
				$('.logo').toggleClass('logo' + '--collapsed').removeClass('event');
				$('.wrap-rightbar').toggleClass('wrap-rightbar' + '--collapsed');
				$('.leftbar').toggleClass('leftbar' + '--collapsed');
				$('.leftbar__user').toggleClass('leftbar__user' + '--collapsed');
				$('.leftbar__info').toggleClass('leftbar__info' + '--collapsed');
				$('.leftbar__header').toggleClass('leftbar__header' + '--collapsed');
				$('.leftbar__menu').toggleClass('leftbar__menu' + '--collapsed');
				$('.accordion').toggleClass('accordion' + '--collapsed');
				$('.msgcount').toggleClass('msgcount' + '--collapsed');
				$('.tablecontainer').toggleClass('tablecontainer' + '--collapsed');
			})
		}

	})
	 
//menu-responsive
	
	$('.menu-resp').on('click', function(){
		$('.leftbar').toggleClass('leftbar--active');
	})


})