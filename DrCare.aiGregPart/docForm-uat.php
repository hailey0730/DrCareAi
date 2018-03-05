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
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
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

<!-- testing form -->
		<!-- <form action="https://script.google.com/macros/s/AKfycbyG_pdTU6ZGhXsWHrUkp0BPI8BDh01p-8i_cri8T9vY3x75SoAv/exec" method="post" target="hidden_iframe">
<input type="hidden" name="method" value="write" />
<input type="text" name="chName" placeholder="填入稱謂" title="填入稱謂" /><br/>
<input type="text" name="enName" placeholder="填入性別" title="填入性別" /><br/>
<input type="text" name="gender" placeholder="填入註解" title="填入註解" /><br/>
<input type="submit" value="提交" id="hiddenBtn" />
</form> -->
<!-- ============================= -->
		<form action="https://script.google.com/macros/s/AKfycbyG_pdTU6ZGhXsWHrUkp0BPI8BDh01p-8i_cri8T9vY3x75SoAv/exec" method="post" target="hidden_iframe">
		<input type="hidden" name="method" value="write" />
		<input type="hidden" name="docId" id="docId" />
		<div class="infoDiv">
			<h3>醫生資料</h3>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生中文姓名 *</p>
				</div>
				<div class="col-sm-4">
					<input onchange="detectChange('中文姓名')" id="chName" name="chName" class="inputBox" type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生英文姓名 *</p>
				</div>
				<div class="col-sm-4">
					<input onchange="detectChange('英文姓名')" id="enName" name="enName" class="inputBox" type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>性別 *</p>
				</div>
				<div class="col-sm-1">
					<input onchange="detectChange('性別')" class="radio" type="radio" name="gender" value="男 "><p class="radioP">男</p>
				</div>
				<div class="col-sm-1">
					<input onchange="detectChange('性別')" class="radio" type="radio" name="gender" value="女 "><p class="radioP">女</p>
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生最新照片(連結)</p>
				</div>
				<div class="col-sm-4">
	    			<!-- <form id="form1" runat="server"> -->
				        <!-- <input onchange="detectChange('醫生照片')" type='file' id="docPic"  name="docPic"/> -->
				        <!-- <img id="docPicPreview" src="#" alt=""  name="docPic" /> -->
				        <input onchange="detectChange('醫生照片')" class="inputBox" type='text' id="docPic" name="docPic" placeholder="www.example.jpg" />
				    <!-- </form> -->
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>專業科目 *</p>
				</div>
				<div class="col-sm-4">
					<input onchange="detectChange('專業科目')" id="specialist"  name="specialist" class="inputBox" type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>特別的服務和產品</p>
				</div>
				<div class="col-sm-6">
					<textarea onchange="detectChange('特別的服務和產品')" name="serviceProduct" id="serviceProduct" rows="7" value=""></textarea>
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>專業資格</p>
				</div>
				<div class="col-sm-6">
					<textarea onchange="detectChange('專業資格')" name="certificate" id="certificate" rows="7" value=""></textarea>
				</div>
			</div>
		<!-- end of the info part -->
		</div>

		<div class="infoDiv">
			<h3>其他資料</h3>
			<div class="price">
				<div class="row">
	    			<div class="col-sm-2">
						<p>診金</p>
					</div>
					<div class="col-sm-4">
						<input onchange="detectChange('診金')" placeholder="服務 e.g. 補牙" id="service-0" name="service-0" class="inputBox" type="text"
						>
					</div>
					<div class="col-sm-1">
						<p class="right">$</p>
					</div>
					<div class="col-sm-2">
						<input onchange="detectChange('診金')" placeholder="e.g. 500-1000" id="price-0" name="price-0" class="inputBox" type="text"
						>
					</div>
					<div class="col-sm-1">
						<button id="docPrice" class="add" type="submit"><i class="fa fa-plus"></i></button>
					</div>
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>使用語言</p>
				</div>
				<div class="col-sm-4">
					<input onchange="detectChange('使用語言')" id="language" name="language" class="inputBox" type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>使用醫院</p>
				</div>
				<div class="col-sm-4">
					<input onchange="detectChange('使用醫院')" id="hospital" name="hospital" class="inputBox" type="text">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生電話</p>
				</div>
				<div class="col-sm-4">
					<input onchange="detectChange('醫生電話')" id="phone" name="phoneNum" type="tel" class="inputBox">
				</div>
				<div class="col-sm-1">
					<input onchange="detectChange('醫生電話')" class="radio" type="radio" name="phone" value="public"><p class="radioP">公開</p>
				</div>
				<div class="col-sm-1">
					<input onchange="detectChange('醫生電話')" class="radio" type="radio" name="phone" value="private"><p class="radioP">不公開</p>
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生傳真機</p>
				</div>
				<div class="col-sm-4">
					<input onchange="detectChange('醫生傳真機')" id="fax" name="fax" type="tel" class="inputBox">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生傳呼機</p>
				</div>
				<div class="col-sm-4">
					<input onchange="detectChange('醫生傳呼機')" id="call" name="call" type="tel" class="inputBox">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>電郵地址</p>
				</div>
				<div class="col-sm-4">
					<input onchange="detectChange('電郵地址')" id="email" name="email" class="inputBox" type="email" placeholder="example@something.com">
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
					<p>醫生Facebook</p>
				</div>
				<div class="col-sm-4">
					<input onchange="detectChange('醫生Facebook')" id="facebook" name="facebook" class="inputBox" type="url" placeholder="https://www.facebook.com/example">
				</div>
			</div>
			<div class="docArticle">
				<div class="row">
	    			<div class="col-sm-2">
						<p>醫生網上寫過的文章/網誌</p>
					</div>
					<div class="col-sm-4">
						<input onchange="detectChange('醫生網上寫過的文章/網誌')" id="docArticleurl-0" name="docArticleurl-0" type="url" class="inputBox" placeholder="http://www.example.com">
					</div>
					<div class="col-sm-1">
						<button id="docArticle" class="add" type="submit"><i class="fa fa-plus"></i></button>
					</div>
				</div>
			</div>
			<div class="row">
    			<div class="col-sm-2">
    				<p>醫療券</p>
    			</div>
    			<div class="col-sm-1">
    				<input onchange="detectChange('醫療券')" class="radio" type="radio" name="ticket" value="use"><p class="radioP">可用</p>
    			</div>
    			<div class="col-sm-1">
    				<input onchange="detectChange('醫療券')" class="radio" type="radio" name="ticket" value="cantUse"><p class="radioP">不可用</p>
    			</div>
    		</div>
    		<div class="row">
    			<div class="col-sm-2">
    				<p>夜診</p>
    			</div>
    			<div class="col-sm-1">
    				<input onchange="detectChange('夜診')" class="radio" type="radio" name="night" value="yes"><p class="radioP">提供</p>
    			</div>
    			<div class="col-sm-1">
    				<input onchange="detectChange('夜診')" class="radio" type="radio" name="night" value="no"><p class="radioP">不提供</p>
    			</div>
    		</div>
		</div>
			
		<div class="infoDiv vaccine">
			<h3>提供疫苗</h3>	
			<div class="row">
				<div class="col-sm-2">
					<p>疫苗</p>
				</div>
				<div class="col-sm-4">
					<input onchange="detectChange('疫苗')" id="vaccine-0" name="vaccine-0" class="inputBox" type="text">
				</div>
				<div class="col-sm-1">
					<p class="right">價格	$</p>
				</div>
				<div class="col-sm-2">
					<input onchange="detectChange('疫苗')" id="vaccinePrice-0" name="vaccinePrice-0" type="text">
				</div>
				<div class="col-sm-1">
					<button id="vaccine" class="add" type="submit"><i class="fa fa-plus"></i></button>
				</div>
			</div>
		</div>

		<div class="infoDiv clinic">
			<h3>診所/集團/辦公資料</h3>
			<button id="clinic" class="add" type="submit"><i class="fa fa-plus"></i> 新增診所</button>
		</div>

		<div class="infoDiv">
			<div class="row">
				<div class="col-sm-2">
					<h3>備注</h3>
				</div>
				<div class="col-sm-6">
					<textarea onchange="detectChange('備注')" name="ps" id="ps" rows="3" value=""></textarea>
				</div>
			</div>
		</div>

		<div class="infoDiv">
			<div class="row">
				<div class="col-sm-2">
				</div>
				<div class="col-sm-2">
					<!-- <button id="update" class="add" type="submit">提交</button> -->
			<input id="update" class="add" type="submit" value="提交"/>

				</div>
			</div>
		</div>

</form>

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