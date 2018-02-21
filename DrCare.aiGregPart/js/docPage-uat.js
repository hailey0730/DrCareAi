var scrollIndex = 0;
var articles = [];
var qaList = [];
var scrollIndex1 = 0;
var scrollIndex2 = 0;
var activeDiv = 'docArticles';
var docName = '';
var docGender = '';
var hasFooter = false;
var sickArticles = [];
var listOfDoc = [];
var docNum = 0;
var moreCounter = 3;
var nextPage = 2;
var doctorType = '';
var clinicNum = 0;

$(document).ready(function(){ 
	//alert(GetQueryString("id"));
	var loadSickness = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$(".rightPart").empty();		//remove sickness info if mobile version
	}else{
		loadSickness = true;
	}

	$(document).bind("click",function(e){ 	//not tested yet
      	var target = $(e.target); 

      	for(var i = 0; i < clinicNum; i ++){
      		var time = "#time-" + i;
      		var timeRow = "#timeRow-" + i;
      		if(target.closest(time).length == 1){
      			$(timeRow).toggle('normal');
      		}
      	}
      	
		// if(target.closest("#time-0").length == 1){ 
  //     		target.parent().find("#timeRow-0").toggle("normal");
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

	$.getJSON("php/loadDocInfo-uat.php", 
		{ID: GetUrlParam("ID")},
		function(doctor){
			pinAddress(doctor["Result"][0]);
			updatePageInfo(doctor["Result"][0]);
			loadArticle(doctor["Result"][0]["Name"]);
			$(".infoContainer").css("display", "inline");

			loadQA(GetUrlParam("ID"), doctor["Result"][0]["Name"], doctor["Result"][0]["Sex"]);		
			docName = doctor["Result"][0]["Name"];
			docGender = doctor["Result"][0]["Sex"];

			clinicNum = doctor["Result"][0]["Clinic"].length;
			// =========load related doc=================
		    doctorType = doctor["Result"][0]["SubCategory"];
		    if(loadSickness){
				loadSicknessInfo();
			}
		//show relatedDoctor
		    var docCat = '(';
		        docCat += doctorType;
		        docCat += '醫生）'
		        $('#blue').text(docCat);

		   loadDocFromDB({
		    curPage: 1,
		    type: doctorType,   //SubCategory
		    specialist: ''      //Category
		  });

		

	});

	$(".more").click(function(){

	        loadDocFromDB({
	          curPage: nextPage,
	          type: doctorType,   //SubCategory
	          specialist: ''      //Category
	        });
	       nextPage++;
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

// ==============load vaccine table=======================
$("#vaccine").css("display","none");
	var url = "http://www.chatbot.hk/DrCare.SIV.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513"
			// + "&doctorID=" + GetUrlParam("ID");
            + "&Region=" + "灣仔" + "&Women=Y&Children=Y&Elder=Y";

    $.get(url, function(data){
        var json  = JSON.parse(data);
        loadVaccine(json);
        
    });

// ==============================================


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

// ===========================load when scroll============================
	 var win = $(window);

         win.scroll(function() {

        // End of the document reached?
        if ($(document).height() - win.height() - 400 < win.scrollTop()) {
           
        	// console.log(activeDiv);		//DEBUG
        	if(activeDiv == "docArticles"){
        		// if(scrollIndex1 < articles.length){
          //   		var html = formatingArticleHTML(articles[scrollIndex1]);
	         //        $(".docArticles").append(html);
	         //        scrollIndex1 ++;
	         //    }else if(scrollIndex1 == articles.length){
	         //    	if(!hasFooter){
	         //    		$('body').append(footer());
	         //    		hasFooter = true;
	         //    	}
	         //    	scrollIndex1++;
	         //    }

	         if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            // End of the document reached?
            if(scrollIndex1 < articles.length){
                   
                    if(scrollIndex < articles.length){
                        $('#main1').append(randomPost(articles[scrollIndex]));
                        $('#loading').hide();
                        scrollIndex++;
                    }else if (scrollIndex == articles.length){
                        $('#loading').hide();
                        $('body').append(footer());
                        scrollIndex++;
                    }else{
                        $('#loading').hide();
                    }
		        }
		        }else{
		             // End of the document reached?
		        if ($(document).height() - win.height() - 500 < win.scrollTop()) {
		        // if ($(document).height() - win.height() == win.scrollTop()) {
		                $('#loading').show();

		                appendArticles(articles,scrollIndex);
		                scrollIndex += 3;
		        }
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
	  url: "../DrCare.Disease.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513",
	  data: { Name:  doctorType.split("科")[0]}
	})
	  .done(function( msg ) {
	    var json = JSON.parse(msg);
	    if(json!= null){
	    	sicknessHtml(json);
	    }else{

	    	$.ajax({
			  method: "GET",
			  url: "../DrCare.Disease.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513"
			})
			  .done(function( msg ) {
	    		var json = JSON.parse(msg);
	    		sicknessHtml(json);
			  });
	    }
	    
  });
}

function sicknessHtml(json){
	for(i in json) {
			sickArticles[i] = json[i];
		}

	    var length = 0;
	     if(clinicNum == 1){
	    	length = 1;
	    }else{
	    	length = 2;
	    }
	    length = 1;

	    for(var i = 0; i < length; i ++){
	    	var post = '';
		    post += '<li>';
		    post += '<article id="content">';
		    post += '<a class="image"><img src="../';
		    post += sickArticles[i].ImageUrl;
		    post += '" alt="" />';
		    post += '</a>';
		    post += '<div class="contentTitle"><h3>';
		    post += sickArticles[i].Name;
		    post += '</h3></div>';
		    post += '<div class="content"><p class="tags">';

		    post += '<i class="fa fa-tag"></i>'		//append tags
		    post += sickArticles[i].Tag;
		    post += '</p>';

		    post += '<p>';
		    post += sickArticles[i].Desc.substring(0,50);
		    post += '...';
		    post += '</p><ul class="actions"><li class="readBtn"><a target="_blank" href="http://www.drcare.ai/sickness.php?name=';
		    post += sickArticles[i].Name;
		    post += '" class="button">繼續閱讀</a></li></ul></div>';
		    post += '</article>';
		    post += '</li>';

		    $('.sicknessArticles').append(post);

	    }
}

function loadArticle(name) {
	$.getJSON("php/getArticle.php", 
		{'target': name}, 
		function(json){
			// console.log(json);
			$(".articles").css("display", "inline");

			var tagList = '';
			var likeNum = 0;
			
			for(i in json) {
				articles[i] = json[i];
				// var HTML = formatingArticleHTML(json[i]);
				// $(".docArticles").append(HTML);
				if(json[i]["Tags"]!= "NA"){
						tagList += '<div class="tagDiv">';
						tagList += json[i]["Tags"];
						tagList += '</div>';
				}
			// console.log(json[i]["Like"]);		//DEBUG
				likeNum += parseInt(json[i]["Like"]);
			}
			$("#articleTitle").html(articles.length + '篇有關' + docName + "醫生的文章:");
			$("#articleTags").html(tagList);		//set tags
			$("#likeNum").html(likeNum);		//set like num


			var HTML;
			
			 	HTML = formatingArticleHTML(json[0]);
		
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

// =======uncomment to show location ===============
	// $("#commonText2").html("，診所位置位於");
	// $("#address").html('<a style="color: #11D4EB;" href="http://www.drcare.ai/Doctor/findoc.php?region=' +  docInfo["Region"] + '"><u>' + docInfo["Region"] + '</u></a>' + " 。"); //address
// ================================================

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

	if(docInfo["isOpen"] == 1) {
		$("#docWkHr").html('<i class="fa fa-square green"></i>'+'應診中');			//uncomment for 應診中
	}
	$("#docWkHr").addClass('green');		// or addClass('red') for break

	$("#docType").html(docInfo["SubCategory"]); //type


	// =======uncomment for final ver=====================
	var clinicBranch;
	for(var i = 0; i < docInfo['Clinic'].length; i ++){			//might change 'clinic' attr name
		clinicBranch = contactInfohtml(docInfo['Clinic'][i], i);
		$('.basicInfo').append(clinicBranch);
	}
	// ==================================================

	// $("#docAddress").html("地址： " + docInfo["Address_ch"]); //address
	// $("#docTel").html("電話： " + docInfo["Phone"]); //tel
	// $("#docEmail").html("電郵： " + docInfo["Email"]); //email
	// $("#docFax").html("電郵： " + docInfo["Email"]); //email
	// $("#docCall").html("電郵： " + docInfo["Email"]); //email
	//$("#docLanguage").html("語言： " + docInfo[""]) //language


	$(".modifyInfo > span").html(splitDocName(docInfo["Name"])[0]);

	//photo
	if(docInfo["PhotoUrl"] != null) {
		$("#photo").css("display", "inline");
		$("#photo").attr("src", docInfo["PhotoUrl"]);
	} 

	//certification & worktime
	var certs = docInfo["Certification"].split("\n");
	for(var i=0; i<certs.length; i++) {
		$("#certifyInfo").append("<p>" + certs[i] + "</p>");
	}

	// var times = docInfo["Opentime"].split("\n");
	// console.log(times);
	// //$("#timeInfo").append("<p>" + docInfo["Opentime"].replace('\n', "<br/>") + "</p>");
	// for(var i=0; i<times.length; i++) {
	// 	$("#timeInfo").append("<p>" + times[i].replace('"', "") + "</p>");
	// }
	// console.log($("#timeInfo").html());

	//others
	var others = docInfo["Remarks"].replace("\r", "").split("\n");
	for(var i=0; i<others.length; i++) {
		var clinicOther = [];
		if(others[i].replace(" ", "") == "" || others[i] == "") continue;
			$("#otherInfo").append("<p>" + others[i].replace(" ", "") + "</p>");
		
	}

	if(docInfo["Clinicbot"] == null) {
		$(".clinicbotDiv").css("display", "none");
	}
}

function contactInfohtml(doc, j){
	var times = doc["Opentime"].split("\n");
	var timeHtml = '';
	for(var i=0; i<times.length; i++) {
		timeHtml += "<p>";
		timeHtml += times[i].replace('"', "");
		timeHtml += "</p>";
	}

	var html = '<div class="contactInfo">' +
					'<div class="btns">' +
						'<div class="clinicbotDiv">' +
							'<img src="img/messager.png">' +
							'<button type="button" id="useClinicbot">按此聯絡</button>' +
							'<p>Chatbot By Clinicbot</p>' +
						'</div>' +
					'</div>' + 
				'<div class="contactInfoText">' + 
					// '<p>聯絡資料：</p>' + 
					'<p id="region">' + doc["Region"] + '</p>' +
					'<p id="docTel">' + "電話： " + doc["Phone"] + '</p>' + 
					'<p id="docAddress">' + "地址： " + doc["Address_ch"] + '</p>' + 
					// '<p id="docEmail">' + "電郵： " + doc["Email"] + '</p>' + 
					// '<p id="docFax">'+ "傳真機： " +'</p>' + 
					// '<p id="docCall">'+ "傳呼機： " +'</p>' + 
				'</div>' + 
				'<button class="time" id="time-' + j + '">' + 
							'<p>診症時間</p><i class="fa fa-sort-down"></i>' + 
					'</button>' +
				'<div class="timeRow" id="timeRow-' + j + '">' + 
					'<div id="timeInfo">' + 
						timeHtml +
	
					'</div>' + 
				'</div>' + 
				'</div>'


	// $("#docFax").html
	// $("#docCall").html
	return html;
}

// used to get the parameters in url
function getQueryString(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
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

function loadVaccine(json){
            
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    // var detail = '<p>季節性流感疫苗SIV(包括 孕婦-W, 兒童-C, 長者-E), 肺炎球菌疫苗(23vPPV)(只包括長者-E23), 肺炎球菌疫苗(PCV13)(只包括長者-E13)</p>';
                    // $('#three header').append(detail);
                    var header = headerhtmlMobile();
                    // $('td:first').css('width', '5em');

                }else{
                    var header = headerhtml();
                }           
            for(var j = 0; j < json.length; j ++){
	            var html = articlesHTML(json[j]);
            	$("tbody").append(html);

            }
            $(".tableHeader").append(header);
}

function headerhtmlMobile(){
    
    var returnHTML = "<th>疫苗提供者</th><th>地址和電話號碼</th>";
        returnHTML += "<th>W</th>";
        returnHTML +=　"<th>C</th>";
        returnHTML += "<th>E</th><th>E23</th><th>E13</th>";

    return returnHTML;
}

function headerhtml(){
    var returnHTML = "<th>疫苗提供者</th><th>地址和電話號碼</th>";
        returnHTML += "<th>季節性流感疫苗(SIV)(孕婦)</th>";
        returnHTML +=　"<th>季節性流感疫苗(SIV)(兒童)</th>";
        returnHTML += "<th>季節性流感疫苗(SIV)(長者)</th><th>肺炎球菌疫苗(23vPPV)(長者)</th><th>肺炎球菌疫苗(PCV13)(長者)</th>";

    return returnHTML;
}

// load doc from DB
function loadDocFromDB(conf) {
  var docsNumPerPage = 3;
 
  if(conf.name == undefined) {
    conf.name = "";
  }
 
  $.getJSON("php/loadDoc.php",
    {curPage: conf.curPage,
    perPage: docsNumPerPage,
    Category: conf.specialist,
    SubCategory: conf.type},
    function(json){
     // console.log(json);

     docNum = json.pop();
        for(var i = 0; i < json[0].length; i ++){
          listOfDoc[i] = json[0][i];   //{ID, Name, FullName, Sex, PhotoUrl, Category, SubCategory, Region, Address_ch, Address_en, Phone, Email, Language, Certification, Latitude_X, Longitude_Y, Map, Service, Remarks, Opentime, CreateDateTime:{date, timezone_type, timezone}, Ref_url, Clinicbot, NumOfArticle, RowNum}
        }
        $('.nameTag').each(function(i,obj){
          $($(this).children()[0]).text(listOfDoc[i].Name);   //doctor name
          $($(this).children()[2]).text(conf.type);   //doctor type
        });

        $('.address').each(function(i,obj){
          $($(this).children()[0]).text(listOfDoc[i].Region);   //address area
          $($(this).children()[1]).text(listOfDoc[i].Address_ch);    //address
        });


        $('.contentSickness').each(function(i,obj){
          var docLink = 'docPage.php?Name=';
          docLink += listOfDoc[i].Name;
          docLink += '&ID=';
          docLink += listOfDoc[i].ID;
          var a = $(this).children()[1];
          $(a).attr('href', docLink);    //set link to doctor
        });
      
  }).fail(function(d, textStatus, error){
    console.error("getJSON failed, status: " + textStatus + ", error: "+error)
  });

}

//===================infinite loop post==================
function articlesHTML(articles){
    // console.log(articles);   //DEBUG
   var returnHTML = "",
        
    returnHTML = "<tr class='tableContent'><td><div><a href='http://www.drcare.ai/Doctor/findoc.php?name=" 
    + articles.Doctor + "'>" + "<u><p>" + articles.Name + "</p><p>" + articles.Doctor
    + "</p></a><div></td><td><div><p>" + articles.Address + "</p></u><a href='tel:852" + articles.Phone  + "' data-rel='external'><u>" + articles.Phone + "</u></a>"
    + "</div></td>";
        returnHTML += "<td>" + temp(articles.SIV_Women) + "</td>";
        returnHTML +=　 "<td>" + temp(articles.SIV_Children) + "</td>";
        returnHTML +=  "<td>" + temp(articles.SIV_ElderSiv) + "</td>"
        + "<td>" + temp(articles.SIV_Elder23) + "</td>" + "<td>" + temp(articles.SIV_Elder13) + "</td>";

    returnHTML += "</tr>"

    return returnHTML;

}

function temp(val){
    var result = "";
    if(val == null){
        result = "不適用";
    }else{
        result = "$" + val;
    }
    return result;
}

function appendArticles(list, y){
    
     if((list.length - y) / 3 > 1){
                    $('#main1').append(randomPost(list[y]));
                    $('#main2').append(randomPost(list[y+1]));
                    $('#main3').append(randomPost(list[y+2]));
                    $('#loading').hide();
                    // y+=3;
                }else if((list.length - y) / 3 == 1){
                    $('#main1').append(randomPost(list[y]));
                    $('#main2').append(randomPost(list[y+1]));
                    $('#main3').append(randomPost(list[y+2]));
                    $('#loading').hide();
                    $('body').append(footer());
                    // y+=3;
                }else if ((list.length - y) / 3 < 1 && (list.length - y) % 3 == 1){
                    $('#main1').append(randomPost(list[y]));
                    $('#loading').hide();
                    $('body').append(footer());
                    // y+=3;
                }else if((list.length - y) / 3 < 1 && (list.length - y) % 3 == 2){
                    $('#main1').append(randomPost(list[y]));
                    $('#main2').append(randomPost(list[y+1]));
                    $('#loading').hide();
                    $('body').append(footer());
                    // y+=3;
                }else{
                    $('#loading').hide();
                }
            
}

function randomPost(json){
    // console.log(json);
    // Generate the post
    var post = '';
    post += '<li>';
    post += '<article id="content">';
    post += '<div class="articleLike"><i class="fa fa-thumbs-up"></i>';
    post += json["Like"]	//like num
    post += '</div>';
    post += '<div class="articleHeader"><span>';
    post += json['Doctor'];
    post += '  ・ </span>';
    post += '<span>';
    post += json['Media'];
    post += '  ・ </span>';
    post += '<span>';
    post += json['CreateDateTime'];
    post += '</span></div>';

    post += '<a class="image"><img src="';
    post += json.ImageUrl;
    post += '" alt="" />';
    post += '</a>';
    post += '<div class="contentTitle"><h3>';
    post += json.Subject;
    post += '</h3></div>';
    post += '<div class="content"><p class="tags">';

    post += '<i class="fa fa-tag"></i>'		//append tags

    // for(var i = 0; i < json['Tags'].length; i ++){		//uncomment to load tags
    	post += '<span>';
    	post += json['Tags'] != "NA"? json["Tags"] : "";
    // 	post += ' ';
    	post += '</span>';
    // }

    post += '</p>';

    post += '<p>';
    post += json.Desc.substring(0,50);
    post += '...';
    post += '</p><ul class="actions"><li class="readBtn"><a href="';
    post += json.Url;
    post += '" class="button">繼續閱讀</a></li></ul></div>';
    post += '</article>';
    post += '</li>';

    return post;

}