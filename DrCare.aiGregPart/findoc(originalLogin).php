<?php
    session_start();
?>
<!DOCTYPE html>
<html>

<head>
    <title>test</title>
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

	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.dropotron.min.js"></script>
	<script src="js/jquery.scrollex.min.js"></script>
	<script src="js/jquery.scrolly.min.js"></script>
	<script src="js/jquery.selectorr.min.js"></script>
	<script src="js/skel.min.js"></script>
	<script src="js/util.js"></script>
    <script src="js/main.js"></script>

    <link rel="stylesheet" type="text/css" href="css/general.css" />
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
    	<nav id="nav">
    	<ul>
				<li><a href="../clinicBotPage.php">隨行醫生</a></li>
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
						<li><a href="../knowledge.php">健康總覽</a></li>
						<li><a href="../knowledgeList.php">疾病知識</a></li>
						<li><a href="../hospitalTime.php">急症室時間</a></li>
						<li><a href="../searchHealthArticle.php">健康誌</a></li>
						
					</ul>
				</li>
				<!-- <li><a href="http://test.drcare.ai/doctor/healthArticle.php">健康報導</a></li> -->
    	<?php 
        if(!isset($_SESSION['user_id'])) {
            echo '
                <li id="login" style="cursor:pointer;">登入</li>
            ';
        }
        else {
            echo '
                <li id="logout" style="cursor:pointer;">登出</li>		
			';
        }
    ?>
    </ul>
</nav>
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
									<li><a href="http://www.evangel.org.hk/">播道醫院</a></li>
									<li><a href="http://www.canossahospital.org.hk/">嘉諾撒醫院</a></li>
								</ul>
							</div>
						</div>
						<div class="contact">
							<h3>Dr. Care</h3>
							<div>
								<ul>
									<!-- <li><a href="index.php">Home</a></li> -->
									<li><a href="http://m.me/2076696632356020">隨行醫生</a></li>
									<li><a href="http://test.drcare.ai/Doctor/findoc.php">醫生</a></li>
									<li><a href="knowledge.php"> 健康資訊</a></li>
									<li><a href="searchHealthArticle.php">文章報導</a></li>
									<li>免責聲明</li>
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


</body>

</html>