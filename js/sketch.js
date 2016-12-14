function drawgrid(gridsize = 16) {
	var screensize = 960; // max area for grid
	var maxgrid = 60;
	var errorsize = 16; // size to use in case of bad input

	if(/^\+?([1-9]\d*)$/.test(gridsize) == false) { // check if gridsize is an integer > 0
		gridsize = errorsize;
		$("input.entered").val(errorsize);
	} 

	if(gridsize > maxgrid) { 
		gridsize = maxgrid;
		$("input.entered").val(maxgrid);
		$("#makenew").append("<div id='maxmsg'>" + maxgrid + "'s the max. I don't want to crash your browser!</div>");
		$("#maxmsg").fadeOut(7000);
	}

	for (row = 0; row < gridsize; row++) {
		$("#container").append("<div class='row'>");
			for (i = 0; i < gridsize; i++) {
				$("#container").append("<div class='unfilled'></div>");
			}
		$("#container").append("</div>");
	}

	square_size = screensize / gridsize;
	$(".unfilled").height(square_size);
	$(".unfilled").width(square_size);
}

function deletegrid() {
	$(".unfilled").remove();
	$(".filled").remove();
	$(".row").remove();
}

function rainbowLoop () {
	// enable rainbow mode, squares change color every hover
}

function mainLoop() {
	$unfilled = $(".unfilled");
	$entered = $("input.entered");

	var lp = setInterval(function() {
		$unfilled.hover(function() {
			$(this).addClass("filled");
			$(this).removeClass("unfilled");
		});

		// textbox mirror
		var ent = $entered.val();
		$("input.mirror").val(ent);
	}, 500);

	$("#clear").click(function() {
		clearInterval(lp);
		var newgridsize = $("input.entered").val();
		deletegrid();
		drawgrid(newgridsize);
		mainLoop();
	});
}


$(document).ready(function() {
	drawgrid();
	mainLoop();
});