$(document).ready(function(){
	var value = 0;
	//value determined by which article client clicked
	// $('some id').click(function(){	set value;	})

	window.sessionStorage.setItem('content', value);	

//=========================update article on sidebar=============================
	loadSideBar();
	loadSideBarOther();
//==========================box slider===============================================
loadBoxSlider();


});

function loadSideBar(){
	$('.sidebar').empty();
	$.getJSON("php/loadSideBar.php",
		function(json){
			var sidebar = '';
			for(var i = 0; i < json.length; i ++){
				sidebar += '<section class="featured-posts"><h2>';
				sidebar += ;
				sidebar += '</h2>	<article>	<a class="image fit"><img src="'
				sidebar += ;
				sidebar += '" alt=""></a>	<header> <h3><a>';
				sidebar += ;
				sidebar += '</a></h3>	</header>	<p>';
				sidebar += ;
				sidebar += '</p>	<ul class="actions">	<li><a href="';
				sidebar += ;
				sidebar += '" class="button big">詳情</a></li>		</ul>	</article>	</section>';
			}
			$('.sidebar').append(sidebar);
		});
}

function loadSideBarOther(){
	$.getJSON("php/loadSideBarOther.php",
		function(json){
			var other = '<section>	<h2>其他文章</h2>		<ul class="other">';
			for(var i = 0; i < json.length; i++){
				other += '<li>		<a href="';
				other += ;
				other += '">';
				other += ;
				other += '</a><br>	<span class="date">';
				other += ;
				other += '</span>	</li>';
			}
			other += '</ul>		</section>';
			$('.sidebar').append(other);
		})
}

function loadBoxSlider(){
	$.getJSON("php/loadBoxSlider.php",
		function(json){
			$('#firstSlide img').attr("src", json[0].ImageUrl);
			$('#firstH2').text(json[0].Subject);
			$('#firstLink a').attr("href", json[0].Url);
			$('#banner').append(hotArticle(json));
			
//==============update box slider=====================================================

var settings = {

	banner: {

		// Indicators (= the clickable dots at the bottom).
			indicators: true,

		// Transition speed (in ms)
		// For timing purposes only. It *must* match the transition speed of "#banner > article".
			speed: 1500,

		// Transition delay (in ms)
			delay: 4000

	}

};

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {

				$t.css('background-position', 'center 100%, center 100%, center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			skel.on('change', function() {

				if (skel.breakpoint('large').active)
					(off)();
				else
					(on)();

			});

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	/**
	 * Custom banner slider for Slate.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._slider = function(options) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._slider(options);

			return $this;

		}

		// Vars.
			var	current = 0, pos = 0, lastPos = 0,
				slides = [], indicators = [],
				$indicators,
				$slides = $this.children('article'),
				intervalId,
				isLocked = false,
				i = 0;

		// Turn off indicators if we only have one slide.
			if ($slides.length == 1)
				options.indicators = false;

		// Functions.
			$this._switchTo = function(x, stop) {
				current = x;
				
				if (isLocked || pos == x)
					return;

				isLocked = true;

				if (stop)
					window.clearInterval(intervalId);

				// Update positions.
					lastPos = pos;
					pos = x;
					
				// Hide last slide.
					slides[lastPos].removeClass('top');

					if (options.indicators)
						indicators[lastPos].removeClass('visible');
					// console.log(slides[pos].html());
					
				// Show new slide.
					slides[pos].addClass('visible').addClass('top');

					if (options.indicators)
						indicators[pos].addClass('visible');

				// Finish hiding last slide after a short delay.
					window.setTimeout(function() {

						slides[lastPos].addClass('instant').removeClass('visible');

						window.setTimeout(function() {

							slides[lastPos].removeClass('instant');
							isLocked = false;
							
						}, 100);

					}, options.speed);

			};

		// Indicators.
			if (options.indicators)
				$indicators = $('<ul class="indicators"></ul>').appendTo($this);

		// Slides.
			$slides
				.each(function() {

					var $slide = $(this),
						$img = $slide.find('img');

					// Slide.
						$slide
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', ($slide.data('position') ? $slide.data('position') : 'center'));
							
					// Add to slides.
						slides.push($slide);

					// Indicators.
						if (options.indicators) {

							var $indicator_li = $('<li>' + i + '</li>').appendTo($indicators);

							// Indicator.
								$indicator_li
									.data('index', i)
									.on('click', function() {
										$this._switchTo($(this).data('index'), true);
										
										intervalId = window.setInterval(function() {
											current++;

											if (current >= slides.length)
												current = 0;

											$this._switchTo(current);

										}, options.delay);
									});

							// Add to indicators.
								indicators.push($indicator_li);

						}

					i++;

				});

		// Initial slide.
			slides[pos].addClass('visible').addClass('top');

			if (options.indicators)
				indicators[pos].addClass('visible');

		// Bail if we only have a single slide.
			if (slides.length == 1)
				return;

		// Main loop.
			intervalId = window.setInterval(function() {
				current++;

				if (current >= slides.length)
					current = 0;

				$this._switchTo(current);

			}, options.delay);

	};

	$(function() {

		var	$window = $(window),
			$banner = $('#banner'),
			$header = $('#header'),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form')
				.placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		

		// Slider.
			$banner
				._slider(settings.banner);

		// Scrolly.
			$('.scrolly').scrolly();

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

		// Banner.
			if ($banner.length > 0)
				$banner._parallax(0.25);

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'right',
				hideDelay: 350,
				baseZIndex: 100000
			});

		// Menu.
			$('<a href="#navPanel" class="navPanelToggle button">選單</a>')
				.appendTo($header);

			$(	'<div id="navPanel">' +
					'<nav>' +
						$('#nav') .navList() +
					'</nav>' +
					'<a href="#navPanel" class="close"></a>' +
				'</div>')
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right'
					});

			if (skel.vars.os == 'wp'
			&&	skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

		// Tabs.
			$('.tabs').selectorr({
				titleSelector: 'h3',
				delay: 250
			});

		// Quotes.
			$('.quotes > article')
				.each(function() {

					var	$this = $(this),
						$image = $this.find('.image'),
						$img = $image.find('img'),
						x;

					// Assign image.
						$this.css('background-image', 'url(' + $img.attr('src') + ')');
					// Set background position.
						if (x = $img.data('position'))
							$this.css('background-position', x);

					// Hide image.
						$image.hide();

				});

	});

})(jQuery);
});
}

//==============set login / logout function when there is nav bar=================================
// var loginout = $($('#navPanel').children()).children().last();
// 	console.log($(loginout).text());
// 	console.log(loginout);
// 	if($(loginout).text() == '登入'){
// 		$(loginout).attr("id","loginbtn");
// 		$(loginout).attr("onclick","createLoginWindow();");
// 	}else{
// 		$(loginout).attr("id","logoutbtn");
// 		$(loginout).attr("onclick","$.get('Doctor/php/logout.php', {},                function(){                    window.location.reload();});");		
// 	}
// 		$(loginout).attr('style', 'cursor:pointer');



function hotArticle(json){
	var article = '';
	for(var i = 1; i < json.length; i ++){
			article += '<article data-position="top right">';
			article += '<div class="inner"><img src="';
			article += json[i].ImageUrl ;
			article += '" alt=""><h2>' ;
			article += json[i].Subject ;
			article += '</h2><ul class="actions"><li><a class="button big" href="' ;
			article += json[i].Url ;
			article += '">詳情</a></li></ul></div></article>';
	}
	return article;
}

