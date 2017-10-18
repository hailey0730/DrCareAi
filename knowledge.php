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
				<li><a href="clinicBotPage.php">隨行醫生</a></li>
				<li>
					<a href="#" class="icon fa-angle-down">醫生</a>
					<ul>
						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫">西醫</a></li>
						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>
						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=牙科">牙醫</a></li>
						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=物理治療">物理治療</a></li>
						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=脊骨神經科">脊醫</a></li>
						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療">專業治療</a></li>
						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=心理學">心理咨詢</a></li>
						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療&subcategory=營養學">營養咨詢</a></li>
						
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
					<!-- <?php 
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
				    ?> -->
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
								<p>你想知道不同疾病的成因與預防方法、以及如何在日常中保持健康?隨行醫生會為你提供最實用的醫療資訊。</p>
							</section>

						<!-- Features -->
							<section class="features alt">
								<article >
									<h3><a href="knowledgeList.php"> 疾病知識</a></h3>
									<p>你可以根據疾病的不同門類在疾病知識中找到不同疾病的成因，預防及治療方式。</p>
								</article>
								<article >
									<h3><a href="searchHealthArticle.php">健康誌</a></h3>
									<p>健康誌以疾病專題、健康飲食和身心健康三大方向為你剖析不同疾病的成因、預防方法和最新研究，推薦一些可以促進治療的食譜餐單，以及一些能放鬆精神的活動與方法。</p>
								</article>
								<article >
									<h3><a href="hospitalTime.php">急症室時間</a></h3>
									<p>隨行醫生根據香港地圖為你分類和顯示全港公立醫院的急症室輪侯時間，助你快人一步知道不同地區醫院的最新急症室輪侯時間與全港公立醫院的地圖位置。</p>
								</article>
								<article >
									<h3></h3>
									<p></p>
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
			<script src="assets/js/footer.js"></script>
			<script src="assets/js/knowledge.js"></script>
			<!-- <script src="assets/js/factionMain.js"></script> -->

	</body>
</html>