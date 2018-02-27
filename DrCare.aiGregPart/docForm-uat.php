<?php
	// header("Content-Type:text/html;charset=utf-8");
	// $docName = $_GET['Name'];

	// $url = "http://www.chatbot.hk/DrCare.Doctor.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";

	// $url = $url."&Name=".urlencode($docName);
	// $json = file_get_contents($url);
	// $results = json_decode($json, true);

	// $fullName = $results["Result"][0]['FullName'];
	// $subcat = $results['Result'][0]['SubCategory'];
	// $addr_ch = $results["Result"][0]['Address_ch'];
	// $phone  = $results["Result"][0]['Phone'];

?>
<!DOCTYPE html>
<html>

<head>
	<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-53DZWFV');</script>
		<!-- End Google Tag Manager -->

		<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '395026040845787',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.12'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
	<meta name="msvalidate.01" content="CD1840962D6DC4062F95CA285294B1B2" />
    <title>DrCare.ai</title>
    <meta name="description" content="<? echo $fullName."-".$subcat."-".$addr_ch."-Tel:".$phone."; ".$relatedArticle.$essay1. " ".$essay2." ".$essay3; ?>">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA9HW61jlVn7qzBzYbhOh-pgOeS7-g9WJI"></script>
    <script src="js/jquery/jquery-1.12.4.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="js/general.js"></script>
    <script src="../assets/js/onWindowResizeFunction.js"></script>
    <script src="js/docForm-uat.js"></script>
    <script src="js/googleMap.js"></script>
    <script src="js/filterModule.js"></script>
    <script src="js/speech.js"></script>
    <!-- <script src="../assets/js/footer.js"></script> -->
    <script src="../assets/js/footerFunction.js"></script>
    <script src="../assets/js/sendEmailFunction.js"></script>
    <script src="../assets/js/main.js"></script>

    <!-- <link rel="stylesheet" type="text/css" href="../assets/css/headerFooter.css" /> -->
    <!-- unable to use the main one -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/header_footer.css" />
    <link rel="stylesheet" type="text/css" href="css/general.css" />
    <link rel="stylesheet" type="text/css" href="css/docForm-uat.css" />
    <link rel="stylesheet" href="templates/px-hypothesis-html/blue/assets/css/main.css" />
    <link rel="stylesheet" href="templates/px-hypothesis-html/blue/assets/css/custom.css" />
	<link rel="stylesheet" href="templates/html5up-future-imperfect/assets/css/main.css" />
	<link rel="stylesheet" href="templates/html5up-future-imperfect/assets/css/custom.css" />
</head>


<body>
	<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-53DZWFV"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<!-- End Google Tag Manager (noscript) -->

		<!-- <div
		  class="fb-customerchat"
		  page_id="2076696632356020"
		  ref="drcare.ai">
		</div>
		<div id="fb-root"></div>
		<script>(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script> -->

<header id="header" >
<!-- navbar -->
<!-- <div id="navbarTop"> -->
	<!-- Logo -->
		<div class="logo">
			<a href="../index.php">Dr Care.ai </a>
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
	<!-- doc info window -->
	<div class="infoContainer">
		
		<div class="infoDiv">
			<h3>醫生資料</h3>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生中文姓名</p>
				</div>
				<div class="col-sm-2">
					<input id="chName" type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生英文姓名</p>
				</div>
				<div class="col-sm-2">
					<input id="enName" type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>性別</p>
				</div>
				<div class="col-sm-1">
					<input class="radio" type="radio" name="gender" value="男 "><p class="radioP">男</p>
				</div>
				<div class="col-sm-1">
					<input class="radio" type="radio" name="gender" value="女 "><p class="radioP">女</p>
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生最新照片</p>
				</div>
				<div class="col-sm-2">
					<input type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>專業科目</p>
				</div>
				<div class="col-sm-2">
					<input id="specialist" type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>特別的服務和產品</p>
				</div>
				<div class="col-sm-2">
					<input id="serviceProduct" type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>專業資格</p>
				</div>
				<div class="col-sm-6">
					<textarea name="message" id="certificate" rows="7" placeholder="信息" value=""></textarea>
				</div>
			</div>
		<!-- end of the info part -->
		</div>

		<div class="infoDiv">
			<h3>其他資料</h3>
			<div class="row">
    			<div class="col-sm-2">
					<p>使用語言</p>
				</div>
				<div class="col-sm-2">
					<input id="language" type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>使用醫院</p>
				</div>
				<div class="col-sm-2">
					<input id="hospital" type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生電話</p>
				</div>
				<div class="col-sm-2">
					<input id="phone" type="tel">
				</div>
				<div class="col-sm-1">
					<input class="radio" type="radio" name="phone" value="public"><p class="radioP">公開</p>
				</div>
				<div class="col-sm-1">
					<input class="radio" type="radio" name="phone" value="private"><p class="radioP">不公開</p>
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生傳真機</p>
				</div>
				<div class="col-sm-2">
					<input id="fax" type="tel">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生傳呼機</p>
				</div>
				<div class="col-sm-2">
					<input id="call" type="tel">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>電郵地址</p>
				</div>
				<div class="col-sm-2">
					<input id="email" type="email">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生Facebook</p>
				</div>
				<div class="col-sm-2">
					<input type="url">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生網上寫過的文章/網誌</p>
				</div>
				<div class="col-sm-2">
					<input type="url">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
    				<p>醫療券</p>
    			</div>
    			<div class="col-sm-1">
    				<input class="radio" type="radio" name="ticket" value="use"><p class="radioP">可用</p>
    			</div>
    			<div class="col-sm-1">
    				<input class="radio" type="radio" name="ticket" value="cantUse"><p class="radioP">不可用</p>
    			</div>
    		</div>
    		<div class="row">
    			<div class="col-sm-2">
    				<p>夜診</p>
    			</div>
    			<div class="col-sm-1">
    				<input class="radio" type="radio" name="ticket" value="use"><p class="radioP">提供</p>
    			</div>
    			<div class="col-sm-1">
    				<input class="radio" type="radio" name="ticket" value="cantUse"><p class="radioP">不提供</p>
    			</div>
    		</div>
		</div>
			
		<div class="infoDiv">
			<h3>提供疫苗</h3>	
			<div class="row">
				<div class="col-sm-2">
					<input type="text">
				</div>
				<div class="col-sm-1">
					<p>價格</p>
				</div>
				<div class="col-sm-1">
					<p class="right">$</p>
				</div>
				<div class="col-sm-2">
					<input type="number" min="0.01">
				</div>
			</div>
		</div>

		<div class="infoDiv">
			<h3>診所/集團/辦公資料</h3>	
			<div class="row">
				<div class="col-sm-2">
					<p>地址</p>
				</div>
				<div class="col-sm-2">
					<input type="text">
				</div>
			</div>
			<p>開診時間</p>
			<div class="row">
				<div class="col-sm-2">
					<p>星期一</p>
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
				<div class="col-sm-1">
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<p>星期二</p>
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
				<div class="col-sm-1">
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<p>星期三</p>
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
				<div class="col-sm-1">
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<p>星期四</p>
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
				<div class="col-sm-1">
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<p>星期五</p>
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
				<div class="col-sm-1">
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<p>星期六</p>
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
				<div class="col-sm-1">
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<p>星期日</p>
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
				<div class="col-sm-1">
				</div>
				<div class="col-sm-3 clinicTime">
					<input type="time">
					<p>-</p>
					<input type="time">
				</div>
			</div>
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