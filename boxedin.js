/*
	
	Script for BoxedIn Endgame
	author: Gjorge Karakabakov
	email: gorgekara@gmail.com

*/

setTimeout(function() {
	$(".hint").fadeOut("slow");
}, 5000);

var score = 0;
var level = 1;
var keydown = false;

setInterval(moveBox, 20);
var keys = {}

$(document).keydown(function(e) {

	keys[e.keyCode] = true;
	score += 1;
	$(".score").html(score);
	$(".box-pos-left").html('Left: ' + $("#box").position().left);
	$(".box-pos-top").html('Top: ' + $("#box").position().top);

	levelChange(score);

});

$(document).keyup(function(e) {
	delete keys[e.keyCode];
});

function levelChange(score) {

	if (score < 100) {
		level = 0;
		$(".wrapper").css("background", "rgba(0, 136, 255, 0.27)");
	}

	if (score > 100) {
		level = 1;
		$(".wrapper").css("background", "rgb(255, 225, 103)");
	}

	if (score > 300) {
		level = 2;
		$(".wrapper").css("background", "rgb(64, 160, 56)");
	}

	if (score > 600) {
		level = 3;
		$(".wrapper").css("background", "rgb(216, 81, 216)");
	}

	if (score > 1000) {
		level = 4;
		$(".wrapper").css("background", "rgb(255, 115, 115)");
	}

	if (score > 1500) {
		level = 5;
		$(".wrapper").css("background", "#C4C4C4");
	}

	if (score > 2000) {
		level = 6;
		$(".wrapper").css("background", "#DDDDDD");
	}

	if (score > 2700) {
		level = 7;
		$(".wrapper").css("background", "#EEE");
	}

	if (score > 3500) {
		level = 7;
		$(".wrapper").css("background", "#F1F1F1");
	}

	if (score > 4500) {
		level = 8;
		$(".wrapper").css("background", "#F7F7F7");
	}

	if (score > 7000) {
		level = 9;
		$(".wrapper").css("background", "#FFF");
	}

	$(".level-box").html('Level: ' + level);

}

function scoreReset() {

	$(".alert-box").animate({
		'top': '-100px',
		'right': '10px'
	});
	$(".alert-box").html('You scored ' + score + ' points!');
	$(".alert-box").fadeIn().animate({
		'top': '10px',
		'right': '10px'
	});

	setTimeout(function() {
		$(".alert-box").animate({
			'top': '-100px',
			'right': '10px'
		});
	}, 10000);

	// Reset the score if the box hits the left border
	score = 0;
	$(".score").html(score);
	levelChange(score);

}

function moveBox() {
	for (var direction in keys) {
		if (!keys.hasOwnProperty(direction)) continue;

		if (direction == 37) {

			if ($(".wrapper").offset().left >= $("#box").position().left) {

				$("#box").animate({
					left: "-=0"
				}, 0);

				scoreReset();

			} else {
				$("#box").animate({
					left: "-=5"
				}, 0);
			}

		}

		if (direction == 38) {

			if ($(".wrapper").offset().top >= $("#box").position().top) {

				$("#box").animate({
					top: "-=0"
				}, 0);

				scoreReset();

			} else {
				$("#box").animate({
					top: "-=5"
				}, 0);
			}

		}

		if (direction == 39) {

			var rightLimiter = $(".wrapper").offset().left + $(".wrapper").outerWidth();

			if (rightLimiter <= ($("#box").position().left + $("#box").width())) {

				$("#box").animate({
					left: "+=0"
				}, 0);

				scoreReset();

			} else {
				$("#box").animate({
					left: "+=5"
				}, 0);
			}

		}

		if (direction == 40) {

			var bottomLimiter = $(".wrapper").offset().top + $(".wrapper").outerHeight();

			if (bottomLimiter <= ($("#box").position().top + $("#box").width())) {

				$("#box").animate({
					top: "+=0"
				}, 0);

				scoreReset();

			} else {
				$("#box").animate({
					top: "+=5"
				}, 0);
			}
		}

		if (score == 0) {
			$("#box").css('left', '48%').css('top', '48%');
		}

	}
}