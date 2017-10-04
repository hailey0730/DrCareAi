<!DOCTYPE HTML>
<html>
<head>
	<title>DrCare.ai</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<link rel="stylesheet" href="assets/css/loginWin.css" />
	<link rel="stylesheet" href="assets/css/main.css" />
	<link rel="stylesheet" href="assets/css/hospital.css" />
	<link rel="stylesheet" href="assets/css/style.css" />
	<link rel="stylesheet" href="assets/css/tooltips.css" />
	<!-- <link rel="stylesheet" href="assets/css/jquery.mCustomScrollbar.css" /> -->
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
	<!-- Banner -->
	<section id="banner">
		<div class="inner">
			<h1>急症室等候時間</h1>
		</div>
	</section>

	<!-- One -->
	<section id="one" class="wrapper timetop">
		<div class="inner">
			<h3>急症室等候時間參考</h3>
			<p class="black">急症室會優先診治被分流為危殆、危急和緊急的病人。　
				最長等候時間顯示上限為8小時，表示急症室正處理理⼤大量量等候已久的病⼈人。病況輕微的病人可考慮使
				用私營醫療服務</p>
				<p class="rightBottom black">最後更新時間 2017年年9月15⽇日 上午11時30分</p>
			</div>

		</section>

		<!-- Two -->
		<section id="Timetwo" class="wrapper style1 special">
			<h2>港島區</h2>

			<div class="inner">
				<div class="stats">
					<article>
						<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>東區尤德夫人那打素醫院</h3>
						<ul class="actions">
							<li><a href="#one" class="button round">附近診所</a></li>
						</ul>
					</article>
					<article>
						<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>瑪麗醫院</h3><ul class="actions">
						<li><a href="#one" class="button round">附近診所</a></li>
					</ul>
				</article>
				<article>
					<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>律律敦治醫院</h3><ul class="actions">
					<li><a href="#one" class="button round">附近診所</a></li>
				</ul>
			</article>
		</div>
	</div>
</section>

<!-- Three -->
<section id="Timethree" class="wrapper style1 special">
	<h2>九龍區</h2>

	<div class="inner">
		<div class="stats">
			<article>
				<h3 class="estimate">等候 大約 </h3><h3><span class="time">0</span>小時</h3> <h3>明愛醫院</h3><ul class="actions">
				<li><a href="#one" class="button round">附近診所</a></li>
			</ul>
		</article>
		<article>
			<h3 class="estimate">等候 大約 </h3><h3><span class="time">0</span>小時</h3> <h3>廣華醫院</h3><ul class="actions">
			<li><a href="#one" class="button round">附近診所</a></li>
		</ul>
	</article>
	<article>
		<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>伊利利沙伯醫院</h3><ul class="actions">
		<li><a href="#one" class="button round">附近診所</a></li>
	</ul>
</article>
<article>
	<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>基督教聯聯合醫院</h3><ul class="actions">
	<li><a href="#one" class="button round">附近診所</a></li>
</ul>
</article>
</div>
</div>
</section>

<!-- Four -->
<section id="Timefour" class="wrapper style1 special">
	<h2>新界區</h2>

	<div class="inner">
		<div class="stats">
			<article>
				<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>雅麗⽒氏何妙齡那打素醫院</h3><ul class="actions">
				<li><a href="#one" class="button round">附近診所</a></li>
			</ul>
		</article>
		<article>
			<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>北區醫院</h3><ul class="actions">
			<li><a href="#one" class="button round">附近診所</a></li>
		</ul>
	</article>
	<article>
		<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>北大嶼⼭山醫院</h3><ul class="actions">
		<li><a href="#one" class="button round">附近診所</a></li>
	</ul>
</article>
<article>
	<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>博愛醫院</h3><ul class="actions">
	<li><a href="#one" class="button round">附近診所</a></li>
</ul>
</article>
</div>
</div>
</section>

<!-- Five -->
<section id="Timefive" class="wrapper style1 special">
	<div class="inner">
		<div class="stats">
			<article>
				<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>威爾斯親王醫院</h3><ul class="actions">
				<li><a href="#one" class="button round">附近診所</a></li>
			</ul>
		</article>
		<article>
			<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>瑪嘉烈醫院</h3><ul class="actions">
			<li><a href="#one" class="button round">附近診所</a></li>
		</ul>
	</article>
	<article>
		<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>長洲醫院</h3><ul class="actions">
		<li><a href="#one" class="button round">附近診所</a></li>
	</ul>
</article>
<article>
	<h3 class="estimate">等候 大約</h3><h3><span class="time">0</span>小時</h3> <h3>天⽔水圍醫院(急症服務時間 早上8時至下午4時)</h3><ul class="actions">
	<li><a href="#one" class="button round">附近診所</a></li>
</ul>
</article>
</div>
</div>
</section>

<!-- Six -->
<section id="Timesix" class="wrapper style1 special">
	<div class="inner">
		<div class="stats">
			<article>
				<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>將軍澳醫院</h3><ul class="actions">
				<li><a href="#one" class="button round">附近診所</a></li>
			</ul>
		</article>
		<article>
			<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>屯⾨門醫院</h3><ul class="actions">
			<li><a href="#one" class="button round">附近診所</a></li>
		</ul>
	</article>
	<article>
		<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>仁濟醫院</h3><ul class="actions">
		<li><a href="#one" class="button round">附近診所</a></li>
	</ul>
</article>
<!-- <article>
	<h3 class="estimate">等候 超過</h3><h3><span class="time">0</span>小時</h3> <h3>天⽔水圍醫院(急症服務時間 早上8時⾄至下午4時)</h3><ul class="actions">
	<li><a href="#one" class="button round">附近診所</a></li>
</ul>
</article> -->
</div>
</div>
</section>

<!-- Seven -->
<section id="Timeseven" class="wrapper">
	<div class="inner">
		<div class="split">
		<div class="left">
				<div>
					<h3 id="urgent">急症室資料</h3>
					<span id="urgentWait">等候</span>
				</div>
			<div class="posts">
			
				 <div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>東區尤德夫人那打素醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>


				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>瑪麗醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>

				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>律敦治醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div> 
				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>明愛醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>


				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>廣華醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>

				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>伊利利沙伯醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>
				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>基督教聯合醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>


				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>雅麗氏何妙齡那打素醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>

				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>北區醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>
				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>北大嶼山醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>


				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>博愛醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>

				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>威爾斯親王醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>
				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>瑪嘉烈醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>


				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>長洲醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>

				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>天水圍醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>
				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>將軍澳醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>


				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>屯門醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>

				<div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a class="aDiv" href="">
						<div class="hospital">
							<h3>仁濟醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div>
				<!-- <div class="hospitalDiv">
					<div class="bulletsDiv">
						<p>'' </p>
					</div>
					<a href="">
						<div class="hospital">
							<h3>威爾斯親王醫院</h3>
							<p>地址: 將軍澳坑⼝口寶寧⾥里里 2 號</p>
							<p>電話: 2208 0111</p>
						</div>
						<div class="timeDiv">
						<p class="mapEstimate">超過</p>
							<h3><span class="time bottom">0</span>小時</h3>
						</div>
					</a>
				</div> -->
				</div>
				</div>

				<!-- <div class="map"> -->
				<img class="right"  src="images/map-hongkong.png" alt="Planets" usemap="#planetmap">
				<map name="planetmap">
					
					<!-- area of map for highlight -->
					<area data-key="area1" shape="poly" coords="414,264,516,263,537,249,539,300,550,302,558,357,513,326,515,340,483,325,457,350,436,347,438,326,418,320,408,315" href="#", onclick="showTime('select_KL.png', '九龍');return false;">
					<area data-key="area2" shape="poly" coords="420,505,382,513,389,488,361,479,364,466,342,471,337,502,360,495,358,540,370,553,387,556,404,546,420,478,356,407,398,387,432,399,469,394,481,382,547,397,572,426,577,506,551,512,518,453,521,529,490,503,467,459,447,474" href="#", onclick="showTime('select_HKisland.png','港島');return false;">
					<area data-key="area3" shape="poly" coords="134,266,88,199,437,6,683,73,762,255,635,381,563,353,541,251,411,267,411,316,350,310,251,268,175,242,282,285,136,350,140,319,73,330,60,382,19,401,4,435,8,479,70,449,114,469,120,440,185,426,198,459,245,441,219,422,245,390,247,338,282,341,298,334,297,295" href="#", onclick="showTime('NT_selected.png','新界');return false;">
				</map>
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
<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!-- <script src="assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript">
	(function($){
        $(window).on("load",function(){
            $(".posts").mCustomScrollbar();
        });
    })(jQuery);
</script> -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.dropotron.min.js"></script>
<script src="assets/js/jquery.scrollex.min.js"></script>
<script src="assets/js/jquery.scrolly.min.js"></script>
<script src="assets/js/jquery.selectorr.min.js"></script>
<script src="assets/js/skel.min.js"></script>
<script src="assets/js/util.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/login.js"></script>
<script src="assets/js/hospitalTimeMobile.js"></script>
<script src="assets/js/jquery.imagemapster.js"></script>
<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
		
	</body>
	</html>