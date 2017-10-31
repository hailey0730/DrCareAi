<?php
	header("Content-Type:text/html;charset=utf-8");
	$articleID = $_SESSION['articleContent'];
	echo $articleContent;
	$url = "http://www.chatbot.hk/DrCare.ArticleHealth.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";

	$url = $url."&ArticleID=".urlencode($articleID);
	$json = file_get_contents($url);
	$results = json_decode($json, true);
	$description = json_encode($results['Title']);

?>

<!DOCTYPE HTML>

<html>
<head>
	<title>DrCare.ai</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:url"           content="http://www.drcare.ai/content.php?ArticleID=<?php echo $articleID; ?>" />
	  <meta property="og:type"          content="website" />
	  <meta property="og:title"         content="DrCare.ai" />
	  <meta property="og:description"   content=" <?php echo $description; ?> " />
	  <meta property="og:image"         content="http://www.drcare.ai/images/健康認文章圖片-20171012T090814Z-001/健康認文章圖片/" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<link rel="stylesheet" href="assets/css/loginWin.css" />
	<link rel="stylesheet" href="assets/css/noBannerBGMain.css" />
	<link rel="stylesheet" href="assets/css/headerFooter.css" />
	<link rel="stylesheet" href="assets/css/hypothesis.css" />
	<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
</head>
<body id="top">
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10';
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>

	<!-- Header -->
	<header id="header" class="alt">

		<!-- Logo -->
		<div class="logo">
			<a href="index.php">Dr Care.ai </a><span> Clinicbot</span>
		</div>

		<!-- Nav -->
		
	</header>
<div id="pageContent">
	<!-- Main -->
			<section id="main" class="wrapper">
				<div class="inner">
					<header id="title">
						<h1></h1>
						<a href=""></a>
						
					</header>
					<a class="image topImg"><div><img id="titleImg" src="" alt="" /></div></a>
					<div id="content">
					<p></p>
						</div>
				</div>
			</section>

			<section class="wrapper" style="margin-bottom: 2em;">
				<div class="inner">
					<h3>相關專科</h3>
					<a class="relatedoc" href="" style="color: #5dc9dd; font-size: 1.5em;">醫生</a>
				</div>
			</section>

			<section id="moreEssay" class="wrapper">
				<div class="inner">
			<div class="content">

			<h3 style="margin:0;">相關文章</h3>
			</div>
			
				<div class="posts">
					<div class="articleDiv">
						<article>
							<!-- <div class="content">
							<a href="#" class="image main">
							<div>
							<img class="contentImage" src="images/Rectangle33.png" alt="" data-position="center" />
							</div>
								<p class="imageTitle">如何診斷過度活躍障礙和自閉症</p>
								</a>
							</div> -->
						</article>
					</div>
					<div class="articleDiv">
						<article>
							
						</article>
					</div>
					<div class="articleDiv">
						<article>
							
						</article>
					</div>
				</div>
			</div>
		</section>

</div>

	<!-- Footer -->
		

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
		<script src="assets/js/footer.js"></script>
<script src="assets/js/footerFunction.js"></script>
<script src="assets/js/sendEmailFunction.js"></script>
<script src="assets/js/onWindowResizeFunction.js"></script>
		<script src="assets/js/login.js"></script>
		<script src="assets/js/content.js"></script>



	</body>
	</html>