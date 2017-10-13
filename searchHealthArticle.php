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
	<link rel="stylesheet" href="assets/css/headerFooter.css" />

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
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=牙科">牙醫</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=物理治療">物理治療</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=脊骨神經科">脊醫</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=專業治療">專業治療</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=心理學">心理咨詢</a></li>
						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=專業治療&subcategory=營養學">營養咨詢</a></li>
						
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
	<div id="wrapper">
		<!-- Banner -->
		<section id="banner">
			<header class="accent1 main">
				<p style="margin-bottom: 0; color: black;">你的全方位健康知識</p>
				<h2 style="margin-bottom: 0;">搜尋健康誌</h2>
			<form id="searchForm">
				<input type="text" id="text-area">
				<span class="fa fa-search"></span>
				<!-- <span><img class="fa-microphone" src="images/mic.png" onclick="startDictation(event)"></span> -->
			</form>
			</header>

		</section>
		
		
		<!-- Section -->
		<section id="one" class="main">
					<ul class="tabs">
						<li>
							<h3>疾病專題</h3>
							<div class="spotlight">
								<ul>
									<li>
										<a class="category"> <h4>醫學新發現</h4></a>
										<p>醫療科技日新月異﹐一些以前我們不了解的疾病憑著研究人員的努力。我們終於可以揭開它的面紗。</p>
									</li>
									<li>
										<a class="category"> <h4>疾病病理</h4></a>
										<p>現代人因為生活壓力大而患上許多不同種類的都市疾病。患者在接受治療前如果能知道這些都市疾病的成因的話，對治療非常有幫助。</p>
									</li>
								</ul>
								<span class="image"><img src="images/medical-563427_960_720.png" alt="" /></span>
								<ul>
									<li>
										<a class="category"><h4>治療新技術</h4></a>
										<p>許多疾病都被判定為無法治療，但是隨著技術的發展，一些新的醫療方式和治療方法都推陳出新。以前一些無法治療的疾病，現在可能都有解決方法。</p>
									</li>
									<li>
										<a class="category"><h4>預防疾病</h4></a>
										<p>預防勝於治療，生活上一些無形的不良習慣都會在隨時隨地影響著你的健康。培養一些正確的預防習慣能令你遠離疾病。</p>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<h3>健康飲食</h3>
							<div class="spotlight">
								<ul>
									<li>
										<a class="category"><h4>醫學膳食</h4></a>
										<p>很多水果和蔬菜除了有特別的營養價值之外，還對治療某一些疾病特別有幫助。不同的疾病可以配搭進食不同的蔬果。</p>
									</li>
									<li>
										<a class="category"><h4>營養食譜</h4></a>
										<p>想要保持身體健康，只有運動是不足夠的。配合日常生活的一些健康食譜能讓事情事半功倍。</p>
									</li>
								</ul>
								<span class="image"><img src="images/cherries-422468_960_720.png" alt="" /></span>
								<ul>
									<li>
										<a class="category"><h4>啱飲湯水</h4></a>
										<p>不少的健康湯水在中醫的角度中是極具營養價值。湯水不但是母親的心意，更能在日常中助你保持身體健康。</p>
									</li>
									<li>
										<a class="category"><h4>保健養生</h4></a>
										<p>想要長壽就要懂得養生。日常很多養成的習慣和生活方式都是長壽的秘密。</p>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<h3>身心健康 </h3>
							<div class="spotlight">
								<ul>
									<li>
										<a class="category"><h4>生活小貼士</h4></a>
										<p>很多的慢性疾病除了選擇進行治療外，一些日常的生活習慣和方式都能夠有助擺脫這些慢性疾病的困擾。</p>
									</li>
									<li>
										<a class="category"><h4>精神健康</h4></a>
										<p>精神疾病經常困擾都市人。超時工作、沉重工作壓力令不少人的精神都過度緊張。有什麼精神疾病是我們可以多加留意的呢?</p>
									</li>
								</ul>
								<span class="image"><img src="images/running-573762_960_720.png" alt="" /></span>
								<ul>
									<li>
										<a class="category"><h4>日常鍛鍊</h4></a>
										<p>運動能令我們的身體保持活力，比很多的口服藥品更容易令我們有一個健康的體魄。</p>
									</li>
									<li>
										<a class="category"><h4>健康活動</h4></a>
										<p>香港有不少有關於跑步或爬山等等的健康活動都會在周末舉辦。你也可以帶同你的家人一同參與。</p>
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
								<!-- <li>
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
								</li> -->
							</div>
							<div id="main2">
								<!-- <li>
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
								</li> -->
							</div>
							<div id="main3">
								<!-- <li>
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
								</li> -->
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
		<script src="assets/js/navBar.js"></script>
		<script src="assets/js/speech.js"></script>
		<!-- hypothesis scripts -->
		<!-- <script src="assets/js/hypothesis.jquery.selectorr.min.js"></script> -->
		<!-- <script src="assets/js/hypothesis.util.js"></script> -->
		<!-- <script src="assets/js/hypothesis.main.js"></script> -->

	</body>
	</html>