'use strict';


function add_direction() {
	var direc = $("#direction1").val();
	$("#directionslist").append("<li> "+direc+" </li>");
	direc = " ";

}


function add_ingredient() {
	var ing = $("#ingredient").val();
	$("#ingredientlist").append("<li> "+ing+" </li>" );
	ing = " ";

	}

$("#readytoadd").click(add_ingredient);
$("#add_step").click(add_direction)

