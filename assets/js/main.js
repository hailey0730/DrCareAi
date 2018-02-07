/*
	Telemetry by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

$(document).ready(function(){
	$('#header').append(makeNav());

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
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

	$(function() {

		var	$window = $(window),
			$header = $('#header'),
			$banner = $('#banner'),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

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

	if ('serviceWorker' in navigator && 'PushManager' in window) {

	  console.log('Service Worker and Push is supported');
	  navigator.serviceWorker.register('./assets/js/service-worker.js')

	  .then(function(swReg) {

	    console.log('Service Worker is registered', swReg);
	    swRegistration = swReg;
	   // askPermission();

	  })
	  .catch(function(error) {
	    console.error('Service Worker Error', error);
	  });
	  
	  askPermission()					
	    .then(function(permissionResult){
	    		console.log(permissionResult);
	    		// do something with permissionResult
	    }) 
	    .catch(function(error) {
		    console.error('Get Permission result Error', error);
		  });

	   //registerServiceWorker();
	   //askPermission();
	   //var pushSubscription = JSON.stringify(subscribeUserToPush());		//some json
	   //sendSubscriptionToBackEnd(pushSubscription);

	} else {
	  console.warn('Push messaging is not supported');
	  // pushButton.textContent = 'Push Not Supported';
	}

  


});

// $(document).ready(function(){ 
//==============set login / logout function when there is nav bar=================================
// 	var loginout = $($('#navPanel').children()).children().last();
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



// });

// ====================== subscribe user to push notification ===============================

function registerServiceWorker() {
  return navigator.serviceWorker.register('./assets/js/service-worker.js')
  .then(function(registration) {
    console.log('Service worker successfully registered.');
    return registration;
  })
  .catch(function(err) {
    console.error('Unable to register service worker.', err);
  });
}

function askPermission() {
  return new Promise(function(resolve, reject) {
    const permissionResult = Notification.requestPermission(function(result) {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  })
  .then(function(permissionResult) {
      console.log(permissionResult);
    if (permissionResult !== 'granted') {
      throw new Error('We weren\'t granted permission.');
    }
    return permissionResult
  });
}

function subscribeUserToPush() {
  return navigator.serviceWorker.register('./assets/js/service-worker.js')
  .then(function(registration) {
    const subscribeOptions = {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        'BPUGUNwfjY2s4SLPLCEnlvNiGfAaXiGNdrlR_ZrrSSk6P1TTYkINSso4xb7vWICCz-nTm8bWVYDZEtLixkmLzfA'
      )
    };

    return registration.pushManager.subscribe(subscribeOptions);
  })
  .then(function(pushSubscription) {
    console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
    return pushSubscription;
  });
}

function sendSubscriptionToBackEnd(subscription) {
  return fetch('/api/save-subscription/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(subscription)
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Bad status code from server.');
    }

    return response.json();
  })
  .then(function(responseData) {
    if (!(responseData.data && responseData.data.success)) {
      throw new Error('Bad response from server.');
    }
  });
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// ====================== html to append to the content ===============================

// <li><a href="http://www.drcare.ai/knowledge.php">健康總覽</a></li>
function makeNav(){
	var nav = '';
	nav += '<nav id="nav">			<ul>				<li><a href="http://www.drcare.ai/clinicBotPage.php">隨行醫生</a></li>				<li>												<a href="#" class="icon fa-angle-down">醫生</a>					<ul>		<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫">西醫</a></li>																																								<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=牙科">牙醫</a></li>			</ul>				</li>	<li><a href="#" class="icon fa-angle-down">專業治療</a><ul><li><a href="http://www.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li><li><a href="http://www.drcare.ai/Doctor/findoc.php?category=物理治療">物理治療</a></li>							<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=脊骨神經科">脊醫</a></li>							  <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療">專業治療</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=心理學">心理咨詢</a></li>			<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療&subcategory=營養學">營養咨詢</a></li> </ul>		<li><a href="http://www.drcare.ai/searchVaccine.html">流感疫苗</a></li>				<li>																<a href="#" class="icon fa-angle-down">健康資訊</a>					<ul>		<li><a href="http://www.drcare.ai/searchHealthArticle.php">健康誌</a></li>								<li><a href="http://www.drcare.ai/knowledgeList.php">疾病知識</a></li>										<li><a href="http://www.drcare.ai/hospitalTime.php">急症室時間</a></li>			<li><a href="http://www.drcare.ai/BMI.html">BMI知多啲</a></li>														</ul>				</li>	</div>			</ul>		</nav>';
	return nav;
}


function makeNavWithLoginout(){
	var nav = '';
	nav += '<nav id="nav">			<ul>				<li><a href="http://www.drcare.ai/clinicBotPage.php">智能助手</a></li>				<li>					<a href="#" class="icon fa-angle-down">醫生</a>					<ul>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫">西醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=牙科">牙醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=物理治療">物理治療</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=脊骨神經科">脊醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療">專業治療</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=心理學">心理咨詢</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療&subcategory=營養學">營養咨詢</a></li>											</ul>				</li>				<li>					<a href="#" class="icon fa-angle-down">健康資訊</a>					<ul>						<li><a href="http://www.drcare.ai/knowledge.php">健康總覽</a></li>						<li><a href="http://www.drcare.ai/knowledgeList.php">疾病知識</a></li>						<li><a href="http://www.drcare.ai/hospitalTime.php">急症室時間</a></li>						<li><a href="http://www.drcare.ai/searchHealthArticle.php">健康誌</a></li>											</ul>				</li>				<!-- <li><a href="http://www.drcare.ai/doctor/healthArticle.php">文章報導</a></li> -->				<div id="login">					<!-- <li><a href="login.php">登入</a></li> -->		<?php 				        if(!isset($_SESSION["user_id"])) {				            echo "';
	nav += "				                <li id='loginbtn' style='cursor:pointer;'><a href=' onclick='createLoginWindow();'>登入</a></li>				            '";
	nav += '				        }				        else {				            echo "';
	nav += "				                <li id='logoutbtn' style='cursor:pointer;'><a href='' onclick='$.get(";
	nav += '"Doctor/php/logout.php", {},                function(){                    window.location.reload();            });"';
	nav += ">登出</a></li>									'";
	nav += '				        }				    ?>							</div>			</ul>		</nav>';
	console.log(nav);
	return nav;
}