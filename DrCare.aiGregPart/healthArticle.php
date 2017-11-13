<?php
    session_start();
?>
<!DOCTYPE html>
<html>

<head>
    <title>test</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyA9HW61jlVn7qzBzYbhOh-pgOeS7-g9WJI&sensor=false"></script>
    <script src="js/jquery/jquery-1.12.4.min.js"></script>
    <script src="js/modifiedByHailey.js"></script>
    <!-- <script src="js/general.js"></script> -->
    <script src="js/articles.js"></script>
    <script src="js/articles_navbar.js"></script>

    <link rel="stylesheet" type="text/css" href="css/health.css" />
    <link rel="stylesheet" type="text/css" href="css/general.css" />
	<link rel="stylesheet" href="templates/html5up-future-imperfect/assets/css/main.css" />
	<link rel="stylesheet" href="templates/html5up-future-imperfect/assets/css/custom.css" />
</head>


<body>
<!-- navbar -->
<div id="navbar">
	<img id="menuBtn" src="img/menu.png">
    
    <div id=upperNav>
    	<button id="homePage" class="navBtn"><img src="img/articles/home.png" class="navIcon"><p class="navText"><a href="../index.php" style="color: white;"> Dr.CARE</a></p></button>
    	<button id="findoc" class="navBtn"><img src="img/articles/search.png" class="navIcon"><p class="navText"><a href="findoc.php" style="color: white;">找醫生</a></p></button>
    	<button id="knowledge" class="navBtn"><img src="img/articles/info.png" class="navIcon"><p class="navText">健康知識</p></button>
    	<button id="sickness" class="navBtn"><p class="navText"><a href="../knowledgeList.php" style="color: white;">疾病</a></p></button>
    	<button id="hospitalTime" class="navBtn"><p class="navText"><a href="../hospitalTime.php" style="color: white;">急症室時間</a></p></button>
    	<button id="healthArticle" class="navBtn"><p class="navText"><a href="../searchHealthArticle.php" style="color: white;">健康誌</a></p></button>

    </div>

    <div class="breakLine"></div>

    <div id=bottomNav>
    	<?php 
	        if(isset($_SESSION['user_id'])) {
	            echo '
	            	<div class="userInfo">
	            		<img src="img/articles/user.png">
		                <p>用戶名稱</p>
		                <p id="userName">'.$_SESSION['user_name'].'</p>
		                <button id="userSetting">設定</button>
	                </div>

	                <div class="category">
						<button>個人建康 <img src="img/articles/dropdown.png"></button>
						<div>
							<button id="myDoc" class="navBtn"><img src="img/articles/myDoc.png"><p class="navText">我的醫生</p><p class="num">5</p></button>
			    			<button id="favArticle" class="navBtn"><img src="img/articles/heart.png"><p class="navText">最愛文章</p><p class="num">3</p></button>
						</div>
			    	</div>
	            ';
	        }
	    ?>
    	
    </div>
    <?php 
        if(!isset($_SESSION['user_id'])) {
            echo '
                <p id="login">用戶登入</p>
                <p id="register">免費註冊</p>
            ';
        }
        else {
            echo '
                <p id="logout">登出</p>		
			';
        }
    ?>
   
</div>

<div id="navbarTop">
	<img id="menuBtn" src="img/menu.png">
    <p class="name">Dr Care.ai</p>
</div>


<div class="mainContainer">
	<!-- Search Row -->
	<div class="selectRow">
		<select name="subCategory" id="subCategory">
			<option value="" selected="">全部專科</option>
		</select>

		<select name="disease" id="disease">
			<option value="" selected="">全部專科</option>
		</select>

		<button class="voiceButton" type="button">
			<img src="img/mic.png" class="voiceIcon">
		</button>
	</div>

	<div class="pageHead">
		<div>
			<p id="articlesType">個人健康</p>
			<p id="statement">我們會根據您的人格特質，推薦合適你的文章</p>
		</div>
		<button id="settings">設定</button>
	</div>

	<div class="articles">
		<article class="post">
			<header>
				<div class="title">
					<h2><a href="#">髕腱問題致前膝痛(Template)</a></h2>
					<p><img src="img/tag.png"><span>飲食推薦</span>|<span>都市健康</span></p>
				</div>
				<div class="meta">
					<time class="published" datetime="2015-11-01">2017-08-02 21:48</time>
					<a href="#" class="author"><span class="name">吳彥</span><img src="img/doctor.png" alt="" /></a>
				</div>
			</header>
			<div class="Content">
				<div class="image featured"><img src="templates/html5up-future-imperfect/images/pic01.jpg"/></div>
				<p>前膝經常疼痛，尤其在運動一會兒後出現甚至加劇，有可能是髕腱發炎或受創撕裂所致，較常見於年輕及好動的人士身上。髕腱出問題可影響膝蓋的功能，導致日常活動也受到阻礙。

髕骨亦即是俗稱「菠蘿蓋」的膝蓋骨，而髕腱則是把大腿四頭肌腱下半部及膝蓋與脛骨連接的組織，它的主要功能是伸展膝蓋，即幫助伸直或屈曲腿部。

導致髕腱斷裂的原因，多是傷者跌倒下時，膝蓋呈屈曲狀態，大腿肌肉快速收縮時令髕腱因為大力牽扯而撕脫，特別是本身已因長時間勞損創傷而患有髕腱發炎或肌腱炎、髕腱衰退或部位曾注射類固醇等，都會增加髕腱斷裂的風險。另外，一些全身性疾病紅斑狼瘡症亦可使髕腱有慢性發炎，同樣會較容易發生髕腱斷裂的情況。</p>
				<a href="#">原文： http://localhost/myweb/template/html5up-future-imperfect/#</a>
				<footer>
					<ul class="actions">
						<li><a href="#" class="button big">繼續閱讀</a></li>
					</ul>
					<ul class="stats">
						<li><a href="#" class="icon fa-heart">28</a></li>
						<li><a href="#" class="icon fa-thumbs-o-up">128</a></li>
					</ul>
				</footer>
			</div>
		</article>

	</div><!-- end of articles -->
</div><!-- end of mainContainer -->


</body>
</html>