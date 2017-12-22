<?php
	header("Content-Type:text/html;charset=utf-8");
	// $articleID = $_SESSION['articleContent'];
	$articleID = $_GET['ArticleID'];

	// echo $articleContent;
	$url = "http://www.chatbot.hk/DrCare.ArticleHealth.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";

	$url = $url."&ArticleID=".urlencode($articleID);
	$json = file_get_contents($url);
	$results = json_decode($json, true);

	foreach ($results as $key => $result) {
		$description = $result['Title'];
		$image = $result['ImageUrl'];
	}
?>

<!DOCTYPE HTML>

<html>
<head>
		<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-53DZWFV');</script>
		<!-- End Google Tag Manager -->

		
	<meta name="msvalidate.01" content="CD1840962D6DC4062F95CA285294B1B2" />
	<title>Dr. care 隨行醫生 - 香港最大醫療諮詢網站：中西醫生名單、急症室時間、人工智能問症、流感疫苗、及疾病與健康資訊。</title>
	<meta name="description" content="隨行醫生首創人工智能問症以及首個醫療CHATBOT聊天對話機械人。只要輸入喉嚨痛、頭痛、咳等病徵便能查詢到相關的疾病，例如提供自閉症、糖尿病、肺炎、乳癌、子宮頸癌等疾病的詳細解釋;還提供全港醫生資料，如中醫、西醫、婦產科、精神科、骨科、眼科、牙科、皮膚科等專科醫生資料;提供醫療券、流感疫苗、hiv身體檢查、急症室時間等醫療訊息。">
	<meta name="keywords" content="醫生網,醫生,醫院,中醫,西醫,診所,急症室 ,整形外科,婦產科,醫療券,流感疫苗,流感疫苗副作用,頭痛,咳,喉嚨痛,抑鬱症,焦慮症,糖尿病,肺炎,中風,子宮頸癌,自閉症,大腸癌,乳癌">
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:url"           content="http://www.drcare.ai/content.php?ArticleID=<?php echo $articleID; ?>" />
	  <meta property="og:type"          content="website" />
	  <meta property="og:title"         content="DrCare.ai" />
	  <meta property="og:description"   content=" <?php echo $description; ?> " />
	  <meta property="og:image"         content="http://www.drcare.ai/images/健康認文章圖片-20171012T090814Z-001/健康認文章圖片/<?php echo $image; ?>" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<link rel="stylesheet" href="assets/css/loginWin.css" />
	<link rel="stylesheet" href="assets/css/noBannerBGMain.css" />
	<link rel="stylesheet" href="assets/css/headerFooter.css" />
	<link rel="stylesheet" href="assets/css/hypothesis.css" />
	<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
</head>
<body id="top">
	<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-53DZWFV"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<!-- End Google Tag Manager (noscript) -->
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
					<div class="fb-page"   data-href="https://www.facebook.com/DrCareAi/"  data-width="500" data-hide-cover="false"  data-show-facepile="true"></div>
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