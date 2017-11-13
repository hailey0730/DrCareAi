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
    <script src="js/jquery-ui/jquery-ui.min.js"></script>
    <script src="js/general.js"></script>
    <script src="js/findoc.js"></script>
    <script src="js/search.js"></script>
    <script src="js/googleMap.js"></script>
    <script src="js/filterModule.js"></script>
    <script src="js/speech.js"></script>
	<script src="../assets/js/footer.js"></script>
	<script src="../assets/js/main.js"></script>
	<!-- <script src="../assets/js/main.js"></script> -->

	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.dropotron.min.js"></script>
	<script src="js/jquery.scrollex.min.js"></script>
	<script src="js/jquery.scrolly.min.js"></script>
	<script src="js/jquery.selectorr.min.js"></script>
	<script src="js/skel.min.js"></script>
	<script src="js/util.js"></script>
    <!-- <script src="js/main.js"></script> -->

    <link rel="stylesheet" type="text/css" href="css/general.css" />
    <link rel="stylesheet" type="text/css" href="css/header_footer.css" />
    <link rel="stylesheet" type="text/css" href="css/findoc.css" />
    <link rel="stylesheet" type="text/css" href="css/filterBar.css" />
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

	<!-- Google Map -->
	<div class="mapContainer">
		<div id="googleMap"></div>
	</div>

	<button class="showSearch">搜索+</button>
	<!-- Search Row -->
	<div class="searchRow">
		<!-- search by type -->
		<select class="filter" id="specialist">
			<option value="" selected="">全部種類</option>
		</select>

		<!-- search by type -->
		<select class="filter" id="area">
			<option value="" selected="">全部地區</option>
		</select>

		<!-- search by type -->
		<select class="filter" id="type">
			<option value="" selected="">全部專科</option>
		</select>

		<!-- search by tags -->
		<input id="searchInput" type="text" placeholder="輸入搜索內容"></input>
		<!-- voice func -->
		<img src="img/mic.png" class="voiceIcon" onclick="startDictation(event)">
		<img src="img/search.png" class="searchIcon" onclick="passToURL()">

	</div>


	<!-- text head row -->
	<div class="headInfo">
		<!-- result texts -->
		<div class="searchResult">
			<div id="searchText">
			</div>
			<img src="img/wave.png" id="voiceRead">
			<p id="resultText" id="resultText"></p>	
		</div>
		<!-- page btns -->
		<div class="pageControl">
			
			<p id="firstPage">最后</p>
			<p id="nextPage">下一頁</p>
			<div class="pages">
			</div>
			<p id="prePage">上一頁</p>
			<p id="firstPage">最前</p>
			<p id="curPage" hidden="hidden">1</p>
		</div>
		
	</div>

	<div id="searchResults">
		
		
	
	</div><!-- end of result container -->

</div><!-- end of main container -->
<!-- Footer -->
			


</body>

</html>