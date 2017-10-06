<!DOCTYPE HTML>

<html>
	<head>
		<title>DrCare.ai</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/loginWin.css" />
		<link rel="stylesheet" href="assets/css/headerFooter.css" />
		<link rel="stylesheet" href="assets/css/noBannerBGMain.css" />
		<link rel="stylesheet" href="assets/css/hypothesis.css" />
		<link rel="stylesheet" href="assets/css/knowledgeList.css" />
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
			<section id="main" class="wrapper">
				<div class="inner">
			<h1 id="test"><a href="#"> 知識分類</a> > 疾病</h1>
			</div>
			</section>

			<!-- Section -->
					<section id="one" class="main">
					<header class="accent1">
					
					</header>
					<!-- Wrapper -->
					<div id="wrapper">
						<div class="inner-content">
						<div class="split">
						<section>
							<ul class="posts">
								<!-- <div>
								<li>
									<article>
										<div class="content">
											<h3>循環系統疾病 </h3>
											<ul class="">
												<li><a href="#">過度活躍障礙</a></li>
												<li><a href="#">過度活躍障礙</a></li>
											</ul>
										</div>
									</article>
									</li>
									<li>
									<article>
										<div class="content">
											<h3>呼吸系統疾病</h3>
											<ul class="">
												<li><a href="#">過度活躍障礙</a></li>
												<li><a href="#">過度活躍障礙</a></li>
												<li><a href="#">過度活躍障礙</a></li>
											</ul>
										</div>
									</article>
									</li>
									<li>
									<article>
										<div class="content">
											<h3>消化系統</h3>
											<ul class="">
												<li><a href="#">過度活躍障礙</a></li>
												<li><a href="#">過度活躍障礙</a></li>
											</ul>
										</div>
									</article>
									</li>
									</div>
									<div>
									<li>
									<article>
										<div class="content">
											<h3>消化系統</h3>
											<ul class="">
												<li><a href="#">過度活躍障礙</a></li>
												<li><a href="#">過度活躍障礙</a></li>
											</ul>
										</div>
									</article>
									</li>
									<li>
									<article>
										<div class="content">
											<h3>泌尿及生殖系統 </h3>
											<ul class="">
												<li><a href="#">過度活躍障礙</a></li>
												<li><a href="#">過度活躍障礙</a></li>
											</ul>
										</div>
									</article>
									</li>
									<li>
									<article>
										<div class="content">
											<h3>泌尿及生殖系統 </h3>
											<ul class="">
												<li><a href="#">過度活躍障礙</a></li>
												<li><a href="#">過度活躍障礙</a></li>
											</ul>
										</div>
									</article>
									</li>
								</div>
								<div>
									<li>
									<article>
										<div class="content">
											<h3>消化系統</h3>
											<ul class="">
												<li><a href="#">過度活躍障礙</a></li>
												<li><a href="#">過度活躍障礙</a></li>
											</ul>
										</div>
									</article>
									</li>
									<li>
									<article>
										<div class="content">
											<h3>泌尿及生殖系統 </h3>
											<ul class="">
												<li><a href="#">過度活躍障礙</a></li>
												<li><a href="#">過度活躍障礙</a></li>
											</ul>
										</div>
									</article>
									</li>
									<li>
									<article>
										<div class="content">
											<h3>泌尿及生殖系統 </h3>
											<ul class="">
												<li><a href="#">過度活躍障礙</a></li>
												<li><a href="#">過度活躍障礙</a></li>
											</ul>
										</div>
									</article>
									</li>
								</div> -->
								</ul>
								</section>
								<section>
								<div>
										<div class="content" >
										<img class="body" id="body" src="images/BodyExport/Body.png" width="266" height="690" alt="Planets" usemap="#planetmap">
										</div>
										<map name="planetmap">
										  <area data-key="head" shape="rect" coords="90,19,171,114"  href="#" onmouseover="highlight('Body_head.png');return false;" onmouseout="noHighlight();return false;" onclick="showRelevantDisease('頭','Body_head.png');return false;"> 
										  <area data-key="neck" shape="rect" coords="106,106,160,129" href="#" onmouseover="highlight('Bodybuild_neck.png');return false;" onmouseout="noHighlight();return false;" onclick="showRelevantDisease('頸','Bodybuild_neck.png');return false;">
										  <area data-key="chest" shape="poly" coords="98,134,157,134,186,143,189,211,175,249,134,211,87,246,75,213,74,146" href="#" onmouseover="highlight('Bodybuild_chest.png');return false;" onmouseout="noHighlight();return false;" onclick="showRelevantDisease('胸','Bodybuild_chest.png');return false;">
										  <area data-key="arm" shape="poly" coords="194,186,188,143,224,166,251,393,247,401,244,397" href="#" onmouseover="highlight('Bodybuild_arm.png');return false;" onmouseout="noHighlight();return false;" onclick="showRelevantDisease('手','Bodybuild_arm.png');return false;">
										  <area data-key="arm" shape="poly" coords="73,181,85,141,44,161,7,399,16,402" href="#" onmouseover="highlight('Bodybuild_arm.png');return false;" onmouseout="noHighlight();return false;" onclick="showRelevantDisease('手','Bodybuild_arm.png');return false;">
										  <area data-key="abdomen" shape="poly" coords="88,242,131,225,174,243,171,265,185,309,145,332,113,332,72,311,93,263" href="#" onmouseover="highlight('Bodybuild_Abdomen.png');return false;" onmouseout="noHighlight();return false;" onclick="showRelevantDisease('腹','Bodybuild_Abdomen.png');return false;">
										  <area data-key="pelvis" shape="poly" coords="74,317,114,334,150,334,183,311,191,336,138,366,122,365,69,343" href="#" onmouseover="highlight('Bodybuild_Pelvis.png');return false;" onmouseout="noHighlight();return false;" onclick="showRelevantDisease('盆骨,下體','Bodybuild_Pelvis.png');return false;">
										  <area data-key="leg" shape="rect" coords="66,359,128,672" href="#" onmouseover="highlight('Body_leg.png');return false;" onmouseout="noHighlight();return false;" onclick="showRelevantDisease('腿','Body_leg.png');return false;">
										  <area data-key="leg" shape="rect" coords="136,361,198,673" href="#" onmouseover="highlight('Body_leg.png');return false;" onmouseout="noHighlight();return false;" onclick="showRelevantDisease('腿','Body_leg.png');return false;">
										  
										</map>

								<p id="belowBody">點擊選擇身體部分</p>
								</div>
								</section>
								</div>
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
			<script src="assets/js/knowledgeList.js"></script>
			<script src="assets/js/jquery.imagemapster.js"></script>


	</body>
</html>