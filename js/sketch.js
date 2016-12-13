// generate 16x16 div grid, scalable to any size
// 960px x 960px

function drawgrid(gridsize = 4) {
	screensize = 960; // max area for grid

	$("div").remove(); // clear old grid if it exists

	for (column = 0; column <= gridsize; column++) {
		for (i = 0; i <= gridsize; i++) {
			$("body").append("<div class='unfilled'></div>");
		}
	}

	$(".unfilled").height("10px");
	$(".unfilled").width("10px");
}

function deletegrid() {
	// remove entire grid
}

$(document).ready(function() {
	drawgrid();

	$(".unfilled").hover(function() {
		$(this).addClass("filled");
		$(this).removeClass("unfilled");
	});

	$("#clear").click(function() {
		var newgridsize = prompt("Enter size for new grid");
		drawgrid(newgridsize);
	});

});