$(document).ready(function(){
	// $('header').append(makeNav());
});

function makeNav(){
	var nav = '';
	nav += '<nav id="nav">			<ul>				<li><a href="clinicBotPage.php">智能助手</a></li>				<li>					<a href="#" class="icon fa-angle-down">醫生</a>					<ul>						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=西醫">西醫</a></li>						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=牙科">牙醫</a></li>						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=物理治療">物理治療</a></li>						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=脊骨神經科">脊醫</a></li>						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=專業治療">專業治療</a></li>						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=心理學">心理咨詢</a></li>						<li><a href="http://test.drcare.ai/Doctor/findoc.php?category=專業治療&subcategory=營養學">營養咨詢</a></li>											</ul>				</li>				<li>					<a href="#" class="icon fa-angle-down">健康資訊</a>					<ul>						<li><a href="knowledge.php">健康總覽</a></li>						<li><a href="knowledgeList.php">疾病知識</a></li>						<li><a href="hospitalTime.php">急症室時間</a></li>						<li><a href="searchHealthArticle.php">健康誌</a></li>											</ul>				</li>				<!-- <li><a href="http://test.drcare.ai/doctor/healthArticle.php">文章報導</a></li> -->				<div id="login">					<!-- <li><a href="login.php">登入</a></li> -->								</div>			</ul>		</nav>';
	console.log(nav);
	return nav;
}

// <?php 				        if(!isset($_SESSION["user_id"])) {				            echo "				                <li id="loginbtn" style="cursor:pointer;"><a href="" onclick="createLoginWindow();">登入</a></li>				            ";				        }				        else {				            echo "				                <li id="logoutbtn" style="cursor:pointer;"><a href="" onclick="$.get("Doctor/php/logout.php", {},                function(){                    window.location.reload();            });">登出</a></li>									";				        }				    ?>	