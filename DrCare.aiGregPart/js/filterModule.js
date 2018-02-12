$(document).ready(function(){ // Jquery, click the address and relocate the map

	$(document).bind("click",function(e){ 
      	var target = $(e.target); 
      	
		if(target.closest(".showSearchDiv").length == 1 && $(window).width() <= 479){ 
      		target.parent().parent().find(".searchRow").toggle("normal");
		}
		// if(target.closest(".showSearch").length == 1 && $(window).width() <= 479){ 
  //     		target.parent().find(".searchRow").toggle("normal");
		// }
    });

});

var Categories = {};

(function loadRegion() {
	$.getJSON("php/loadRegion.php",
		{},
		function(regions){
			for (i in regions) {
				$("#area").append("<option value=" + regions[i]["Region"] + ">" + regions[i]["Region"] + "</option>");
			}

		var initialRegion = decodeURI(GetUrlParam("region"));
		initialRegion = (initialRegion == "null")?"":initialRegion;
		if(initialRegion != "") 
			$("#area option[value=" + initialRegion + "]").prop("selected","selected");

	});
})();

function loadCategory(callback) {
	if(callback == undefined) {
		callback=null;
	}

	$.getJSON("php/loadFilter.php",
		{},
		function(json){
			Categories = json;
			var initialCategory = decodeURI(GetUrlParam("category"));
			if(initialCategory == "undefined" || initialCategory == "null" || initialCategory == "") {
				initialCategory = "all";
			}

			for(i in Categories){
				$("#specialist").append("<option value=" + i + ">" + i + "</option>");
			}
			if(initialCategory != "all") {
				$("#specialist option[value=" + initialCategory + "]").prop("selected","selected");
			}
			loadSubcategory(initialCategory, callback);
			
	});
}


function loadSubcategory(category, callback) {
	if(callback == undefined) {
		callback=null;
	}

	$("#type").html('<option value="" selected="">全部專科</option>');

	for(i in Categories){
		if(category == "all") {
			for(j in Categories[i]) {
				if(Categories[i][j]["SubCategory"] != "")
					$("#type").append("<option value=" + Categories[i][j]["SubCategory"] + ">" + Categories[i][j]["SubCategory"] + "</option>");
			}
			
		}
		else if(category == i) {
			for(j in Categories[i]) {
				if(Categories[i][j]["SubCategory"] != "")
					$("#type").append("<option value=" + Categories[i][j]["SubCategory"] + ">" + Categories[i][j]["SubCategory"] + "</option>");
			}
		}
	}

	if(callback != null) {
		callback();
	}
}

function showDesc(SubCategory) {
	for(i in Categories){
		for(j in Categories[i]) {
			if(Categories[i][j]["SubCategory"] == SubCategory) {
				$("#searchIntro").css("display", "inline");
				$("#searchIntro").find(".introPic").attr("src", Categories[i][j]["ImageUrl"]);
				$("#searchIntro").find(".keyWord").html(SubCategory);
				$("#searchIntro").find(".intro").html(Categories[i][j]["Desc"]);
				return;
			}
		}
	}

}

function resetFilter(filter) {
	var id = "#" + filter;
	$(id).val("");
	updateSearchText(1);
}
//  end

function passToURL() {
	var curURL = "http://www.drcare.ai/Doctor/findoc.php?";

	$.getJSON("php/passToNLP.php",
		{word: $("#searchInput").val()},
		function(json){
			var region = json["LocationDistrict"];
			var name = json["DoctorName"];
			var category = json["DoctorCategory"];
			var subcategory = json["DoctorSubCategory"];
			var param = "";

			if(region != null && region != "" && region != undefined) {
				if(param != "") {
					param += "&";
				}
				param += "region=" + region;
			}
			if(category != null && category != "" && category != undefined) {
				if(param != "") {
					param += "&";
				}
				param += "category=" + category;
			}
			if(subcategory != null && subcategory != "" && subcategory != undefined) {
				if(param != "") {
					param += "&";
				}
				param += "subcategory=" + subcategory;
			}
			if(name != null && name != "" && name != undefined) {
				if(param != "") {
					param += "&";
				}
				param += "name=" + name;
			}

			curURL += param;
			
			window.location.href = curURL;
	});
	
}

function GetUrlParam(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = encodeURI(window.location.search).substr(1).match(reg);
	if(r!=null)return unescape(r[2]); return null;
}





