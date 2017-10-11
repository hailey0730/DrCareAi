<!DOCTYPE HTML>

<html>
<head>
	<title>DrCare.ai</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<link rel="stylesheet" href="assets/css/loginWin.css" />
	<link rel="stylesheet" href="assets/css/noBannerBGMain.css" />
	<link rel="stylesheet" href="assets/css/headerFooter.css" />
	<link rel="stylesheet" href="assets/css/sicknessHypothesis.css" />
	<link rel="stylesheet" href="assets/css/sickness.css" />
	<link rel="stylesheet" href="assets/css/template/custom.css" />
	<link rel="stylesheet" href="assets/css/template/health.css" />
	<link rel="stylesheet" href="assets/css/template/main.css" />
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
				<li><a href="clinicBotPage.php">隨行醫生</a></li>
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
					<a href="#" class="icon fa-angle-down">健康資訊</a>
					<ul>
						<li><a href="knowledge.php">健康總覽</a></li>
						<li><a href="knowledgeList.php">疾病知識</a></li>
						<li><a href="hospitalTime.php">急症室時間</a></li>
						<li><a href="searchHealthArticle.php">健康誌</a></li>
						
					</ul>
				</li>
				<!-- <li><a href="http://test.drcare.ai/doctor/healthArticle.php">文章報導</a></li> -->
				<div id="login">
					<!-- <li><a href="login.php">登入</a></li> -->
					<?php 
				        if(!isset($_SESSION['user_id'])) {
				            echo '
				                <li id="loginbtn" style="cursor:pointer;"><a href="" onclick="createLoginWindow();">登入</a></li>
				            ';
				        }
				        else {
				            echo '
				                <li id="logoutbtn" style="cursor:pointer;"><a href="" onclick="$.get("Doctor/php/logout.php", {},
                function(){
                    window.location.reload();
            });">登出</a></li>		
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
		<header class="accent1">
			<img id="contentBanner" src="images/details_banner.png">
		</header>
	</section>

	<!-- Section -->
	<section id="one" class="main">
		
		<!-- Wrapper -->
		<div id="wrapper">
			<div class="inner">
				<a class="path" href="knowledgeList.php"> <h3>知識分類 > 疾病</h3></a>
				<h1 id="title"></h1>
				<p id="desc"></p>
			</div>
			<div class="inner">
				<h3 id="whatTitle">甚麼是 ? (What)</h3>
				<p id="what"></p>
			</div>
			<div class="inner">
				<h3 id="whyTitle">為甚麼會 ? (Why)</h3>
				<p id="why"></p>
			</div>
			<div class="inner">
				<h3 id="howTitle"> 治療方法? (How)</h3>
				<p id="how"></p>
			</div>
		</div>
	</section>

	<section id="moreEssay" class="main">
		<div class="inner">
			<h3 id="black">相關醫生 </h3> <h3 id="blue">（xxx科醫生）</h3>
		</div>
		<div class="inner">
			<div class="posts">
				<div class="contentSickness">
					<div class="bulletsDiv">
						<p>1</p>
					</div>
					<a href="">
						<div id="nameTag" class="nameTag">
							<h3>楊添榮</h3>
							<span>醫生</span>
							<p>婦產科</p>
						</div>
						<div id="address" class="address">
							<h3>中環</h3>
							<p>香港中環皇后⼤大道中48號萬年年⼤大廈1004室</p>
						</div>
					</a>
				</div>
				<div class="contentSickness">
					<div class="bulletsDiv">
						<p>2</p>
					</div>
					<a href="">
						<div id="nameTag" class="nameTag">
							<h3>楊添榮</h3>
							<span>醫生</span>
							<p>婦產科</p>
						</div>
						<div id="address" class="address">
							<h3>中環</h3>
							<p>香港中環皇后⼤大道中48號萬年年⼤大廈1004室</p>
						</div>
					</a>
				</div>
				<div class="contentSickness">
					<div class="bulletsDiv">
						<p>3</p>
					</div>
					<a href="">
						<div id="nameTag" class="nameTag">
							<h3>楊添榮</h3>
							<span>醫生</span>
							<p>婦產科</p>
						</div>
						<div id="address" class="address">
							<h3>中環</h3>
							<p>香港中環皇后⼤大道中48號萬年年⼤大廈1004室</p>
						</div>
					</a>
				</div>
			</div>
			<div class="more" style="width: 5em;">
				<p>更多...</p>
			</div>
		</div>
	</section>

	<section id="relatedEssay" class="main">
		<div class="articles">
			<article class="post">
				<header>
					<div class="title">
						<h3 id="black">相關文章報導</h3>
						<h2><a href="#">髕腱問題致前膝痛(Template)</a></h2>
						<p><img src="images/Banner.png"><span>飲食推薦</span>|<span>都市健康</span></p>
					</div>
					<div class="meta">
						<time class="published" datetime="2015-11-01">2017-08-02 21:48</time>
						<a href="#" class="author"><span class="name">吳彥</span><img src="images/Banner.png" alt="" /></a>
					</div>
				</header>
				<div class="Content">
					<div class="image featured"><img src="images/Banner.png"/></div>
					<p>前膝經常疼痛，尤其在運動一會兒後出現甚至加劇，有可能是髕腱發炎或受創撕裂所致，較常見於年輕及好動的人士身上。髕腱出問題可影響膝蓋的功能，導致日常活動也受到阻礙。

						髕骨亦即是俗稱「菠蘿蓋」的膝蓋骨，而髕腱則是把大腿四頭肌腱下半部及膝蓋與脛骨連接的組織，它的主要功能是伸展膝蓋，即幫助伸直或屈曲腿部。

						導致髕腱斷裂的原因，多是傷者跌倒下時，膝蓋呈屈曲狀態，大腿肌肉快速收縮時令髕腱因為大力牽扯而撕脫，特別是本身已因長時間勞損創傷而患有髕腱發炎或肌腱炎、髕腱衰退或部位曾注射類固醇等，都會增加髕腱斷裂的風險。另外，一些全身性疾病紅斑狼瘡症亦可使髕腱有慢性發炎，同樣會較容易發生髕腱斷裂的情況。</p>
						<a href="#">原文： http://localhost/myweb/template/html5up-future-imperfect/#</a>
						<footer>
							<ul class="actions">
								<li><a href="#" class="button big" style="margin-bottom: 1em;">繼續閱讀</a></li>
							</ul>
							<ul class="stats">
								<li><a class="icon fa-heart" href="#" , onclick="addFavourite();return false;">28</a></li>
								<li><a class="icon fa-thumbs-o-up" href="#" , onclick="like(); return false;">128</a></li>
							</ul>
						</footer>
					</div>
				</article>

			</section>

		</div>


<!-- Footer -->
			<footer id="footer">
				<div class="inner">
					<div class="split style1">
						<div class="contact">
							<h2>聯繫我們</h2>
							<ul class="contact-icons">
								<li class="icon fa-home">217B, 5W Enterprise Place<br>Science Park, NT, HK</li>
								<li class="icon fa-phone">(852)3598-3639</li>
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
									<!-- <li><a href="index.php">Home</a></li> -->
									<li><a href="http://m.me/2076696632356020">隨行醫生</a></li>
									<li><a href="http://test.drcare.ai/Doctor/findoc.php">醫生</a></li>
									<li><a href="knowledge.php"> 健康資訊</a></li>
									<li><a href="searchHealthArticle.php">文章報導</a></li>
									<li>免責聲明</li>
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
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.selectorr.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>
			<script src="assets/js/login.js"></script>
			<script src="assets/js/navBar.js"></script>
			<script src="assets/js/sickness.js"></script>



		</body>
		</html>