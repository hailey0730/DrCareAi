<!DOCTYPE HTML>
<!--
	Telemetry by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
-->
<html>
<head>
	<title>DrCare.ai</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<link rel="stylesheet" href="assets/css/loginWin.css" />
	<link rel="stylesheet" href="assets/css/main.css" />
	<link rel="stylesheet" href="assets/css/style.css" />
	<link rel="stylesheet" href="assets/css/tooltips.css" />
	<link rel="stylesheet" href="assets/css/index.css" />
	<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
</head>
<body id="top">

	<!-- Header -->
	<header id="header" class="alt">

		<!-- Logo -->
		<div class="logo">
			<a href="index.php">Dr Care.ai </a><span> Clinicbot</span>
		</div>

		<!-- Nav -->
		<nav id="nav">
			<ul>
				<li><a href="clinicBotPage.php">智能助手</a></li>
				<li>
					<a href="#" class="icon fa-angle-down">醫生</a>
					<ul>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=西醫">西醫</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=牙醫">牙醫</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=物理治療">物理治療</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=脊醫">脊醫</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=專業治療">專業治療</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=心理咨詢">心理咨詢</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=營養咨詢">營養咨詢</a></li>
						
					</ul>
				</li>
				<li>
					<a href="#" class="icon fa-angle-down">健康知識</a>
					<ul>
						<li><a href="knowledgeList.php">疾病</a></li>
						<li><a href="hospitalTime.php">急症室時間</a></li>
						<li><a href="searchHealthArticle.php">健康誌</a></li>
						
					</ul>
				</li>
				<li><a href="http://test.drcare.ai/doctor/healthArticle.php">健康報導</a></li>
				<div id="login">
					<!-- <li><a href="login.php">登入</a></li> -->
					<?php 
				        if(!isset($_SESSION['user_id'])) {
				            echo '
				                <li id="loginbtn" style="cursor:pointer;">登入</li>
				            ';
				        }
				        else {
				            echo '
				                <li id="logoutbtn" style="cursor:pointer;">登出</li>		
							';
				        }
				    ?>
				</div>
			</ul>
		</nav>

	</header>

	<div id="pageContent">

	<!-- Banner -->
	<section id="banner">
		<div class="inner">
			<h1>優質醫療服務平台</h1>
			<h2>給予你和家人的健康</h2>
			<ul class="actions">
				<li><a href="#one" class="button wide scrolly">免費註冊</a></li>
			</ul>
		</div>
	</section>

	<!-- One -->
	<section id="one" class="wrapper">
		<div class="inner">
			<div class="split style1 centered reversed">
				<section class="portrait">
					<span class="image fit portrait" style="background-image: url(images/hand.png)"><img src="images/hand.png" style="opacity: 0;" alt="" /></span>
				</section>
				<section class="detail">
					<h2>Dr.Care 一站式服務 助你管理自己和家人的健康</h2>
					<div class="features">
						<article >
							<span class="iconImage"><img class="iconFinddoc" src="images/icon_finddoc.png"></span>
							<a href="http://test.drcare.ai/Doctor/findoc.php"><h3>醫生 ></h3></a>
							<div class="iconContent">
								<p>我們明白生病時找附近診所的迫切性 , 所
以我們更合理地按各診所按地區﹑專科分
類 ,  更附有詳細的電話地址以及醫護人員
資料。</p>
								</div>
							</article>
							<article >								
								<span class="iconImage"><img class="iconFinddoc" src="images/icon_bubble.png"></span>
								<a href="clinicBotPage.php"><h3>智能助手 ></h3></a>
								<div class="iconContent">
									<p>內置全港最新最齊的搜尋醫生引擎，結合人工智能語音協助您迅速尋找合適的醫生！　
									</p>
								</div>
							</article>
							<article >								
								<span class="iconImage"><img class="iconFinddoc" src="images/icon_info.png"></span>
								<a href="knowledge.php"><h3>健康生活 ></h3></a>
								<div class="iconContent">
									<p>求醫時了解醫生的診斷方式和原理，並
懂得合適的表達病情，有助獲得更理想
的診斷。　</p>
								</div>
							</article>
							<article >								
								<span class="iconImage"><img class="iconFinddoc" src="images/Post.png"></span>
								<a href="searchHealthArticle.php"><h3>健康報導 ></h3></a>
								<div class="iconContent">
									<p>讓人心身健康是我們設計這個平台的理念，
多一點知識多一點健康，愉快的生活由此開
始。
									</p>
								</div>
							</article>
						</div>
					</section>
				</div>
			</div>
		</section>

		<!-- Two -->
		<section id="two" class="wrapper style1 special">
			<h2>在Dr.Care 的平台你可以</h2>

			<div class="inner">
				<div class="stats">
					<article>
						<h3>聯繫</h3><h3><span id="animateNum1">0</span></h3> <h3>名醫生</h3>
					</article>
					<article>
						<h3>閱讀</h3><h3><span id="animateNum2">0</span></h3> <h3>健康文章</h3>
					</article>
					<article>
						<h3>了解</h3><h3><span id="animateNum3">0</span></h3> <h3>種疾病知識</h3>
					</article>
					<article>
						<h3>查閱</h3><h3><span id="animateNum4">0</span></h3> <h3>健康報導</h3>
					</article>
				</div>
			</div>
		</section>

		<!-- Three -->
		<section id="three" class="wrapper">
			<div class="inner">
			<div class="split reversed">
					<div class="content">
						<h3>實時急症室等候時間參考</h3>
						<p>急症室會優先診治被分流為危殆、危急和緊急的病人。　
							最長等候時間顯示上限為8小時，表示急症室正處理大量等候已久的
							病人。病況輕微的病人可考慮使用私營醫療服務</p>
							<ul class="actions">
								<li><a href="hospitalTime.php" class="button">查看詳情</a></li>
							</ul>
						</div>
						<!-- <div class="map"> -->
						<img class="right"  src="images/Mapfordesktop/Map_normal.png" alt="Planets" usemap="#planetmap">
						<map name="planetmap">
							<!-- HK island -->
					<area data-key="HKright" title="" data-pos="1202,820" shape="poly" coords="1163,867,1129,816,1135,784,1166,777,1186,789,1197,796,1304,802,1319,873,1198,881,1175,854" > 
					<area data-key="HKleft" title="" data-pos="731,767" shape="poly" coords="860,901,822,847,722,830,720,756,839,757,854,802,887,814,894,843,885,867" > 
					<area data-key="HKmiddle" title="" data-pos="969,849" shape="poly" coords="1006,836,986,785,1022,756,1048,772,1051,801,1039,834,1082,839,1095,911,960,911,959,846" > 
					<!-- kowloon -->
					<area data-key="NTbelowMiddle" title="" data-pos="735,550" shape="poly" coords="838,529,727,532,718,603,854,611,863,579,869,593,906,545,901,516,874,499,850,506" > 
					<area data-key="kowloonTop" title="" data-pos="945,455" shape="poly" coords="954,592,917,535,930,510,933,442,1064,445,1064,511,986,519,986,558" > 
					<area data-key="kowloonBottom" title="" data-pos="847,669" shape="poly" coords="942,644,836,651,836,724,962,729,975,695,980,702,1018,656,1013,626,972,608" > 
					<area data-key="NTrightSecond" title="" data-pos="1186,472" shape="poly" coords="1185,611,1146,556,1173,517,1177,458,1308,462,1311,534,1219,539,1220,559,1206,587" >
					<!-- NT -->
					<area data-key="NTrightFourth" title="" data-pos="1030,141" shape="poly" coords="1000,274,969,220,980,190,1006,184,1010,130,1147,135,1149,203,1041,208,1030,240" > 
					<area data-key="NTTOP" title="" data-pos="705,46" shape="poly" coords="837,173,802,110,696,108,688,31,821,27,829,78,864,87,875,119,862,152" > 
					<area data-key="NTLeftBottom" title="" data-pos="14,737" shape="poly" coords="170,846,205,789,174,753,148,755,15,730,6,789,129,799" > 
					<area data-key="NTleftSecond" title="" data-pos="400,138" shape="poly" coords="526,269,488,211,390,206,390,130,522,132,531,172,556,188,563,213" > 
					<area data-key="NTrightThird" title="" data-pos="1140,335" shape="poly" coords="1117,460,1076,401,1103,372,1121,371,1126,320,1261,325,1261,397,1154,398" > 
					<area data-key="NTmiddle" title="" data-pos="825,354" shape="poly" coords="804,496,767,441,786,408,804,405,807,345,940,343,942,408,837,420,835,455" > 
					<area data-key="NTBottom" title="" data-pos="450,902" shape="poly" coords="586,1013,559,973,436,966,438,896,562,892,578,920,611,930,621,957,617,976" > 
					<area data-key="NTbelowTop" title="" data-pos="716,202" shape="poly" coords="671,313,639,257,662,221,685,227,701,194,835,195,831,264,706,267" > 
					<area data-key="NTright" title="" data-pos="1320,570" shape="poly" coords="1288,692,1252,631,1290,593,1302,599,1309,558,1444,566,1438,635,1327,639" > 
					<area data-key="NTleftFirst" title="" data-pos="324,290" shape="poly" coords="456,414,424,360,313,352,312,279,437,279,449,318,477,327,493,357" > 
					<area data-key="NTleftThird" title="" data-pos="546,361" shape="poly" coords="687,482,645,432,536,425,533,350,662,350,673,390,705,395,717,419,707,451" > 
						</map>
					</div>
				</div>
			</section>

			<!-- Four -->
			<section id="four" class="quotes">
				<article >
					<span class="image"><img src="images/sofa.png" alt="" data-position="center" /></span>
					<span class="featureIcon"><img class="iconFeature" src="images/Group 5.png"></span>
					<h2>坐下來放鬆吧</h2>
					<h2>現在你可以用語音智能搜索</h2>
				</article>
				<article >
					<span class="image"><img src="images/mobile.png" alt="" data-position="left" /></span>
					<span class="featureIcon"><img class="iconFeature" src="images/messenger icon.png"></span>
					<h2>現在你可以聯繫你的醫生</h2>
					<h2>就如聯繫你的朋友一樣簡單</h2>
					<div class="author">
						<span class="name">Powered by clinicbot</span>
					</div>
				</article>
			</section>

			<!-- Five -->
			<section id="five" class="wrapper">
				<div class="inner">
					<div class="split">
						<section>
							<span class="image fit message"><img src="images/message.png" alt="" /></span>
						</section>
						<section>
							<div class="ratings">
								<form action="#" method="post">
									<h2>給我們留言</h2>
									<div class="field half first">
										<input name="name" id="clientName" placeholder="名稱" type="text"/>
									</div>
									<div class="field half">
										<input name="email" id="email" placeholder="電子郵件" type="text"/>
									</div>
									<div class="field">
										<select name="category" id="category">
											<option>類別</option>
											<option value=""></option>
										</select>
									</div>
									<div class="field">
										<textarea name="message" id="message" rows="6" placeholder="信息" value=""></textarea>
									</div>
									<ul class="actions">
										<li><input id="sendMail" value="發送" class="button" type="submit" onsubmit="return false" /></li>
									</ul>
								</form>
							</div>
						</section>
					</div>
				</div>
			</section>
</div>
			<!-- Footer -->
			<footer id="footer">
				<div class="inner">
					<div class="split style1">
						<div class="contact">
							<h2>聯繫我們</h2>
							<ul class="contact-icons">
								<li class="icon fa-home"><a href="#">217B, 5W Enterprise Place<br>Science Park, NT, HK</a></li>
								<li class="icon fa-phone"><a href="#">(852)3598-3639</a></li>
								<li class="icon fa-envelope-o"><a href="#">info@clinicbot.io</a></li>
							</ul>
						</div>
						<div class="contact">
							<h3>熱門專科醫生</h3>
							<div class="">
								<ul style="display: inline-block;">
									<li>皮膚科</li>
									<li>眼科</li>
									<li>中醫</li>
									<li>性病</li>
									<li>婦產科</li>
									<li>耳鼻喉科</li>
								</ul>
								<ul style="display: inline-block; position: absolute;">
									<li>整形外科</li>
									<li>骨科</li>
									<li>牙科</li>
								</ul>
							</div>
						</div>
						<div class="contact">
							<h3>醫生集中大廈</h3>
							<div>
								<ul>
									<li>旺角中心一期</li>
									<li>亞太中心</li>
									<li>萬邦行</li>
									<li>南豐中心</li>
									<li>海洋中心</li>
									<li>新世界大廈</li>
									<li>中建大廈</li>
								</ul>
							</div>
						</div>
						<div class="contact">
							<h3>熱門私家醫院</h3>
							<div>
								<ul>
									<li><a href="http://www.stpaul.org.hk/internet/">聖保祿醫院</a></li>
									<li><a href="http://www.hksh.org.hk/zh-hk/about-us.php">養和醫院</a></li>
									<li><a href="http://www.union.org/new/cindex.php">仁安醫院</a></li>
									<li><a href="http://www.hkbh.org.hk/chi/home.php">浸會醫院</a></li>
									<li><a href="https://www.twah.org.hk/tc/main">港安醫院</a></li>
									<li><a href="http://www.sth.org.hk/index.asp?lang_code=zh">聖德肋撒醫院</a></li>
									<li><a href="http://www.evangel.org.hk/">播 道 醫 院</a></li>
									<li><a href="http://www.canossahospital.org.hk/">嘉諾撒醫院</a></li>
								</ul>
							</div>
						</div>
						<div class="contact">
							<h3>Dr. Care</h3>
							<div>
								<ul>
									<li><a href="index.php">Home</a></li>
									<li>Doctors</li>
									<li>免責聲明</li>
									<li>Terms</li>
									<li>Careers</li>
									<li>Contact</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="copyright">
						<p>&copy; Asiabots. All rights reserved.</p>
						<p>免責聲明︰Dr care 會盡力驗證所有提交的資料和網頁內容正確無誤。 但本公司不會負責當中的任何錯誤和錯誤而引起的責任。 如有任何資料改變，有關的醫生將負責更新個人的資料或告本公司報告。 醫生的費用、所有文章等內容僅供參考，病人應與醫生或診所的有關醫療人員確認為實。</p>
					</div>
				</div>
			</footer>

			<!-- Scripts -->
			<!-- <script src="http://code.jquery.com/jquery-1.7.0.min.js"></script> -->
			<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.js"></script> -->
			<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.animateNumber.min.js"></script>
			<script>
				$(document).ready(function(){
					var bool = true;
			//get the numbers
			var num1 = 9883;
			var num2 = 640;
			var num3 = 98;
			var num4 = 1580;

			$(document).scroll(function(){
				// console.log($(this).scrollTop());
				var hT = $('#two').offset().top,
			       hH = $('#two').outerHeight(),
			       wH = $(window).height();
			       //hT+hH-wH is better for browser but not for mobile
				if($(this).scrollTop() > (hT-wH) && bool) {
					// alert($(window).height());
					$('#animateNum1').animateNumber(
					{
						number: num1
					},
					1500
					)
					$('#animateNum2').animateNumber(
					{
						number: num2
					},
					1500
					)
					$('#animateNum3').animateNumber(
					{
						number: num3
					},
					1500
					)
					$('#animateNum4').animateNumber(
					{
						number: num4
					},
					1500
					)
					bool = false;
				}

			});
		});

	</script>

	<script src="assets/js/jquery.dropotron.min.js"></script>
	<script src="assets/js/jquery.scrollex.min.js"></script>
	<script src="assets/js/jquery.scrolly.min.js"></script>
	<script src="assets/js/jquery.selectorr.min.js"></script>
	<script src="assets/js/skel.min.js"></script>
	<script src="assets/js/util.js"></script>
	<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
	<script src="assets/js/main.js"></script>
	<script src="assets/js/login.js"></script>
	<script src="assets/js/sendMail.js"></script>
</body>
</html>