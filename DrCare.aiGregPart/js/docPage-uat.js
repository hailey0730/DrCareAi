var allarticles = [];
var tagList = [];
var tagNum = [];
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
var appendRight = false;
var appendLeft = false;
var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;

$(document).ready(function(){ 
	//alert(GetQueryString("id"));
	var loadSickness = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$(".rightPart").empty();		//remove sickness info if mobile version
	}else{
		loadSickness = true;
	}

	$(document).bind("click",function(e){ 
      	var target = $(e.target); 

      	for(var i = 0; i < clinicNum; i ++){
      		var time = "#time-" + i;
      		var timeRow = "#timeRow-" + i;
      		if(target.closest(time).length == 1){
      			$(timeRow).toggle('normal');
      		}
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

     if(window.matchMedia("(max-width:980px)").matches){
		$('.contentSickness').not(':first').css('display','none');

		loadDocFromDB({
		    curPage: 1,
		    perPage:1,
		    type: doctorType,   //SubCategory
		    specialist: ''      //Category
		  });

	}else{
		$('.contentSickness').css('display','block');

		loadDocFromDB({
		    curPage: 1,
		    perPage:3,
		    type: doctorType,   //SubCategory
		    specialist: ''      //Category
		  });

	}
	});


// ==============load vaccine table=======================
$("#vaccine").css("display","none");
	var url = "https://www.chatbot.hk/DrCare.SIV.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513"
			// + "&doctorID=" + GetUrlParam("ID");
            + "&Region=" + "灣仔" + "&Women=Y&Children=Y&Elder=Y";

// uncomment to show vaccine table
    // $.get(url, function(data){
    //     var json  = JSON.parse(data);
    //     loadVaccine(json);
        
    // });

// ======uncomment to use Doctor QA section===============

	// $('.tabDiv').each(function(i,obj){
	// 	if(this.id == "docArticles"){
	// 		$(this).addClass('blue');
	// 	}else{
	// 		$(this).addClass('grey');
	// 	}
	// });
	// $('.infinitePanel').each(function(i,obj){
	// 	if(this.id != "docArticles"){
	// 		$(this).addClass('inactive');
	// 	}
	// });

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
                   
                    if(scrollIndex1 < articles.length){
                        $('#main1').append(randomPost(articles[scrollIndex1],scrollIndex1));
                        $('#loading').hide();
                        scrollIndex1++;
                    }else if (scrollIndex1 == articles.length){
                        $('#loading').hide();
                        $('body').append(footer());
                        scrollIndex1++;
                    }else{
                        $('#loading').hide();
                    }
		        }
		        }else{
		             // End of the document reached?
		        if ($(document).height() - win.height() - 500 < win.scrollTop()) {
		        // if ($(document).height() - win.height() == win.scrollTop()) {
		                $('#loading').show();

		                appendArticles(articles,scrollIndex1);
		                scrollIndex1 += 3;
		        }
		    }

        	}else{
        		// ======uncomment to use Doctor QA section===============
     //    		if(scrollIndex2 < qaList.length){
     //        		var QAHTML = formatingQAHTML(qaList[scrollIndex2], docName, docGender);
					// $('.QAContent').append(QAHTML);
					// scrollIndex2 ++;
     //    		}else if(scrollIndex2 == qaList.length){
     //    			console.log(hasFooter);
     //    			if(!hasFooter){
	    //         		$('body').append(footer());
	    //         		hasFooter = true;
	    //         	}
	    //         	scrollIndex2++;
     //    		}
                
                
            }
        }

        });
     if(window.matchMedia("(max-width:980px)").matches){
		resize();
	}

});
$(window).bind('resize',onWindowResize);

function resize() {
	if($(window).width() <= 980){
		$('.right').attr("onclick","rightArrow(1)");
		// $('.right').attr("onclick","oneRightArrow()");
		$('.left').attr("onclick","leftArrow(1)");
		// $('.left').attr("onclick","oneLeftArrow()");
		$('.contentSickness').not(':first').css('display','none');

		loadDocFromDB({
	      curPage: nextPage - 1,
	      perPage:1,
	      type: doctorType,   //SubCategory
	      specialist: ''      //Category
	    });
	}else if($(window).width() > 980){
		// append two more
		$('.right').attr("onclick","rightArrow(3)");
		$('.left').attr("onclick","leftArrow(3)");
		$('.contentSickness').css('display','block');

		loadDocFromDB({
	      curPage: nextPage - 1,
	      perPage:3,
	      type: doctorType,   //SubCategory
	      specialist: ''      //Category
	    });
	}
}

function loadSicknessInfo(){
	$.ajax({
	  method: "GET",
	  url: "../DrCare.Disease.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513",
	  data: { Type:  doctorType}
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
		if(json[i]["What"] == null || json[i]["Why"] == null || json[i]["How"] == null){

		}else{
			sickArticles[i] = json[i];
		}
	}

	    var length = 0;
	     if(clinicNum == 1 && sickArticles.length > 0){
	    	length = 1;
	    }else if(sickArticles.length > 0){
	    	length = 2;
	    }else if(sickArticles.length == 0){
	    	$('.rightPart').css('display','none');
	    }

	    for(var i = 0; i < length; i ++){
	    	var imgurl = '../';
	    	imgurl += sickArticles[i].ImageUrl==null?"":sickArticles[i].ImageUrl;

	    	var post = '';
		    post += '<li>';
		    post += '<article id="content">';
		    post += '<a class="image"><img src="';
		    post += sickArticles[i].ImageUrl==null? "":imgurl;
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
		    post += '</p><ul class="actions"><li class="readBtn"><a target="_blank" href="../sickness.php?name=';
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
			$(".articles").css("display", "inline");

			var tagList = '';
			var likeNum = 0;
			var tag = 0;
			
			for(i in json) {
				allarticles[i] = json[i];
				articles[i] = json[i];
				var tagNumObj = {"jsonNum":i,"tagNum":tag};
				// var HTML = formatingArticleHTML(json[i]);
				// $(".docArticles").append(HTML);
				if(json[i]["Tags"]!= "NA" && json[i]["Tags"]!= "N/A" && $.trim(json[i]["Tags"]) != ""){
						tagList += '<div class="tagDiv" onclick="tagDivClicked('+tag+",'" +json[i].Tags+"')" + '">';
						tagList += json[i]["Tags"];
						tagList += '</div>';
						tag++;
						tagNum.push(tagNumObj);
				}else{
					tagNumObj.i = -1;
					tagNum.push(tagNumObj);
				}
			// console.log(json[i]["Like"]);		//DEBUG
				likeNum += parseInt(json[i]["Like"]);
			}
			$("#articleTitle").html(articles.length + '篇有關' + docName + "醫生的文章:");
			$("#articleTags").html(tagList);		//set tags
			$("#likeNum").html(likeNum);		//set like num

			// scrollIndex1++;
	});
}

function loadQA(ID, name, sex){		//sex to determine which doc pic to use
	$.getJSON("php/loadQA.php", 
		{'ID': ID}, 
		function(json){
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

	// top info
	$("#viewname").html(splitDocName(docInfo["Name"])[0] + " "); //name
	$("#commonText1").html(doctorSpan + "的簡介。他的專業是");
	$("#viewtype").html('<a style="color: #11D4EB;" href="./findoc.php?category=' +  docInfo["Category"] + '"><u>' + docInfo["Category"] + '</u></a>' + ' ' + '<a style="color: #11D4EB;" href="./findoc.php?subcategory=' + docInfo["SubCategory"] + '"><u>' + docInfo["SubCategory"] + '</u></a>'); //type

// =======uncomment to show location ===============
	// $("#commonText2").html("，診所位置位於");
	// $("#address").html('<a style="color: #11D4EB;" href="./findoc.php?region=' +  docInfo["Region"] + '"><u>' + docInfo["Region"] + '</u></a>' + " 。"); //address
// ================================================

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
		$("#docWkHr").html('<i class="fa fa-square green"></i>'+'應診中');
		$("#docWkHr").addClass('green');
	}else{
		$("#docWkHr").html('<i class="fa fa-square red"></i>'+'休息中');
		$("#docWkHr").addClass('red');
	}

	$("#docType").html(docInfo["SubCategory"]); //type

	var clinicBranch;
	for(var i = 0; i < docInfo['Clinic'].length; i ++){	
		clinicBranch = contactInfohtml(docInfo['Clinic'][i], i);
		$('.basicInfoDivRight').before(clinicBranch);
	}

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
					'<p id="region">' + doc["Region"] + '</p>' +
					'<p id="docTel">' + "電話： " + doc["Phone"] + '</p>' + 
					'<p id="docAddress">' + "地址： " + doc["Address_ch"] + '</p>' + 
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
                    var detail = '<p>季節性流感疫苗SIV(包括 孕婦-W, 兒童-C, 長者-E), 肺炎球菌疫苗(23vPPV)(只包括長者-E23), 肺炎球菌疫苗(PCV13)(只包括長者-E13)</p>';
                    // $('#three header').append(detail);		//need to determine where to append 
                    var header = headerhtmlMobile();
                    // $('td:first').css('width', '5em');

                }else{
                    var header = headerhtml();
                }           
            for(var j = 0; j < json.length; j ++){
	            var html = vaccineHTML(json[j]);
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
  // var docsNumPerPage = 3;
 
  if(conf.name == undefined) {
    conf.name = "";
  }

  $.getJSON("php/loadDoc-uat.php",
    {curPage: conf.curPage,
    perPage: conf.perPage,
    Category: conf.specialist,
    SubCategory: conf.type},
    function(json){
     docNum = json.pop();
        for(var i = 0; i < json[0].length; i ++){
          listOfDoc[i] = json[0][i];
        }

        $('.nameTag').each(function(i,obj){
        	if(i < conf.perPage){
	          $($(this).children()[0]).text(listOfDoc[i].Name);   //doctor name
	          $($(this).children()[2]).text(conf.type);   //doctor type
	      }
        });

        $('.address').each(function(i,obj){
        	if(i < conf.perPage){
	          $($(this).children()[0]).text(listOfDoc[i].Region);   //address area
	          $($(this).children()[1]).text(listOfDoc[i].Address_ch);    //address
	      }
        });

        $('.contentSickness').each(function(i,obj){
        	if(i < conf.perPage){
		          var docLink = 'docPage.php?Name=';
		          docLink += listOfDoc[i].Name;
		          docLink += '&ID=';
		          docLink += listOfDoc[i].ID;
		          var a = $(this).children()[1];
		          $(a).attr('href', docLink);    //set link to doctor

		        	// set show isOpen and message symbol
		          if(listOfDoc[i]["isOpen"] == 1) {
					$('.isOpenTag').addClass('green');
					$('.fa-square').addClass('green');
					$('.isOpenTag').removeClass('red');
					$('.fa-square').removeClass('red');
					$('.isOpenTag').html('應診中');
				}else{
					$('.isOpenTag').addClass('red');
					$('.fa-square').addClass('red');
					$('.isOpenTag').removeClass('green');
					$('.fa-square').removeClass('green');
					$('.isOpenTag').html('休息中');
				}

				if(listOfDoc[i]["Clinicbot"] != null) {
					$('.clinicBotTag').css('display','block');
				}else{
					$('.clinicBotTag').css('display','none');
				}
			}
        });

        // determine if arrow need to be show
        if(conf.curPage > 1 && !appendLeft){
        	$('.left').css('display','block');
        	appendLeft = true;
        }

        if(conf.curPage == 1 && appendLeft){
        	$('.left').css('display','none');
        	appendLeft = false;
        }

        if(docNum - (conf.curPage * conf.perPage) > 0 && !appendRight){
        	$('.right').css('display','block');
        	appendRight = true;
        }

        if(docNum - (conf.curPage * conf.perPage) <= 0 && appendRight){
        	$('.right').css('display','none');
        	appendRight = false;
        }

  }).fail(function(d, textStatus, error){
    console.error("getJSON failed, status: " + textStatus + ", error: "+error)
  });

}

//===================infinite loop post==================
function vaccineHTML(articles){
    // console.log(articles);   //DEBUG
   var returnHTML = "",
        
    returnHTML = "<tr class='tableContent'><td><div><a href='./findoc.php?name=" 
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
    var result = val==null?"不適用":("$" + val);
    return result;
}

function appendArticles(list, y){
    
     if((list.length - y) / 3 > 1){
                    $('#main1').append(randomPost(list[y], y));
                    $('#main2').append(randomPost(list[y+1], y+1));
                    $('#main3').append(randomPost(list[y+2], y+2));
                    $('#loading').hide();
                    // y+=3;
                }else if((list.length - y) / 3 == 1){
                    $('#main1').append(randomPost(list[y], y));
                    $('#main2').append(randomPost(list[y+1], y+1));
                    $('#main3').append(randomPost(list[y+2], y+2));
                    $('#loading').hide();
                    $('body').append(footer());
                    // y+=3;
                }else if ((list.length - y) / 3 < 1 && (list.length - y) % 3 == 1){
                    $('#main1').append(randomPost(list[y], y));
                    $('#loading').hide();
                    $('body').append(footer());
                    // y+=3;
                }else if((list.length - y) / 3 < 1 && (list.length - y) % 3 == 2){
                    $('#main1').append(randomPost(list[y], y));
                    $('#main2').append(randomPost(list[y+1], y+1));
                    $('#loading').hide();
                    $('body').append(footer());
                    // y+=3;
                }else{
                    $('#loading').hide();
                }
            
}

function randomPost(json, j){
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
    if(json.Tags != "NA" && json.Tags != "N/A" && $.trim(json.Tags) != ""){
    	post += '<i class="fa fa-tag"></i>'		//append tags
    	post += '<span onclick="tagDivClicked(';
    	for(var i = 0; i < tagNum.length; i ++){
    		if(tagNum[i]["jsonNum"] == j){
    			post += tagNum[i]["tagNum"];
    		}
    	}
    	post += ",'";
    	post += json["Tags"];
    	post += "')";
    	post += '">';
    	post += json["Tags"];
    	post += '</span>';
    }

    post += '</p>';

    post += '<p>';
    post += json.Desc.substring(0,50);
    post += '...';
    post += '</p><ul class="actions"><li class="readBtn"><a target="_blank" href="';
    post += json.Url;
    post += '" class="button">繼續閱讀</a></li></ul></div>';
    post += '</article>';
    post += '</li>';

    return post;

}

function rightArrow(perPage){
    loadDocFromDB({
      curPage: nextPage,
      perPage:perPage,
      type: doctorType,   //SubCategory
      specialist: ''      //Category
    });
   nextPage++;

	
}

function leftArrow(perPage){
    loadDocFromDB({
      curPage: nextPage - 2,
      perPage:perPage,
      type: doctorType,   //SubCategory
      specialist: ''      //Category
    });
   nextPage--;
}

function tagDivClicked(i, tag){

	$('.tagDiv').each(function(j,obj){
		if($(this).html() == tag){
			if($(this).hasClass('selected')){
				$(this).removeClass('selected');
				for(var j = 0; j < tagList.length; j++){
					if(tagList[j] == tag){
						tagList.splice(j,1);
						j--;
					}
				}
			}else{
				$(this).addClass('selected');
				tagList.push(tag);
			}
		}
	});

	$('#main1').empty();
	$('#main2').empty();
	$('#main3').empty();
	$('footer').remove();
	scrollIndex1 = 0;
	// filter articles with tag to be show
	filterTag();
}

function filterTag(){
	articles = [];
	for(var i = 0 ; i < allarticles.length; i ++){
		if(tagList.length == 0){
			articles.push(allarticles[i]);
		}else{
			for(var j = 0; j < tagList.length; j ++){
				if(allarticles[i]["Tags"] == tagList[j]){
					articles.push(allarticles[i]);
				}
			}
		}
	}
}