'use strict';


function add_direction() {
	var direc = $("#direction1").val();
	$("#directionslist").append("<li> "+direc+" </li>");
	$(this).html("Add next step");
	$("#direction1").val("");
	


}


function add_ingredient() {
	var ing = $("#ingredient").val();
	$("#ingredientlist").append("<li> "+ing+" </li>" );
	$(this).html("Add another");
	$("#ingredient").val("");
	
	}

function add_recipe(res) {
	var ingredient_name = $("#nameoffood").val();
	
	var num_of_ingredients = $('input[name="my_ingredients"]:checked', '#yum').val();
	var diet_array = [];
	$("#checkboxlist input:checked").each(function(e) {
						diet_array.push($(e).val());
						});
	var prep_time = $("#preptime").val();
	var cook_time = $("#cooktime").val();
	var course_type = $('input[name="type_dish"]:checked', '#dishes').val();
	var ingredient_list = []
	var direction_list = []
	$("#ingredientlist li" ).each(function(i, elem) {
							ingredient_list.push($(elem).text());
							});
	$("#directionslist li").each(function(i, elem) {
							direction_list.push($(elem).text());
							});
	
	var new_recipe = {"name": ingredient_name, "ingredientnum": num_of_ingredients, "preptime": prep_time, "cooktime": cook_time, "diet": diet_array, "course": course_type, "ingredients": ingredient_list, "directions":  direction_list, "pic": "https://upload.wikimedia.org/wikipedia/commons/4/49/Gulasch.jpg" };
	res.recipes.append(new_recipe);



}

$("#submit_button").click(function(e)	{
		$.get("../data.json", add_recipe);
	    }

$("#readytoadd").click(add_ingredient);
$("#add_step").click(add_direction);


