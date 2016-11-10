'use strict';


function add_direction() {
	var direc = $("#direction1").val();
	$("#directionslist").append("<li> "+direc+" </li>");
	$("#direction1").val() = "";
	$(this).html("Add another");


}


function add_ingredient() {
	var ing = $("#ingredient").val();
	$("#ingredientlist").append("<li> "+ing+" </li>" );
	$("#ingredient").val() = "";
	$(this).html("Add next step");

	}

$("#readytoadd").click(add_ingredient);
$("#add_step").click(add_direction)

