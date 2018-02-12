$(document).ready(function(){ // Jquery, click the address and relocate the map

	$(document).bind("click",function(e){ 
      	var target = $(e.target); 


    })

	// load the doc through conf
	loadDocFromDB({
		curPage: 1,
		type: "",
		area: "",
		specialist: ""
	});

});

/******************************/
/******************************/
/******************************/
/******************************/
/******************************/
/*****  Refresh Doc Table *****/



// display the docs in table
function updateTable(doctors){
  	var printInfo = "";
  	doctorsFileName = [];

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
  		"<button class='clinicbotBtn'>使用 Clinicbot</button>" +
  		"<div class='addressInfo'>" +
	  		"<p class='docArea'>" + doctors[i]["Region"] + "</p>" +
	  		"<p class='docAddress'>" + doctors[i]["Address_ch"] + "</p>" +
	  	"</div>" +
  		"<p hidden='hidden' class='docID'>" + doctors[i]["ID"] + "</p></div></div>";
  	}

	$("#searchResults").html("");
	$("#searchResults").append("<div id='searchIntro'><img class='introPic' src='img/logo.png'><p class='keyWord'></p><p class='intro'></p></div>");
	$("#searchResults").append(printInfo);


	$(".docNameDiv > p > .docName").unbind("click").click(function(){
		var docID = $(this).closest(".docInfo").find(".docName").html();
		window.location.href = "docPage.php?Name=" + docID; 
	});	
}

// end

// load doc from DB
function loadDocFromDB(conf) {
	var docsNumPerPage = 20;

	$.getJSON("php/loadDoc.php",
		{curPage: conf.curPage,
		perPage: docsNumPerPage,
		Category: conf.specialist,
		SubCategory: conf.type,
		Region: conf.area},
		function(json){
			json.pop();

			updateTable(json);

	});

}
// end








