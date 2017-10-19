$(document).ready(function(){
	var value = 0;
	//value determined by which article client clicked
	// $('some id').click(function(){	set value;	})

	window.sessionStorage.setItem('content', value);	

//=========================update article without button=============================
	// $.ajax({
	// 	method: "GET",
	// 	url: ""

	// }).done(function(data){
		// var json = JSON.parse(data);

		$('.spotlights article').each(function(i, obj){
			var article = $(this).children();
			// console.log(article);		//[0] a, [1] h3, [2] p
			$(article[0]).attr("href", );
			$($(article[0]).children()[0]).attr("src", );	
			// console.log($($(article[0]).children()[0]));
			$(article[1]).text();
			$($(article[1]).children()[0]).attr("href", );	
			$(article[2]).text();

		});

	// });

//=========================update articles on sidebar=========================
	// $.ajax({
	// 	method: "GET",
	// 	url: ""

	// }).done(function(data){
		// var json = JSON.parse(data);

		//===========blurb===========================
		var blurb = $('.sidebar').children()[0];
		$($(blurb).children()[0]).text();
		$($(blurb).children()[1]).text();
		var actions = $(blurb).children()[2];
		$($($(actions).children()[0]).children()[0]).attr('href', '');

		//=========featured posts====================
		$('.featured-posts article a img').attr("src", );
		$('.featured-posts article header span').text();
		$('.featured-posts article header h3').text();
		$('.featured-posts article p').text();
		$('.featured-posts article ul li a').attr("href", );

		//========without pic=========================
		$('.other li').each(function(i, obj){
			// console.log($(this).children());	//[0] a, [1] br, [2] span
			var liChild = $(this).children();
			$(liChild[0]).attr("href", );
			$(liChild[0]).text( );
			$(liChild[2]).text( );


		});

	// });

//==========================box slider===============================================
	$.ajax({
		method: "GET",
		url: "DrCare.HotArticle.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513"

	}).done(function(data){
		var json = JSON.parse(data);
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

});

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

