<!DOCTYPE HTML>
<!--
	Faction by Pixelarity
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
		<link rel="stylesheet" href="assets/css/noBannerBGMain.css" />
		<link rel="stylesheet" href="assets/css/headerFooter.css" />
		<!-- <link rel="stylesheet" href="assets/css/hypothesis.css" /> -->
		<link rel="stylesheet" href="assets/css/factionMain.css" />
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
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
						<li><a href="http://test.drcare.ai/Doctor/findoc.php">西醫</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php">中醫</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php">牙醫</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php">物理治療</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php">脊醫</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php">專業治療</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php">心理咨詢</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php">營養咨詢</a></li>
						
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

		<!-- Wrapper -->
			<div class="wrapper">

				<!-- Main -->
					<section class="main">

						<!-- Banner -->
							<section id="banner">
								
								<article data-position="bottom right">
									<div class="inner">
									<div id="firstSlide">
									<img src="https://ali.xinshipu.cn/20150204/original/1423046034690.jpg" alt="">
									</div>
										<h2 id="firstH2">【薯條致癌？】美研究8年年發現：每周食2次炸薯條 死亡風險高1倍</h2>
										<ul class="actions">
											<li id="firstLink"><a class="button big" href="content.php">詳情</a></li>
										</ul>
									</div>
								</article>
								<!-- <article data-position="top right">
									<div class="inner">
										<img src="" alt="">
										<h2>Sed mattis nunc lorem</h2>
										<p>Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida fringilla.</p>
										<ul class="actions">
											<li><a class="button big" href="#">Magna sed dolor</a></li>
										</ul>
									</div>
								</article>
								<article data-position="right">
									<div class="inner">
										<img src="" alt="">
										<h2>Nisl sed vitae</h2>
										<p>Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac magna consequat purus ipsum consequat.</p>
										<ul class="actions">
											<li><a class="button big" href="#">Magna sed dolor</a></li>
										</ul>
									</div>
								</article>
								<article data-position="center">
									<div class="inner">
										<img src="" alt="">
										<h2>Porta ultricies consectetur</h2>
										<p>Mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt lorem ipsum dolor sit amet. Magna tellus fusce tincidunt lorem.</p>
										<ul class="actions">
											<li><a class="button big" href="#">Magna sed dolor</a></li>
										</ul>
									</div>
								</article> -->
							</section>

						<!-- Blurb -->
							<section>
								<h1>知識分類</h1>
								<p>Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla lorem.</p>
							</section>

						<!-- Features -->
							<section class="features alt">
								<article >
									<h3><a href="#"> 疾病</a></h3>
									<p>Nullam et orci sed lorem magna et vivamus sagittis libero.</p>
								</article>
								<article >
									<h3><a href="#">檢察/治療方案</a></h3>
									<p>Duis non efficitur nisi, sed justo. Maecenas sagittis semper.</p>
								</article>
								<article >
									<h3><a href="#">門診／急症室</a></h3>
									<p>Maecenas sagittis felis ac sagittis semper. Curabitur purus leo.</p>
								</article>
								<article >
									<h3><a href="searchHealthArticle.php">健康誌</a></h3>
									<p>Auctor orci eu dolor consectetur, interdum ullamcorper ante.</p>
								</article>
							</section>

						<!-- Spotlights -->
							<section class="spotlights alt">
								<article>
									<a href="#" class="image fit"><img src="images/banner4.png" alt=""></a>
									<h3><a href="#">尋醫攻略</a></h3>
									<p>Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac magna consequat.</p>
									
								</article>
								<article>
									<a href="#" class="image fit"><img src="images/banner3.png" alt=""></a>
									<h3><a href="#">中西醫治療</a></h3>
									<p>Quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis felis elementum.</p>
									
								</article>
								
							</section>

					</section>

				<!-- Sidebar -->
					<aside class="sidebar">

						<!-- Blurb -->
							<section>
								<h2>健康文章</h2>
								<p>Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper lorem ipsum.</p>
								<ul class="actions">
									<li><a href="#" class="button big">詳情</a></li>
								</ul>
							</section>

						<!-- Featured posts -->
							<section class="featured-posts">
								<h2>醫生專訪</h2>
								<article>
									<a href="#" class="image fit"><img src="images/banner2.png" alt=""></a>
									<header>
										<span class="date">September 19, 2016</span>
										<h3><a href="#">中西醫治療</a></h3>
									</header>
									<p>Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis varius.</p>
									<ul class="actions">
										<li><a href="#" class="button big">詳情</a></li>
									</ul>
								</article>
							</section>

						<!-- Posts -->
							<section>
								<h2>其他文章</h2>
								<ul class="other">
									<li>
										<a href="#">如何治療構音障礙Dysarthria？</a><br>
										<span class="date">September 15, 2016</span>
									</li>
									<li>
										<a href="#">過度活躍障礙兒童的特徵</a><br>
										<span class="date">September 15, 2016</span>
									</li>
									<li>
										<a href="#">新帕金森言語治療法</a><br>
										<span class="date">September 15, 2016</span>
									</li>
								</ul>
							</section>

					</aside>

			</div>
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
		
			<script src="assets/js/jquery.min.js"></script>
			<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.selectorr.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/login.js"></script>
			<script src="assets/js/knowledge.js"></script>
			<!-- <script src="assets/js/factionMain.js"></script> -->

	</body>
</html>