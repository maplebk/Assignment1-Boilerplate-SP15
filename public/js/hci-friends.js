'use strict';


function add_direction() {
	var direc = $("#direction1").val();
	$("#directionslist").append("<li> "+direc+" </li>");
	$(this).html("Add another");
	$("#direction1").val("");
	


}


function add_ingredient() {
	var ing = $("#ingredient").val();
	$("#ingredientlist").append("<li> "+ing+" </li>" );
	$(this).html("Add next step");
	$("#ingredient").val("");
	

	}

$("#readytoadd").click(add_ingredient);
$("#add_step").click(add_direction)

