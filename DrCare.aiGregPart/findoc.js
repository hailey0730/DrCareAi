$(document).ready(function(){ // Jquery, click the address and relocate the map

	$(document).bind("click",function(e){ 
      	var target = $(e.target); 
      	
		if(target.closest(".nextPage").length == 1){ 
      		if(parseInt($("#curPage").html()) < parseInt($("#totalPage").html())) {
      			changePage(parseInt($("#curPage").html()) + 1);
      		}
		}

		if(target.closest(".prePage").length == 1){ 
      		if(parseInt($("#curPage").html()) > 1) {
      			changePage(parseInt($("#curPage").html()) - 1);
      		}
		}

		if(target.closest(".firstPage").length == 1){ 
      		changePage(1);
		}

		if(target.closest(".clinicbotBtn").length == 1){ 
      		
		}
		else if(target.closest(".docArea").length == 1){
			$("#area").val($(target).html());
			updateSearchText(1);
		}
		else if(target.closest(".row").length == 1){
			var docName = $(target).closest(".row").find(".docName").html();
			var docID = $(target).closest(".row").find(".docID").html();
			var url = "docPage.php?Name=" + docName + "&ID=" + docID

			var category = $("#specialist").val();
			var region = $("#area").val();
			var subcategory = $("#type").val();
			if(category != "") {
				url += "&category=" + category;
			}
			if(region != "") {
				url += "&region=" + region;
			}
			if(subcategory != "") {
				url += "&subcategory=" + subcategory;
			}

			window.location.href = url; 

		}

    }).bind("mouseover",function(e){ 
      	var target = $(e.target); 
      	//search
      	if(target.closest(".clinicbotBtn").length == 1){ 
      		$(".row").css("background", "rgb(252,252,252)");
		}
		else if(target.closest(".docArea").length == 1){ 
      		$(".row").css("background", "rgb(252,252,252)");
		}
		else if(target.closest(".row").length == 1){
			$(target).closest(".row").css("background", "rgb(237,237,237)");
		}
		else {
			$(".row").css("background", "rgb(252,252,252)");
		}
    }).bind("mouseout",function(e){ 
      	var target = $(e.target); 
      	//search
      	if(target.closest(".row").length == 1){
			$(target).closest(".row").css("background", "rgb(252,252,252)");
		}
    });

	$(".filter").change(function(){
		$("#curPage").html("1");
		updateSearchText(1);
	}); 

	$("#specialist").change(function(){
		loadSubcategory($(this).val());
		resetFilter("type");
		updateSearchText(1);
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

		var doctorName = decodeURI(GetUrlParam("name"));
		if(doctorName != "null") {
			$("#searchText").html("<p>你正在搜尋有關<span>" + doctorName + "</span>醫生</p>");

			// load the doc through conf
			loadDocFromDB({
				curPage: 1,
				type: "",
				area: "",
				specialist: "",
				name: doctorName
			});
		}
		else {
			updateSearchText(1);
		}
		
		
	});

	//updatetest in loadFileter.php

});

// display the docs in table
function updateTable(doctors){
  	var printInfo = "";
  	doctorsFileName = [];

// from the empty line
// ((doctors[i]["Clinicbot"] == null)?"<button class='clinicbotBtn hidden'>使用 Clinicbot</button>":"<button class='clinicbotBtn'>使用 Clinicbot</button>")

  	for(var i=0; i<doctors.length; i++) {
  		printInfo += "<div class='row'>" +
  		"<div class='num'>" + (i+1) + 
  		"</div>" +
  		"<div class='docInfo'>" +
  		"<div class='docNameDiv'><p>" +
  			"<span class='docName'>" + doctors[i]["Name"].split(" ", 1) + "</span>" +
  			"<span class='docTitle'>醫生</span></p>" +
  			"<p class='docType'>" + doctors[i]["SubCategory"] +
  		"</p></div>" +
  		
  		"<div class='addressInfo'>" +
	  		"<p class='docArea'>" + doctors[i]["Region"] + "</p>" +
	  		"<p class='docAddress'>" + doctors[i]["Address_ch"] + "</p>" +
	  	"</div>" +
  		"<p hidden='hidden' class='docID'>" + doctors[i]["ID"] + "</p></div></div>";
  	}

	$("#searchResults").html("");
	$("#searchResults").append("<div id='searchIntro'><img class='introPic' src='img/logo.png'><p class='keyWord'></p><p class='intro'></p></div>");
	$("#searchResults").append(printInfo);


	var w;
	var temp = $(".intro").html();

	if($(window).width() <= 479) {
		w = $(".intro").width()/13
	}
	else {
		w = $(".intro").width()/18
	}
	
	if(temp.length >= 2*w) {
		$(".intro").html(temp.substring(0,2*w-5) + "...");
	}
	else {
		$(".intro").html(temp);
	}

}

function updatePageCount(resultCount, numPerPage) {
	var n = Math.ceil(resultCount/numPerPage);
	var curPage = parseInt($("#curPage").html());

	$("#totalPage").html(n);

	$("#resultText").html("總共有"+ resultCount +"結果, 正在顯示" + (numPerPage * (curPage - 1) + 1) + "-" + (numPerPage * curPage));

	$(".pages").html("");


	$(".lastPage").unbind("click").click(function(){
		changePage(n);
	});


	if(n < 5) {
		for(var i=1; i <= n; i++) {
			if(curPage == i) {
				$(".pages").append("<p style='font-weight: bold;'>" + i + "</p>");
			}
			else {
				$(".pages").append("<p>" + i + "</p>");
			}
		}
		return;
	}


	var startPage = ((curPage - 2) > 0)?(((curPage + 2) < n)?(curPage - 2):(n - 4)):1;

	if(startPage > 1) {
		$(".pages").append("<p>...</p>");
	}

	for(var i=startPage; i<startPage+5; i++) {
		if(curPage == i) {
			$(".pages").append("<p style='font-weight: 900;'>" + i + "</p>");
		}
		else {
			$(".pages").append("<p>" + i + "</p>");
		}
	}

	if(startPage <= n-5) {
		$(".pages").append("<p>...</p>");
	}

	$(".pages").children("p").unbind("click").click(function(){
		if($(this).html() == "...") return;
		changePage($(this).html());
	});

}

function changePage(page) {
	updateSearchText(page);
	$("#curPage").html(page);
    scrollToTop();

}

// end

// load doc from DB
function loadDocFromDB(conf) {
	var docsNumPerPage = 10;
	var address = decodeURI(GetUrlParam("Address")); //return string "null" if not exist
	if(address == "null") {
		address = "";
	}
	if(conf.name == undefined) {
		conf.name = "";
	}
	// conf.curPage;
	// conf.specialist;
	// conf.area;
	// conf.type;
	// conf.keyword;

	$.getJSON("php/loadDoc.php",
		{curPage: conf.curPage,
		perPage: docsNumPerPage,
		Category: conf.specialist,
		SubCategory: conf.type,
		Region: conf.area,
		Address: address,
		Name: conf.name},
		function(json){
			//console.log(json);
			if(json[0] == null || json[0] == undefined || json[0] == "") {
				$("#searchResults").html("");
				$(".pageControl").css("display", "none");
				$("#resultText").html("暫無結果， 請重新搜索");
				return;
			}

			$(".pageControl").css("display", "inline");
			updatePageCount(json.pop(), docsNumPerPage);

			deleteMarkers();
			for(var i=0; i<json[0].length; i++){
				pinAddress(json[0][i]);
			}
			
			updateTable(json[0]);

			// intro info
			if($("#type").val() != "") {
				showDesc($("#type").val());
			}
	});

}
// end

//  for update the earch text
function updateSearchText(pageCount) {
	if(pageCount == undefined) {
		pageCount = 1;
	}

	var text = "",
		specialist = $("#specialist").val(),
		area = $("#area").val(),
		type = $("#type").val();

	if(specialist == "" && area == "" && type == "") {
		text = "按以上的選項開始搜尋";
	}
	else {
		text = "<p>你正在搜尋有關";
		text += (area == "")?"":("<span>" + area + "</span>的");
		text += (type == "")?"":("<span>" + type + "</span>的");
		text += (specialist == "")?"醫生":("<span>" + specialist +  "</span></p>");
	}

	$("#searchText").html(text);

	// load the doc through conf
	loadDocFromDB({
		curPage: pageCount,
		type: type,
		area: area,
		specialist: specialist
	});

}
//  end

// get url parameter
function GetUrlParam(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = encodeURI(window.location.search).substr(1).match(reg);
	if(r!=null)return unescape(r[2]); return null;
}

function scrollToTop(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(scrollToTop);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
}




