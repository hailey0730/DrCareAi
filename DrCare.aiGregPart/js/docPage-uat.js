var articles = [];
var qaList = [];
var scrollIndex1 = 0;
var scrollIndex2 = 0;
var activeDiv = 'docArticles';
var docName = '';
var docGender = '';
var hasFooter = false;
var sickArticles = [];
var clinicContact = [];

$(document).ready(function(){ 
	//alert(GetQueryString("id"));

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$(".rightPart").empty();		//remove sickness info if mobile version
	}else{
		loadSicknessInfo();
	}

	$(document).bind("click",function(e){ 	//not tested yet
      	var target = $(e.target); 
      	
		if(target.closest(".timeDiv").length == 1 && $(window).width() <= 479){ 
      		target.parent().parent().find(".timeRow").toggle("normal");
		}
		// if(target.closest(".showSearch").length == 1 && $(window).width() <= 479){ 
  //     		target.parent().find(".searchRow").toggle("normal");
		// }
    });

	$("#returnBtn").click(function(){
		window.location.href = "findoc.php";
	});

	$("#articleNextBtn").click(function(){
		if(curPage == articles.length) {
			displayArticle(curPage=0);
		}
		else {
			displayArticle(++curPage);
		}
	});

	$(".filter").change(function(){
		var category = decodeURI(GetUrlParam("category"));
		var region = decodeURI(GetUrlParam("region"));
		var subcategory = decodeURI(GetUrlParam("subcategory"));
		category = (category == "null")?"":category;
		region = (region == "null")?"":region;
		subcategory = (subcategory == "null")?"":subcategory;


		if($(this).attr("id") == "specialist") {
			window.location.href = "./findoc.php?category=" + $(this).val() + "&region=" + region + "&subcategory=" + subcategory;
		}
		else if($(this).attr("id") == "area") {
			window.location.href = "./findoc.php?category=" + category + "&region=" + $(this).val() + "&subcategory=" + subcategory;
		}
		else if($(this).attr("id") == "type") {
			window.location.href = "./findoc.php?category=" + category + "&region=" + region + "&subcategory=" + $(this).val();
		}
	}); 

	mapInitialize();

	loadCategory(function() {
		var initialCategory = decodeURI(GetUrlParam("category"));
		initialCategory = (initialCategory == "null")?"":initialCategory;
		if(initialCategory != "") 
			$("#specialist option[value=" + initialCategory + "]").prop("selected","selected");

		var initialSubCategory = decodeURI(GetUrlParam("subcategory"));
		initialSubCategory = (initialSubCategory == "null")?"":initialSubCategory;
		if(initialSubCategory != "") 
			$("#type option[value=" + initialSubCategory + "]").prop("selected","selected");
	});

	$.getJSON("php/loadDocInfo.php", 
		{ID: GetUrlParam("ID")},
		function(doctor){
			pinAddress(doctor["Result"][0]);
			updatePageInfo(doctor["Result"][0]);
			loadArticle(doctor["Result"][0]["Name"]);
			$(".infoContainer").css("display", "inline");

			loadQA(GetUrlParam("ID"), doctor["Result"][0]["Name"], doctor["Result"][0]["Sex"]);		
			docName = doctor["Result"][0]["Name"];
			docGender = doctor["Result"][0]["Sex"]
	});


	$('.tabDiv').each(function(i,obj){
		if(this.id == "docArticles"){
			$(this).addClass('blue');
		}else{
			$(this).addClass('grey');
		}
	});
	$('.infinitePanel').each(function(i,obj){
		if(this.id != "docArticles"){
			$(this).addClass('inactive');
		}
	});

	// $('.tabDiv').bind("click", function(event){
	// 	var id = this.id;
	// 	console.log(id);
	// 	$('.tabDiv').each(function(i,obj){
	// 		if(this.id == id){
	// 			$(this).addClass('blue');
	// 			$(this).removeClass('grey');
	// 		}else{
	// 			$(this).addClass('grey');
	// 			$(this).removeClass('blue');
	// 		}
	// 	});
	// 	$('.infinitePanel').each(function(i, obj){
	// 		console.log(this.id);
	// 		if(this.id == id){
	// 			$(this).removeClass('inactive');
	// 			activeDiv =  this.id;
	// 		}else{
	// 			$(this).addClass('inactive');
	// 		}
	// 	});
			
	// });

	//=======================different article view for mobile============
	// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	// 	var win = $(window);

 //         win.scroll(function() {

 //        // End of the document reached?
 //        if ($(document).height() - win.height() - 250 < win.scrollTop()) {
           
 //        	// console.log(activeDiv);		//DEBUG
 //        	if(activeDiv == "docArticles"){
 //        		if(scrollIndex1 < articles.length){
 //            		var html = formatingArticleHTMLMobile(articles[scrollIndex1]);
	//                 $(".docArticles").append(html);
	//                 scrollIndex1 ++;
	//             }else if(scrollIndex1 == articles.length){
	//             	if(!hasFooter){
	//             		$('body').append(footer());
	//             		hasFooter = true;
	//             	}
	//             	scrollIndex1++;
	//             }
 //        	}else{
 //        		if(scrollIndex2 < qaList.length){
 //            		var QAHTML = formatingQAHTML(qaList[scrollIndex2], docName, docGender);
	// 				$('.QAContent').append(QAHTML);
	// 				scrollIndex2 ++;
 //        		}else if(scrollIndex2 == qaList.length){
 //        			console.log(hasFooter);
 //        			if(!hasFooter){
	//             		$('body').append(footer());
	//             		hasFooter = true;
	//             	}
	//             	scrollIndex2++;
 //        		}
                
                
 //            }
 //        }

 //        });
	// }else{

// ===========================load when scroll============================
	 var win = $(window);

         win.scroll(function() {

        // End of the document reached?
        if ($(document).height() - win.height() - 400 < win.scrollTop()) {
           
        	// console.log(activeDiv);		//DEBUG
        	if(activeDiv == "docArticles"){
        		if(scrollIndex1 < articles.length){
            		var html = formatingArticleHTML(articles[scrollIndex1]);
	                $(".docArticles").append(html);
	                scrollIndex1 ++;
	            }else if(scrollIndex1 == articles.length){
	            	if(!hasFooter){
	            		$('body').append(footer());
	            		hasFooter = true;
	            	}
	            	scrollIndex1++;
	            }
        	}else{
        		if(scrollIndex2 < qaList.length){
            		var QAHTML = formatingQAHTML(qaList[scrollIndex2], docName, docGender);
					$('.QAContent').append(QAHTML);
					scrollIndex2 ++;
        		}else if(scrollIndex2 == qaList.length){
        			console.log(hasFooter);
        			if(!hasFooter){
	            		$('body').append(footer());
	            		hasFooter = true;
	            	}
	            	scrollIndex2++;
        		}
                
                
            }
        }

        });
     // }

});

function loadSicknessInfo(){
	$.ajax({
	  method: "GET",
	  url: "../DrCare.Disease.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513"
	})
	  .done(function( msg ) {
	    var json = JSON.parse(msg);

    	for(i in json) {
			sickArticles[i] = json[i];
		}

	    // if one clinic only show one sickness info card, else two
	    if(clinicContact.length == 1)

	    $('.contentTitle').each(function(i,obj){
	    	var h3 = $(this).children();
	    	$(h3).html(sickArticles[i+1].Name);
	    });
	    $(".image").each(function(i,obj){
	    	var img = $(this).children();
	    	$(img).attr("src",'../' + sickArticles[i+1].ImageUrl);
	    });
	    $(".content").each(function(i,obj){
		    // change tags
		    var tag = $(this).children()[0];
		    var description = $(this).children()[1];
		    var link = $(this).children()[2];

		    $(description).html(sickArticles[i+1].Desc.substring(0,50) + ' ...');

		    var a = $($(link).children()).children();
		    $(a).attr("href","http://www.drcare.ai/sickness.php?name=" + sickArticles[i+1].Name);

	    });


  });
}

function loadArticle(name) {
	$.getJSON("php/getArticle.php", 
		{'target': name}, 
		function(json){
			// console.log(json);
			$(".articles").css("display", "inline");
			
			for(i in json) {
				articles[i] = json[i];
				// var HTML = formatingArticleHTML(json[i]);
				// $(".docArticles").append(HTML);
			}
			var HTML;
			// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			// 	HTML = formatingArticleHTMLMobile(json[0]);
			// }else{
			 	HTML = formatingArticleHTML(json[0]);
			// }
			$(".docArticles").append(HTML);

			$(".panel").each(function(i,obj){
				if(i == 4 || i == 5){
					$(this).css('height','50em');
				}
			});
			scrollIndex1++;
	});
}

function loadQA(ID, name, sex){		//sex to determine which doc pic to use
	$.getJSON("php/loadQA.php", 
		{'ID': ID}, 
		function(json){
			// console.log(json);
			// console.log('test update');
			var doc = $('.total').children();
			$(doc[0]).text(name + "醫生共有");
			for(i in json){
				qaList[i] = json[i];
				// var QAHTML = formatingQAHTML(json[i], name, sex);
				// $('.QAContent').append(QAHTML);
			}

			//set number of QA
			$(doc[1]).text(json.length);

		});

}

function formatingQAHTML(qa, name, sex){
	var returnHTML = '<div class="questionDiv">		<div class="profilePic">	<img src="img/Group 3.png">		</div>	<div class="from">	<p style="display:inline">' + qa['Age'] + '歲' + qa['Gender'] + ' 問:</p>	<span class="date grey">'+ qa['CreateDateTime'] + '</span>			</div>				<div class="question">							<div class="title">							<p>'+ qa['Topic'] +'</p>		</div>		<div class="content">			<p>'+ qa['Question'] + '</p>									</div>	</div>	</div>	<!-- end of questionDiv-->'	;

	var answerHTML = '';
	var docPic = '';
	if(sex == "男 "){
		docPic = 'img/Dr icon_male.png';
	}else{
		docPic = 'img/Dr female.png';
	}
	for(var i = 0; i < qa['Answers'].length; i++){
		answerHTML += answer(qa['Answers'][i], name, docPic);
	}

	returnHTML += answerHTML;

	return returnHTML;
}

function answer(json, name, docPic){
	var returnHTML = '<div class="answerDiv">								<div class="profilePic">		<img src="' + docPic + '">			</div>			<div class="from">					<p class="blue" style="display:inline">' + name + '醫生 回覆:  </p>					<span class="date grey">' + json['AnswerDateTime'] + '</span>						</div>				<div class="answer">							<div class="content">		<p>' + json['Answer'] + '</p>								</div>							</div>						</div>	<!-- end of answerDiv-->'

	return returnHTML;
}

function GetUrlParam(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = encodeURI(window.location.search).substr(1).match(reg);
	if(r!=null)return unescape(r[2]); return null;
}

function splitDocName(Name){
	var name = [], temp;
	temp = Name.split(" ");

	name[0] = temp[0];
	name[1] = "";

	for(var i=1; i<temp.length; i++) {
		name[1] += temp[i] + " ";
	}

	return name;
}


function updatePageInfo(docInfo) {
	var doctorSpan = '';
	if(docInfo["Category"] == '西醫' || docInfo["Category"] == "牙科"){
		 doctorSpan = '醫生';
	}
	console.log(doctorSpan);

	// top info
	$("#viewname").html(splitDocName(docInfo["Name"])[0] + " "); //name
	$("#commonText1").html(doctorSpan + "的簡介。他的專業是");
	$("#viewtype").html('<a style="color: #11D4EB;" href="http://www.drcare.ai/Doctor/findoc.php?category=' +  docInfo["Category"] + '"><u>' + docInfo["Category"] + '</u></a>' + ' ' + '<a style="color: #11D4EB;" href="http://www.drcare.ai/Doctor/findoc.php?subcategory=' + docInfo["SubCategory"] + '"><u>' + docInfo["SubCategory"] + '</u></a>'); //type
	// $("#viewtype").html(docInfo["Category"]+docInfo["SubCategory"]); //type
	$("#commonText2").html("，診所位置位於");
	$("#address").html('<a style="color: #11D4EB;" href="http://www.drcare.ai/Doctor/findoc.php?region=' +  docInfo["Region"] + '"><u>' + docInfo["Region"] + '</u></a>' + " 。"); //address
	// $("#address").html('<a style="color: #11D4EB;" href="http://www.drcare.ai/Doctor/findoc.php?region=' +  docInfo["Region"] + '"><u>' + docInfo["Address_ch"] + '</u></a>'); //address

	// tags
	// var tags = docInfo[7].split("|");
	// for(var i=0; i<tags.length; i++) {
	// 	$("#tagsContainer").append('<div class="tagClass"><img src="img/tag.png"><p>' + tags[i] + '</p></div>');
	// }

	//details
	$("#docName").html(docInfo["Name"]); //name
	$("#doctor").html(doctorSpan);
	$("#docName_en > span").html(splitDocName(docInfo["FullName"])[1]);
	$("#docGender > span").html(docInfo["Sex"]);

	$("#docWkHr").html('<i class="fa fa-square green"></i>'+'應診中');			//uncomment for 應診中
	$("#docWkHr").addClass('green');		// or addClass('red') for break

	$("#docType").html(docInfo["SubCategory"]); //type
	$("#docAddress").html("地址： " + docInfo["Address_ch"]); //address
	$("#docTel").html("電話： " + docInfo["Phone"]) //tel
	// $("#docEmail").html("電郵： " + docInfo["Email"]) //email
	//$("#docLanguage").html("語言： " + docInfo[""]) //language

	$(".modifyInfo > span").html(splitDocName(docInfo["Name"])[0]);

	//photo
	if(docInfo["PhotoUrl"] != null) {
		$("#photo").css("display", "inline");
		$("#photo").attr("src", docInfo["PhotoUrl"]);
	} 

	//certification & worktime
	var certs = docInfo["Certification"].split("\n");
	for(var i=1; i<certs.length; i++) {
		$("#certifyInfo").append("<p>" + certs[i] + "</p>");
	}

	var times = docInfo["Opentime"].split("\n");
	//$("#timeInfo").append("<p>" + docInfo["Opentime"].replace('\n', "<br/>") + "</p>");
	for(var i=0; i<times.length; i++) {
		$("#timeInfo").append("<p>" + times[i].replace('"', "") + "</p>");
	}

	//others
	var others = docInfo["Remarks"].replace("\r", "").split("\n");
	for(var i=0; i<others.length; i++) {
		var clinicOther = [];
		if(others[i].replace(" ", "") == "" || others[i] == "") continue;
		if(others[i].replace(" ","").substring(0,3) == "傳真機" || others[i].replace(" ","").substring(0,3) == "傳呼機" || others[i].replace(" ","").substring(0,4) == "電郵地址"){
			clinicOther.push(others[i].replace(" ",""));
		}
		
		$("#otherInfo").append("<p>" + others[i].replace(" ", "") + "</p>");
	}
	clinicContact.push(clinicOther);

	if(docInfo["Clinicbot"] == null) {
		$(".clinicbotDiv").css("display", "none");
	}
}

// used to get the parameters in url
function getQueryString(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function formatingArticleHTMLMobile(article){
	var returnHTML = "",
		title = "",
		tag = "",
		time = "",
		author = "",
		authorPic = "",
		media = "",
		mediaPic = "",
		imgURL = "",
		content = "",
		articleURL = "",
		like = "";

	// title
	title = article["Subject"];
	//tag
	var tags = article["Tags"].split(", ");
	for(i in tags) {
		if(tag == "") {
			tag = '<img src="img/tag.png">';
			tag += '<span>' + tags[i] + '</span>';
		}
		else {
			tag += '|<span>' + tags[i] + '</span>';
		}
	}
	//time
	time = article["CreateDateTime"];
	//author 
	author = article["Doctor"];
	//author photo
	authorPic = article["DoctorPhotoUrl"];
	//media
	media = article["Media"];
	//mediaPic
	mediaPic = article["MediaLogoUrl"];
	//imgURL
	imgURL = article["ImageUrl"];
	//content
	content = article["Desc"];
	//articleURL
	articleURL = article["Url"];
	//like
	like = article["Like"];

	returnHTML = "" +
	'<article class="post diffMobilePost">' +
	'<header>' +
	'<a href="#"><span >作者: ' + author 
		// + '</span><img src="' + authorPic + '" alt="" />'
		+'</a>' +
		'</header>' +		
		'<div class="Content">' +
			'<div class="image featured diffMobileDiv"><img class="diffMobileImg" src="' + imgURL + '"/></div>' +
			'<h2><a class="getArticleUrl" target="_blank" href="' + articleURL + '"><u>' + title + ' ></u></a></h2>' +
		'</div>' +
	'</article>';


	return returnHTML;
}

function formatingArticleHTML(article) {
	var returnHTML = "",
		title = "",
		tag = "",
		time = "",
		author = "",
		authorPic = "",
		media = "",
		mediaPic = "",
		imgURL = "",
		content = "",
		articleURL = "",
		like = "";

	// title
	title = article["Subject"];
	//tag
	var tags = article["Tags"].split(", ");
	for(i in tags) {
		if(tag == "") {
			tag = '<img src="img/tag.png">';
			tag += '<span>' + tags[i] + '</span>';
		}
		else {
			tag += '|<span>' + tags[i] + '</span>';
		}
	}
	//time
	time = article["CreateDateTime"];
	//author 
	author = article["Doctor"];
	//author photo
	authorPic = article["DoctorPhotoUrl"];
	//media
	media = article["Media"];
	//mediaPic
	mediaPic = article["MediaLogoUrl"];
	//imgURL
	imgURL = article["ImageUrl"];
	//content
	content = article["Desc"];
	//articleURL
	articleURL = article["Url"];
	//like
	like = article["Like"];

	returnHTML = "" +
	'<article class="post">' +
		'<header>' +
			'<div class="title">' +
				'<h2><a>' + title + '</a></h2>' +
				'<p>' + tag + '</p>' +
			'</div>' +
			'<div class="meta">' +
				'<time class="published" datetime="' + time + '">' + time + '</time>' +
				'<a href="#" class="author"><span class="name">' + author 
				// + '</span><img src="' + authorPic + '" alt="" />'
				+'</a>' +
				'<a href="#" class="author"><span class="name">' + media 
				// + '</span><img src="' + mediaPic + '" alt="" />'
				+'</a>' +
			'</div>' +
		'</header>' +
		'<div class="Content">' +
			'<div class="image featured"><img src="' + imgURL + '"/></div>' +
			'<p>' + content + '</p>' +
			'<a target="_blank" href="' + articleURL + '">原文： ' + articleURL + '</a>' +
			'<footer>' +
				'<ul class="actions">' +
					'<li><a target="_blank" href="' + articleURL + '" class="button big">繼續閱讀</a></li>' +
				'</ul>' +
				'<ul class="stats">' +
					// '<li><a href="#" class="icon fa-heart">加到最愛</a></li>' +
					'<li><a href="#" class="icon fa-thumbs-o-up">' + like + '</a></li>' +
				'</ul>' +
			'</footer>' +
		'</div>' +
	'</article>';


	return returnHTML;
}