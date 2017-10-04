<!DOCTYPE HTML>

<html>
<head>
	<title>DrCare.ai</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<link rel="stylesheet" href="assets/css/loginWin.css" />
	<link rel="stylesheet" href="assets/css/noBannerBGMain.css" />
	<link rel="stylesheet" href="assets/css/hypothesis.css" />
	<link rel="stylesheet" href="assets/css/sickness.css" />
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
					<!-- <li><a href="login.html">登入</a></li> -->
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
	<!-- Main -->
			<section id="main" class="wrapper">
				<div class="inner">
					<header id="title">
						<h1>注意力缺陷過度活躍障礙(ADHD)和自閉症的分別</h1>
						<a href=""><p>過度活躍 | 自閉症</p></a>
					</header>
					<a class="image main"><div><img id="titleImg" src="images/pic07.png" alt="" /></div></a>
					<div id="content">
					<p>注意⼒力力缺陷過度活躍障礙（ ADHD）和⾃自閉症可以看起來來很相似。  它們都會令兒童無法集中。他們可以是非常衝動活
						躍，亦很難停下來來與他們溝通。  因此可能會在學校，以及和⼈人與⼈人之間的關係產⽣生出問題。
						雖然他們有許多相同的症狀狀，但兩兩者是不同的病症。  ⾃自閉症障礙是⼀一系列列相關的發育障礙，並因⽽而影響語⾔言技能、⽇日
						常⾏行行為、社會互動和學習能⼒力力。  ADHD則是⼤大腦⽣生長發育的問題。
						早期的正確診斷有助於兒童得到正確的治療，不要錯過重要的發展和學習時機。 即使有這些病症亦可以有成功幸福的
						⽣生活。</p>
						</div>
				</div>
			</section>

			<section id="moreEssay" class="main">
			<div class="content">
			<h3 style="margin:0;">相關文章</h3>
			</div>
			
				<div class="posts">
					<div class="articleDiv">
						<article>
							<div class="content">
							<a href="#" class="image main">
							<div>
							<img class="contentImage" src="images/Rectangle33.png" alt="" data-position="center" />
							</div>
								<p class="imageTitle">如何診斷過度活躍障礙和自閉症</p>
								</a>
							</div>
						</article>
					</div>
					<div class="articleDiv">
						<article>
							<div class="content">
							<a href="#" class="image main">
							<div>
								<img class="contentImage" src="images/Rectangle33Copy.png" alt="" data-position="center" />
								</div>
								<p class="imageTitle">過度活躍障礙兒童的特徵</p>
								</a>
							</div>
						</article>
					</div>
					<div class="articleDiv">
						<article>
							<div class="content">
							<a href="#" class="image main">
							<div>
								<img class="contentImage" src="images/Rectangle33Copy 2.png" alt="" data-position="center" /></div>
								<p class="imageTitle">自閉症兒童的特徵</p>
								</a>
							</div>
						</article>
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
		<script src="assets/js/content.js"></script>



	</body>
	</html>