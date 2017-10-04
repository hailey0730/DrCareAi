<!DOCTYPE HTML>

<html>
<head>
	<title>DrCare.ai</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<!-- <link rel="stylesheet" href="assets/css/noBannerBGMain.css" /> -->
	<!-- <link rel="stylesheet" href="assets/css/hypothesis.css" /> -->
	<link rel="stylesheet" href="assets/css/loginWin.css" />
	<link rel="stylesheet" href="assets/css/searchHealthArticle.css" />

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
	<!-- Wrapper -->
	<div id="wrapper">
		<!-- Banner -->
		<section id="banner">
			<header class="accent1 main">
				<p style="margin-bottom: 0; color: black;">你的全方位健康知識</p>
				<h2 style="margin-bottom: 0;">搜尋健康誌</h2>
			<form id="searchForm">
				<input type="text" id="text-area">
				<span><img class="fa-microphone" src="images/mic.png" onclick="startDictation(event)"></span>
			</form>
			</header>

		</section>
		
		
		<!-- Section -->
		<section id="one" class="main">
					<ul class="tabs">
						<li>
							<h3>Lorem</h3>
							<div class="spotlight">
								<ul>
									<li>
										<a href=""> <h4>中文輸入測試</h4></a>
										<p>中風</p>
									</li>
									<li>
										<a href=""> <h4>中文輸入測試</h4></a>
										<p>Praesent dapibus, neque id cursus fauci quam erat volutpat nam dui mitin.</p>
									</li>
								</ul>
								<span class="image"><img src="images/square.jpg" alt="" /></span>
								<ul>
									<li>
										<a href=""><h4>中文輸入測試</h4></a>
										<p>頭痛</p>
									</li>
									<li>
										<a href=""><h4>中文輸入測試</h4></a>
										<p>Donec nec justo eget felis facilisis ferme Aenean dignissim pellen.</p>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<h3>Adipsicing</h3>
							<div class="spotlight">
								<ul>
									<li>
										<a href=""><h4>Erat aliquam</h4></a>
										<p>Praesent dapibus, neque id cursus fauci quam erat volutpat nam dui mitin.</p>
									</li>
									<li>
										<a href=""><h4>Neque veroeros</h4></a>
										<p>Sed adipiscing ornare risus. Morbi lorem lentesque egestas sem consequat.</p>
									</li>
								</ul>
								<span class="image"><img src="images/Rectangle33Copy.png" alt="" /></span>
								<ul>
									<li>
										<a href=""><h4>Quis portitor</h4></a>
										<p>Donec nec justo eget felis facilisis ferme Aenean dignissim pellen.</p>
									</li>
									<li>
										<a href=""><h4>Magna accumsan</h4></a>
										<p>Lorem in sem quis dui placerat ornare tra sed etiam veroeros consequat.</p>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<h3>Magna </h3>
							<div class="spotlight">
								<ul>
									<li>
										<a href=""><h4>Neque veroeros</h4></a>
										<p>Sed adipiscing ornare risus. Morbi lorem lentesque egestas sem consequat.</p>
									</li>
									<li>
										<a href=""><h4>Quis portitor</h4></a>
										<p>Donec nec justo eget felis facilisis ferme Aenean dignissim pellen.</p>
									</li>
								</ul>
								<span class="image"><img src="images/Rectangle33Copy.png" alt="" /></span>
								<ul>
									<li>
										<a href=""><h4>Magna accumsan</h4></a>
										<p>Lorem in sem quis dui placerat ornare tra sed etiam veroeros consequat.</p>
									</li>
									<li>
										<a href=""><h4>Erat aliquam</h4></a>
										<p>Praesent dapibus, neque id cursus fauci quam erat volutpat nam dui mitin.</p>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</section>

				<!-- Section -->
				<section id="three" class="main alt">
					<header>
						<h2 id="searchWord">相關 文章有：</h2>
					</header>
					<div class="inner">
						<ul class="posts">
							<div id="main1">
								<li>
									<article id="content">
										<a href="#" class="image"><img src="images/square.jpg" alt="" /></a>
										<div class="content">
											<h3>Blandit aliquam</h3>
											<p>Feugiat ultrices sed nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Lorem nulla sed gravida non magna.</p>
											<ul class="actions">
												<li><a href="#" class="button">閱讀</a></li>
											</ul>
										</div>
									</article>
								</li>
								<li>
									<article id="content">
									<a href="#" class="image"><img src="images/square.jpg" alt="" /></a>
										<div class="content">
											<h3>Amet euismod</h3>
											<p>Sed ligula vulputate et amet tristique cursus. Lorem nulla sed gravida non magna sed feugiat consequat.</p>
											<ul class="actions">
												<li><a href="#" class="button">閱讀</a></li>
											</ul>
										</div>
									</article>
								</li>
							</div>
							<div id="main2">
								<li>
									<article id="content">
										<a href="#" class="image"><img src="images/square.jpg" alt="" /></a>
										<div class="content">
											<h3>Sed amet feugiat</h3>
											<p>Phasellus ultrices sed nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Lorem nulla sed gravida non.</p>
											<ul class="actions">
												<li><a href="#" class="button">閱讀</a></li>
											</ul>
										</div>
									</article>
								</li>
								<li>
									<article id="content">
										<a href="#" class="image"><img src="images/square.jpg" alt="" /></a>
										<div class="content">
											<h3>Gravida veroeros</h3>
											<p>Phasellus ultrices sed nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Lorem nulla sed gravida non.</p>
											<ul class="actions">
												<li><a href="#" class="button">閱讀</a></li>
											</ul>
										</div>
									</article>
								</li>
							</div>
							<div id="main3">
								<li>
									<article id="content">
										<a href="#" class="image"><img src="images/square.jpg" alt="" /></a>
										<div class="content">
											<h3>Ipsum volutpat</h3>
											<p>Donec consectetuer ligula vulputate sem tristique cursus. Lorem nulla sed gravida non. Phasellus et ultricesnulla quis nibh. Quisque amet lorem lectus. Magna consectetuer ligula vulputate sem tristique cursus magna.</p>
											<ul class="actions">
												<li><a href="#" class="button">閱讀</a></li>
											</ul>
										</div>
									</article>
								</li>
								<li>
									<article id="content">
										<a href="#" class="image"><img src="images/square.jpg" alt="" /></a>
										<div class="content">
											<h3>Ipsum volutpat</h3>
											<p>Donec consectetuer ligula vulputate sem tristique cursus. Lorem nulla sed gravida non. Phasellus et ultricesnulla quis nibh. Quisque amet lorem lectus. Magna consectetuer ligula vulputate sem tristique cursus magna.</p>
											<ul class="actions">
												<li><a href="#" class="button">閱讀</a></li>
											</ul>
										</div>
									</article>
								</li>
							</div>
						</ul>
					</div>
					<p id="loading">Loading</p>
				</div>
			</section>

</div>
		<!-- Scripts -->
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
		<script src="assets/js/infiniteLoop.js"></script>
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/jquery.dropotron.min.js"></script>
		<script src="assets/js/jquery.scrollex.min.js"></script>
		<script src="assets/js/jquery.scrolly.min.js"></script>
		<script src="assets/js/jquery.selectorr.min.js"></script>
		<script src="assets/js/skel.min.js"></script>
		<script src="assets/js/util.js"></script>
		<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
		<script src="assets/js/main.js"></script>
		<!-- <script src="assets/js/artyom.window.js"></script> -->
		<script src="assets/js/login.js"></script>
		<script src="assets/js/speech.js"></script>
		<!-- hypothesis scripts -->
		<!-- <script src="assets/js/hypothesis.jquery.selectorr.min.js"></script> -->
		<!-- <script src="assets/js/hypothesis.util.js"></script> -->
		<!-- <script src="assets/js/hypothesis.main.js"></script> -->

	</body>
	</html>