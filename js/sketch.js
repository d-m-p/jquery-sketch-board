// generate 16x16 div grid, scalable to any size
// 960px x 960px

function drawgrid(gridsize = 16) {
	screensize = 960; // max area for grid

	for (row = 0; row <= gridsize; row++) {
		$("#container").append("<div class='row'>");
			for (i = 0; i <= gridsize; i++) {
				$("#container").append("<div class='unfilled'></div>");
			}
		$("#container").append("</div>")
	}

	$(".unfilled").height("10px");
	$(".unfilled").width("10px");
}

function deletegrid() {
	$(".unfilled").remove();
	$(".filled").remove();
}

function rainbowLoop () {
	// enable rainbow mode, squares change color every hover
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