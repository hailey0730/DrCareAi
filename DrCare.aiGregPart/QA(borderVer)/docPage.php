<?php
    session_start();
?>
<!DOCTYPE html>
<html>

<head>
    <title>DrCare.ai</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyA9HW61jlVn7qzBzYbhOh-pgOeS7-g9WJI"></script>
    <script src="js/jquery/jquery-1.12.4.min.js"></script>
    <script src="js/general.js"></script>
    <script src="js/docPage.js"></script>
    <script src="js/googleMap.js"></script>
    <script src="js/filterModule.js"></script>
    <script src="js/speech.js"></script>
    <script src="../assets/js/footer.js"></script>
    <script src="../assets/js/footerFunction.js"></script>
    <script src="../assets/js/main.js"></script>
    <script src="../assets/js/sendEmailFunction.js"></script>
    <!-- <script src="../assets/js/main.js"></script> -->

    <!-- <link rel="stylesheet" type="text/css" href="../assets/css/headerFooter.css" /> -->
    <!-- unable to use the main one -->
    <link rel="stylesheet" type="text/css" href="css/header_footer.css" />
    <link rel="stylesheet" type="text/css" href="css/general.css" />
    <link rel="stylesheet" type="text/css" href="css/docPage.css" />
    <link rel="stylesheet" type="text/css" href="css/filterBar.css" />
    <link rel="stylesheet" type="text/css" href="css/QA.css" />
    <link rel="stylesheet" href="templates/px-hypothesis-html/blue/assets/css/main.css" />
    <link rel="stylesheet" href="templates/px-hypothesis-html/blue/assets/css/custom.css" />
	<link rel="stylesheet" href="templates/html5up-future-imperfect/assets/css/main.css" />
	<link rel="stylesheet" href="templates/html5up-future-imperfect/assets/css/custom.css" />
</head>


<body>
<header id="header" >
<!-- navbar -->
<!-- <div id="navbarTop"> -->
	<!-- Logo -->
		<div class="logo">
			<a href="../index.php">Dr Care.ai </a><span> Clinicbot</span>
		</div>

    <!-- <div id="navBtns"> -->
    	<!-- <nav id="nav">
    	<ul>
				<li><a href="../clinicBotPage.php">隨行醫生</a></li>
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
						<li><a href="../knowledge.php">健康總覽</a></li>
						<li><a href="../knowledgeList.php">疾病知識</a></li>
						<li><a href="../hospitalTime.php">急症室時間</a></li>
						<li><a href="../searchHealthArticle.php">健康誌</a></li>
						
					</ul>
				</li> -->
				<!-- <li><a href="http://test.drcare.ai/doctor/healthArticle.php">健康報導</a></li> -->
    	<!-- <div id="login"> -->
					<!-- <li><a href="login.html">登入</a></li> -->
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
				<!-- </div>
    </ul>
</nav> -->
    <!-- </div> -->

<!-- </div> -->
</header>


<div class="mainContainer">
	<!-- google map -->
	<div id="googleMap"></div>
	<!-- btn row below map -->
	<button class="showSearch"><p>搜索</p><img src="img/dropDown.png"></button>
	<!-- Search Row -->
	<div class="searchRow">
		<!-- search by type -->
		<select class="filter" id="specialist">
			<option value="" selected="">全部種類</option>
		</select>

		<!-- search by type -->
		<select class="filter" id="area">
			<option value="" selected="">全部地區</option>
			<option>東區</option>
		</select>

		<!-- search by type -->
		<select class="filter" id="type">
			<option value="" selected="">全部專科</option>
		</select>

		<!-- search result -->
		<div class="searchAuto" style="display: none;">
			
		</div>
		<!-- where the tags are -->
		<!-- <div class="tagsContainer" style="display: none;">
		</div> -->

		<!-- search by tags -->
		<input id="searchInput" type="text" placeholder="請點擊按鈕講話"></input>
		<!-- voice func -->
		<img src="img/mic.png" class="voiceIcon" onclick="startDictation(event)">
		<img src="img/search.png" class="searchIcon" onclick="passToURL()">

	</div>
	<!-- doc info window -->
	<div class="infoContainer">
		<!-- greeting text -->
		<p id="viewinfo">
			<span class="commonText">你正在看有關</span>
			<span id="viewname"></span> 
			<span class="commonText">醫生的簡介。他是</span>
			<span id="viewtype"></span>
			<span class="commonText">醫生，診所位置位於</span>
			<span id="address"></span>
		</p>
		<!-- tags here -->
		<!-- <div id="tagsContainer">
		</div> -->
		<!-- left div holder -->
		<div class="infoDiv">
			<!-- basic information of doc -->
			<div class="basicInfo">
				<div class="basicInfoText">
					<p>
						<span id="docName"></span>
						<span>醫生</span>
						<span id="docType"></span>
					</p>
					<p id="docName_en">Dr. <span></span></p>
					<p id="docGender">性別：<span></span></p>

					<div class="btns">
						<div class="clinicbotDiv">
							<img src="img/messager.png">
							<button type="button" id="useClinicbot">按此聯絡</button>
							<p>Chatbot By Clinicbot</p>
						</div>
						
						<button type="button" id="favor" 
							<?php 
								if(empty($_SESSION['user_id'])){
									echo 'onclick="createLoginWindow()"';
								} 
							?>
						><img src="img/doctor_favor.png"><span>我的醫生</span></button>
					</div>
					
				</div>

				<!-- contact information about doc -->
				<div class="contactInfo">
					<div class="contactInfoText">
						<p>聯絡資料：</p>
						<p id="docTel"></p>
						<p id="docEmail"></p>
						<p id="docAddress"></p>
						<p id="docLanguage"></p>
					</div>
				</div>
			</div>
			


			<div class="basicInfoDivRight">
				<div id=wrapper>
					<section id="one" class="main">
						<ul class="tabs">
							<li>
								<h3>醫生介紹</h3>
								<div class="spotlight">
									<img src="/" id="photo">
									<div id="certifyInfo">
										<p>專業資格：</p>
									</div>
								</div>
							</li>
							<li>
								<h3>診症時間</h3>
								<div class="spotlight">
									<div id="timeInfo">
										<p>診症時間：</p>
									</div>
								</div>
							</li>
							<li>
								<h3>其他資料</h3>
								<div class="spotlight">
									<div id="otherInfo">
									</div>
								</div>
							</li>
						</ul>
					</section>
				</div>

				<!-- <p class="modifyInfo"><a href="">按此</a> 提供/修正 <span></span>醫生 資料</p> -->
			<!-- end of the right part -->
			</div>
		<!-- end of the info part -->
		</div>

		<!-- article content -->
		<div class="articles">
			<div id=wrapper>
				<section id="one" class="main">
					<ul class="tabs">
						<li>
							<h3>醫生相關文章</h3>
							<div class="spotlight">
								<div class="docArticles">
								</div>
							</div>		
						</li>
						<li>
							<h3>醫生回答<i class="fa fa-commenting"></i></h3>

							<div class="spotlight">
								<div class="docAnswers">
									<div class="total">
										<p class="grey"> XXX醫生共有<p class="blue">13</p>問答</p>
									</div>
									<div class="QAContent">
										<!-- <div class="questionDiv">
											<div class="profilePic">
												<img src="img/Group 3.png">
											</div>	
											<div class="from">
												<p style="display:inline">MayMay問: </p>
												<span class="date grey">2017-11-13</span>
											</div>
											<div class="question">
												<div class="title">
													<p>肌肉抽搐</p>
												</div>
												<div class="content">
													<p>你好 ! 因腦創傷後，全⾝身肌⾁肉會間歇式的抽搐。請問這是什什麼原因? 如長期抽搐最壊的情況會如何?謝謝 !........?</p>
												</div>
											</div>
										</div> -->	<!-- end of questionDiv-->

										<!-- <div class="answerDiv">
											<div class="profilePic">
												<img src="img/Dr icon_male.png">
											</div>
											<div class="from">
												<p class="blue" style="display:inline">尹鎮偉醫生 回覆:  </p>
												<span class="date grey">2017-11-13</span>
											</div>
											<div class="answer">
												<div class="content">
													<p>MayMay 你好，腦創傷後肌⾁肉抽搐有多種原因。這情況需要進⼀一步檢查看是否腦癇症。診斷需要結合病歷和臨臨床檢查。</p>
												</div>
											</div>
										</div> -->	<!-- end of answerDiv-->

									</div>  <!-- end of QAContent-->
								</div>		<!-- end of docAnswer-->
							</div>		<!-- end of spotlight-->
						</li>
					</ul>
				</section>
		</div>
	</div>

</div><!-- end of main container -->

<!-- Footer -->
		


<!-- Scripts -->
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.dropotron.min.js"></script>
	<script src="js/jquery.scrollex.min.js"></script>
	<script src="js/jquery.scrolly.min.js"></script>
	<script src="js/jquery.selectorr.min.js"></script>
	<script src="js/skel.min.js"></script>
	<script src="js/util.js"></script>
    <!-- <script src="js/main.js"></script> -->

</body>
</html>