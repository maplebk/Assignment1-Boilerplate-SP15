'use strict';


function add_direction() {
	var direc = $("#direction").val();
	$("#directionslist").append("<li> direc </li>");

}


function add_ingredient() {
	var ing = $("#ingredient").val();
	$("#ingredientlist").append("<li> ing </li>" );

	}

$("#readytoadd").click(add_ingredient);
$("#add_step").click(add_direction)

