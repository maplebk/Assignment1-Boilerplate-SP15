'use strict';

function add_ingredient() {
	var ingredient = $("#ingredient").val();
	$("#ingredientlist").append("<li> ingredient <li>" );

	}

$("#readytoadd").click(add_ingredient);

