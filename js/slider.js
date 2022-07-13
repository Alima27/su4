
			jQuery(document).ready(function ($) {
				var slideCount = $('.sliderjs ul li').length;
				var slideWidth = $('.sliderjs ul li').width();
				var slideHeight = $('.sliderjs ul li').height();
				var sliderUlWidth = slideCount * slideWidth;

				$('.sliderjs').css({ width: slideWidth, height: slideHeight });

				$('.sliderjs ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

					$('.sliderjs ul li:last-child').prependTo('.sliderjs ul');

					function moveLeft() {
							$('.sliderjs ul').animate({
									left: + slideWidth
							}, 200, function () {
									$('.sliderjs ul li:last-child').prependTo('.sliderjs ul');
									$('.sliderjs ul').css('left', '');
							});
					};

					function moveRight() {
							$('.sliderjs ul').animate({
									left: - slideWidth
							}, 200, function () {
									$('.sliderjs ul li:first-child').appendTo('.sliderjs ul');
									$('.sliderjs ul').css('left', '');
							});
					};

					$('a.control_prev').click(function () {
							moveLeft();
					});

					$('a.control_next').click(function () {
							moveRight();
					});

				});    
