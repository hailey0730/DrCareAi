<!DOCTYPE HTML>
<!--
	Telemetry by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
-->
<html>
<head>
	<title>DrCare.ai</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<link rel="stylesheet" href="assets/css/loginWin.css" />
	<link rel="stylesheet" href="assets/css/noBannerBGMain.css" />
	<link rel="stylesheet" href="assets/css/headerFooter.css" />
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
		<!-- <nav id="nav">
			<ul>
				<li><a href="clinicBotPage.php">隨行醫生</a></li>
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
						<li><a href="knowledge.php">健康總覽</a></li>
						<li><a href="knowledgeList.php">疾病知識</a></li>
						<li><a href="hospitalTime.php">急症室時間</a></li>
						<li><a href="searchHealthArticle.php">健康誌</a></li>
						
					</ul>
				</li> -->
				<!-- <li><a href="http://test.drcare.ai/doctor/healthArticle.php">文章報導</a></li> -->
				<!-- <div id="login"> -->
					<!-- <li><a href="login.php">登入</a></li> -->
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

	</header>

	<div id="pageContent">
		<section id="main" class="wrapper">
		<div class="inner">
			<h3>免責聲明</h3>
		<p>DrCare.ai (www.drcare.ai) 是由Asiabots Limited公司編輯而成，純粹用作一般參考、分享及資訊用途。本公司致力改進網站資訊的準確性，但並不擔保或保證本網站或所提供的第三方網站連結為準確、完整、適時或適用（無論是明訂或隱含的擔保或保證）；亦不擔保或保證資訊是最新的。 

本網站DrCare.ai 的資訊和分析；並不構成對一般情况或任何個別人士或病人個案的醫學建議、診斷或治療，亦不應取代專業醫學建議、診斷或治療。 

在法律許可的情況下，Asiabots對DrCare.ai網站資訊的任何錯誤、遺漏、失實陳述或錯誤陳述，概不負責。本公司特此表明，任何因為或有關本網站，或其任何內容、服務，或對本網站的任何編彙、使用、誤用或依賴，或本網站資訊或第三方網站連結的資訊，而所引致的任何直接、間接或相應引起的損失、賠償、費用或支出，本公司不承擔任何義務或責任。 

Asiabots Limited概不保證本網站或其資訊不受中斷、沒有延誤、錯誤、病毒或錯失。本公司對於DrCare.ai網站在任何時間可能出現的任何錯誤、故障、中斷或延誤，概不負責。 

Asiabots Limited可在任何時候全權決定終止、暫停或撤回Dr Care.ai網站（或任何部分）而不作事先通知。 

為方便使用者瀏覽他方提供或間接提供的資料，DrCare.ai網站可能在不同頁面，提供第三方的網站連結。Asiabots Limited對Dr Care.ai網站以連結方式所提供的第三方網站資訊，概不負責。本公司提供該等連結僅為方便閣下，並不代表Asiabots Limited對此等第三方網站、或該網站所提供的任何產品或服務，作出任何聲明、陳述、支持或保證。該等第三方網站的資訊乃由第三方編彙和提供，Asiabots Limited無力控制該等第三方網站或其資料。閣下應遵守Dr Care.ai網站所提供的所有使用及安全程序，以及第三方網站的政策和使用條款。 

閣下進入或使用DrCare.ai網站，代表閣下同意無條件接受此免責聲明的所有條款。由於Asiabots Limited可能隨時更改及／或修訂此免責聲明而事先不作任何通知，請閣下每次瀏覽DrCare.ai網站時到本頁查核任何更改及／或修訂。
</p>
	</div>
</section>
	</div>
			<!-- Footer -->
			
			<!-- Scripts -->
			<!-- <script src="http://code.jquery.com/jquery-1.7.0.min.js"></script> -->
			<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.js"></script> -->
			<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
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
	<script src="assets/js/footer.js"></script>

</body>
</html>