$(document).ready(function(){
	// $('header').append(makeNav());
	$('body').append(makeFooter());
});

function sendEmail(){
	var email = "info@clinicbot.io";
	window.location = 'mailto:' + email;
	$(window).blur(function() {
		        // The browser apparently responded, so stop the timeout.
		        clearTimeout(t);
		      });

		      t = setTimeout(function() {
		        // The browser did not respond after 500ms, so open an alternative URL.
		        var altLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=info@clinicbot.io';
		         document.location.href = altLink;
		      }, 500);
}

function makeNav(){
	var nav = '';
	nav += '<nav id="nav">			<ul>				<li><a href="clinicBotPage.php">智能助手</a></li>				<li>												<a href="#" class="icon fa-angle-down">醫生</a>					<ul>		<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫">西醫</a></li>																				<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>																				<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=牙科">牙醫</a></li>																				<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=物理治療">物理治療</a></li>																		<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=脊骨神經科">脊醫</a></li>																			  <li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療">專業治療</a></li>																			<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=心理學">心理咨詢</a></li>																		<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療&subcategory=營養學">營養咨詢</a></li>											</ul>				</li>				<li>																<a href="#" class="icon fa-angle-down">健康資訊</a>					<ul>						<li><a href="knowledge.php">健康總覽</a></li>						<li><a href="knowledgeList.php">疾病知識</a></li>										<li><a href="hospitalTime.php">急症室時間</a></li>						<li><a href="searchHealthArticle.php">健康誌</a></li>											</ul>				</li>	</div>			</ul>		</nav>';
	return nav;
}

function makeNavWithLoginout(){
	var nav = '';
	nav += '<nav id="nav">			<ul>				<li><a href="clinicBotPage.php">智能助手</a></li>				<li>					<a href="#" class="icon fa-angle-down">醫生</a>					<ul>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫">西醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=牙科">牙醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=物理治療">物理治療</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=脊骨神經科">脊醫</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療">專業治療</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=心理學">心理咨詢</a></li>						<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=專業治療&subcategory=營養學">營養咨詢</a></li>											</ul>				</li>				<li>					<a href="#" class="icon fa-angle-down">健康資訊</a>					<ul>						<li><a href="knowledge.php">健康總覽</a></li>						<li><a href="knowledgeList.php">疾病知識</a></li>						<li><a href="hospitalTime.php">急症室時間</a></li>						<li><a href="searchHealthArticle.php">健康誌</a></li>											</ul>				</li>				<!-- <li><a href="http://www.drcare.ai/doctor/healthArticle.php">文章報導</a></li> -->				<div id="login">					<!-- <li><a href="login.php">登入</a></li> -->		<?php 				        if(!isset($_SESSION["user_id"])) {				            echo ';
	nav += '				                <li id="loginbtn" style="cursor:pointer;"><a href="" onclick="createLoginWindow();">登入</a></li>				            ';
	nav += '				        }				        else {				            echo ';
	nav += '				                <li id="logoutbtn" style="cursor:pointer;"><a href="" onclick="$.get("Doctor/php/logout.php", {},                function(){                    window.location.reload();            });">登出</a></li>									';
	nav += '				        }				    ?>							</div>			</ul>		</nav>';
	console.log(nav);
	return nav;
}

// href="mailto:info@clinicbot.io" should work if outlook is installed or on mobile (but doesn't work here because no outlook express)
// href="http://www.drcare.ai/index.php#five"
function makeFooter(){
	var footer = '';
	footer += '<footer id="footer">				<div class="inner">					<div class="split style1">						<div class="contact">							<h2>聯繫我們</h2>							<ul class="contact-icons">								<li class="icon fa-home">217B, 5W Enterprise Place<br>Science Park, NT, HK</li>								<li class="icon fa-phone">(852)3598-3639</li>								<li class="icon fa-envelope-o"><a onclick="sendEmail();return false;" style="cursor:pointer;">info@clinicbot.io</a></li>							</ul>						</div>						<div class="contact">							<h3>熱門專科醫生</h3>							<div class="">								<ul style="display: inline-block;">									<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=皮膚及性病科">皮膚科</a></li>															<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=眼科">眼科</a></li>																	<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=中醫">中醫</a></li>																					<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=皮膚及性病科">性病</a></li>															<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=婦產科">婦產科</a></li>																<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=耳鼻喉科">耳鼻喉科</a></li>								</ul>								<ul style="display: inline-block; position: absolute;">														<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=整形外科">整形外科</a></li>															<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=西醫&subcategory=骨科">骨科</a></li>																	<li><a href="http://www.drcare.ai/Doctor/findoc.php?category=牙科">牙科</a></li>								</ul>							</div>						</div>						<div class="contact">							<h3>醫生集中大廈</h3>							<div>								<ul>									<li>旺角中心一期</li>									<li>亞太中心</li>																						<li>萬邦行</li>									<li>南豐中心</li>																								<li>海洋中心</li>									<li>新世界大廈</li>																							<li>中建大廈</li>								</ul>							</div>						</div>						<div class="contact">							<h3>熱門私家醫院</h3>							<div>								<ul>									<li><a href="http://www.stpaul.org.hk/internet/">聖保祿醫院</a></li>																								<li><a href="http://www.hksh.org.hk/zh-hk/about-us.php">養和醫院</a></li>																						<li><a href="http://www.union.org/new/cindex.php">仁安醫院</a></li>																								<li><a href="http://www.hkbh.org.hk/chi/home.php">浸會醫院</a></li>																								<li><a href="https://www.twah.org.hk/tc/main">港安醫院</a></li>																									<li><a href="http://www.sth.org.hk/index.asp?lang_code=zh">聖德肋撒醫院</a></li>																					<li><a href="http://www.evangel.org.hk/">播道醫院</a></li>																										<li><a href="http://www.canossahospital.org.hk/">嘉諾撒醫院</a></li>								</ul>							</div>						</div>						<div class="contact">							<h3>Dr. Care</h3>							<div>								<ul>									<!-- <li><a href="index.php">Home</a></li> -->													<li><a href="http://www.drcare.ai/clinicBotPage.php">隨行醫生</a></li>									<li><a href="http://www.drcare.ai/Doctor/findoc.php">醫生</a></li>				<li><a href="http://www.drcare.ai/knowledge.php"> 健康資訊</a></li>									<li><a href="http://www.drcare.ai/searchHealthArticle.php">文章報導</a></li>									<li><a href="http://www.drcare.ai/disclaimer.php">免責聲明</li>								</ul>							</div>						</div>					</div>					<div class="copyright">						<p>&copy; Asiabots. All rights reserved.</p>						<p>免責聲明︰Dr care 會盡力驗證所有提交的資料和網頁內容正確無誤。 但本公司不會負責當中的任何錯誤和錯誤而引起的責任。 如有任何資料改變，有關的醫生將負責更新個人的資料或告本公司報告。 醫生的費用、所有文章等內容僅供參考，病人應與醫生或診所的有關醫療人員確認為實。</p>					</div>				</div>			</footer>';
	return footer;
}