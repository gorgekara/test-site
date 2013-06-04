	var keydown = false;

		setInterval(moveBox, 0);
		var keys = {}

		setInterval(function(){
			$(".wrapper").animate({"background-position":"-=10px"}, 50);
		}, 20);

		setInterval(function(){
			$(".speeding").animate({"background-position":"-=40px"}, 50);
		});

		setInterval(function(){
			$(".target").animate({"top":"-=100px"});
		}, 500);

		setInterval(function(){
			$(".target").animate({"top":"+=100px"});
		}, 500);

		setInterval(function(){
			var rightLimiter = $(".wrapper").offset().left + $(".wrapper").outerWidth() - 45;
			$(".beam").animate({"left":"+=40px"}, 50, function(){
				if($(this).offset().left >= ($(".target").offset().left - 20)) {
					var targetTop = $(".target").offset().top;
					var targetRange = $(".target").offset().top + $(".target").height();
					if($(this).offset().top < targetRange && $(this).offset().top > targetTop) {
						$(".target").append('<div class="explosion"><img src="explosion.png" /></div>');
						$(".target").css("background","rgba(0,0,0,0)").fadeOut();
						$(".explosion")
							.show()
							.css("position","absolute")
							.css("top","0")
							.css("left","0")
							.animate({"opacity":"1"}, 1000, function(){
								$(this).remove();
							}, 0)
					}
				}

				if($(this).offset().left >= rightLimiter) {
					$(this).remove();
				}
			});
		}, 20);

		$(document).keydown(function(e) {
			keys[e.keyCode] = true;

			if(e.keyCode == 32) {
				$(".wrapper").append('<div class="beam"></div>');
				$(".beam")
					.css("position","absolute")
					.animate({"left":"+=50"}, 10, function(){
						$(this).css("display","block");
						$(this).css("top",($(".craft").offset().top+36)+"px");
						$(this).css("left",($(".craft").offset().left+70)+"px");
					});
			}

		});

		$(document).keyup(function(e) {
			delete keys[e.keyCode];
		});

		function moveBox() {
			for (var direction in keys) {
				if (!keys.hasOwnProperty(direction)) continue;

				if (direction == 37) {
					if ($(".wrapper").offset().left >= $(".craft").position().left) {
						$(".craft").animate({
							left: "-=0"
						}, 0);
					} else {
						$(".craft").animate({
							left: "-=5"
						}, 0);
					}

				}

				if (direction == 38) {

					if ($(".wrapper").offset().top >= $(".craft").position().top) {
						$(".craft").animate({
							top: "-=0"
						}, 0);
					} else {
						$(".craft").animate({
							top: "-=5"
						}, 0);

					}

				}

				if (direction == 39) {
					var rightLimiter = $(".wrapper").offset().left + $(".wrapper").outerWidth();

					if (rightLimiter <= ($(".craft").position().left + $(".craft").width())) {
						$(".craft").animate({
							left: "+=0"
						}, 0);
					} else {
						$(".craft").animate({
							left: "+=5"
						}, 0);
						
						$(".craft-body")
							.css("height","40px")
							.css("width","20px");
						
						$(".left-arm")
							.css("top","0")
							.css("left","0")
							.css("right","auto")
							.css("bottom","auto")
							.css("height","10px")
							.css("width","40px");

						$(".right-arm")
							.css("top","auto")
							.css("right","auto")
							.css("left","0")
							.css("bottom","0")
							.css("height","10px")
							.css("width","40px");
					}
						
				}

				if (direction == 40) {
					var bottomLimiter = $(".wrapper").offset().top + $(".wrapper").outerHeight() - 25;

					if (bottomLimiter <= ($(".craft").position().top + $(".craft").width())) {
						$(".craft").animate({
							top: "+=0"
						}, 0);
					} else {
						$(".craft").animate({
							top: "+=5"
						}, 0);
					}

				}

			}
		}