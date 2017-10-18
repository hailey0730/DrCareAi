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

function makeNav(){
	var nav = '';
	nav += '<nav id="nav">			<ul>				<li><a href="clinicBotPage.php">智能助手</a></li>				<li>												<a href="#" class="icon fa-angle-down">醫生</a>					<ul>		<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫">西醫</a></li>																				<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>																				<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=牙科">牙醫</a></li>																				<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=物理治療">物理治療</a></li>																		<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=脊骨神經科">脊醫</a></li>																			  <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療">專業治療</a></li>																			<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=心理學">心理咨詢</a></li>																		<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療&subcategory=營養學">營養咨詢</a></li>											</ul>				</li>				<li>																<a href="#" class="icon fa-angle-down">健康資訊</a>					<ul>						<li><a href="knowledge.php">健康總覽</a></li>						<li><a href="knowledgeList.php">疾病知識</a></li>										<li><a href="hospitalTime.php">急症室時間</a></li>						<li><a href="searchHealthArticle.php">健康誌</a></li>											</ul>				</li>	</div>			</ul>		</nav>';
	return nav;
}

function makeNavWithLoginout(){
	var nav = '';
	nav += '<nav id="nav">			<ul>				<li><a href="clinicBotPage.php">智能助手</a></li>				<li>					<a href="#" class="icon fa-angle-down">醫生</a>					<ul>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫">西醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=牙科">牙醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=物理治療">物理治療</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=脊骨神經科">脊醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療">專業治療</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=心理學">心理咨詢</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療&subcategory=營養學">營養咨詢</a></li>											</ul>				</li>				<li>					<a href="#" class="icon fa-angle-down">健康資訊</a>					<ul>						<li><a href="knowledge.php">健康總覽</a></li>						<li><a href="knowledgeList.php">疾病知識</a></li>						<li><a href="hospitalTime.php">急症室時間</a></li>						<li><a href="searchHealthArticle.php">健康誌</a></li>											</ul>				</li>				<!-- <li><a href="http://www.drcare.ai/doctor/healthArticle.php">文章報導</a></li> -->				<div id="login">					<!-- <li><a href="login.php">登入</a></li> -->		<?php 				        if(!isset($_SESSION["user_id"])) {				            echo ';
	nav += '				                <li id="loginbtn" style="cursor:pointer;"><a href="" onclick="createLoginWindow();">登入</a></li>				            ';
	nav += '				        }				        else {				            echo ';
	nav += '				                <li id="logoutbtn" style="cursor:pointer;"><a href="" onclick="$.get("Doctor/php/logout.php", {},                function(){                    window.location.reload();            });">登出</a></li>									';
	nav += '				        }				    ?>							</div>			</ul>		</nav>';
	console.log(nav);
	return nav;
}


function makeFooter(){
	var footer = '';
	footer += '<footer id="footer">				<div class="inner">					<div class="split style1">						<div class="contact">							<h2>聯繫我們</h2>							<ul class="contact-icons">								<li class="icon fa-home">217B, 5W Enterprise Place<br>Science Park, NT, HK</li>								<li class="icon fa-phone">(852)3598-3639</li>								<li class="icon fa-envelope-o"><a href="mailto:info@clinicbot.io">info@clinicbot.io</a></li>							</ul>						</div>						<div class="contact">							<h3>熱門專科醫生</h3>							<div class="">								<ul style="display: inline-block;">									<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=皮膚及性病科">皮膚科</a></li>															<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=眼科">眼科</a></li>																	<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>																					<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=皮膚及性病科">性病</a></li>															<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=婦產科">婦產科</a></li>																<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=耳鼻喉科">耳鼻喉科</a></li>								</ul>								<ul style="display: inline-block; position: absolute;">														<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=整形外科">整形外科</a></li>															<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=骨科">骨科</a></li>																	<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=牙科">牙科</a></li>								</ul>							</div>						</div>						<div class="contact">							<h3>醫生集中大廈</h3>							<div>								<ul>									<li>旺角中心一期</li>									<li>亞太中心</li>																						<li>萬邦行</li>									<li>南豐中心</li>																								<li>海洋中心</li>									<li>新世界大廈</li>																							<li>中建大廈</li>								</ul>							</div>						</div>						<div class="contact">							<h3>熱門私家醫院</h3>							<div>								<ul>									<li><a href="http://www.stpaul.org.hk/internet/">聖保祿醫院</a></li>																								<li><a href="http://www.hksh.org.hk/zh-hk/about-us.php">養和醫院</a></li>																						<li><a href="http://www.union.org/new/cindex.php">仁安醫院</a></li>																								<li><a href="http://www.hkbh.org.hk/chi/home.php">浸會醫院</a></li>																								<li><a href="https://www.twah.org.hk/tc/main">港安醫院</a></li>																									<li><a href="http://www.sth.org.hk/index.asp?lang_code=zh">聖德肋撒醫院</a></li>																					<li><a href="http://www.evangel.org.hk/">播道醫院</a></li>																										<li><a href="http://www.canossahospital.org.hk/">嘉諾撒醫院</a></li>								</ul>							</div>						</div>						<div class="contact">							<h3>Dr. Care</h3>							<div>								<ul>									<!-- <li><a href="index.php">Home</a></li> -->													<li><a href="http://m.me/2076696632356020">隨行醫生</a></li>									<li><a href="http://www.drcare.ai/Doctor/findoc.php">醫生</a></li>				<li><a href="knowledge.php"> 健康資訊</a></li>									<li><a href="searchHealthArticle.php">文章報導</a></li>									<li><a href="disclaimer.php">免責聲明</li>								</ul>							</div>						</div>					</div>					<div class="copyright">						<p>&copy; Asiabots. All rights reserved.</p>						<p>免責聲明︰Dr care 會盡力驗證所有提交的資料和網頁內容正確無誤。 但本公司不會負責當中的任何錯誤和錯誤而引起的責任。 如有任何資料改變，有關的醫生將負責更新個人的資料或告本公司報告。 醫生的費用、所有文章等內容僅供參考，病人應與醫生或診所的有關醫療人員確認為實。</p>					</div>				</div>			</footer>';
	return footer;
}