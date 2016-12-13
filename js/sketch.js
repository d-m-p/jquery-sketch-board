// generate 16x16 div grid, scalable to any size
// 960px x 960px

function drawgrid(gridsize = 4) {
	screensize = 960; // max area for grid

	for (column = 0; column <= gridsize; column++) {
		for (i = 0; i <= gridsize; i++) {
			$("#container").append("<div class='unfilled'></div>");
		}
	}

	$(".unfilled").height("10px");
	$(".unfilled").width("10px");
}

function deletegrid() {
	$(".unfilled").remove();
	$(".filled").remove();
}

function mainLoop() {
	var lp = setInterval(function() {
		$(".unfilled").hover(function() {
			$(this).addClass("filled");
			$(this).removeClass("unfilled");
		});

		// textbox mirror
		var ent = $("input.entered").val();
		$("input.mirror").val(ent);
	}, 500);

	$("#clear").click(function() {
		clearInterval(lp);
		var newgridsize = $("input").val();
		deletegrid();
		drawgrid(newgridsize);
		mainLoop();
	});
}


$(document).ready(function() {
	drawgrid();
	mainLoop();
});