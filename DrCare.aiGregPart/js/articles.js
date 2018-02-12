$(document).ready(function(){
	
	loadArticle("all");

	loadSubCategory();

	$(".article a").click(function(){
		console.log(this.text());
		//window.location.open();
	});

});

function loadSubCategory() {
	$.getJSON("php/loadFilter.php",{},
		function(json){
			for(i in json){
				for(j in json[i]) {
					$("#subCategory").append("<option>" + json[i][j]["SubCategory"] + "</option>");
				}
			}
	});
}

function loadArticle(index){
	$.getJSON("php/getArticle.php", {'target': index}, 
		function(json){
			for(i in json) {
				var appendInfo = formatingArticleHTML(json[i]);

				$(".articles").append(appendInfo);
			}

			// if($(window).width() > 980) {
			// 	// adjust the pic ratio
			// 	var divWidth = $(".image").width(),
			// 		divHeight = divWidth * 3/4;
			// 	$(".image").height(divHeight);
			// 	$(".image").css("margin-top", "calc(50% - " + divHeight/2 + "px)");
			// }
	});
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
	for(i in article["Tag"]) {
		if(tag == "") {
			tag = '<img src="img/tag.png">';
			tag += '<span>' + article["Tag"][i]["Name"] + '</span>';
		}
		else {
			tag += '|<span>' + article["Tag"][i]["Name"] + '</span>';
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
				'<h2><a href="#">' + title + '</a></h2>' +
				'<p>' + tag + '</p>' +
			'</div>' +
			'<div class="meta">' +
				'<time class="published" datetime="' + time + '">' + time + '</time>' +
				'<a href="#" class="author"><span class="name">' + author + '</span><img src="' + authorPic + '" alt="" /></a>' +
				'<a href="#" class="author"><span class="name">' + media + '</span><img src="' + mediaPic + '" alt="" /></a>' +
			'</div>' +
		'</header>' +
		'<div class="Content">' +
			'<div class="image featured"><img src="' + imgURL + '"/></div>' +
			'<p>' + content + '</p>' +
			'<a>原文： ' + articleURL + '</a>' +
			'<footer>' +
				'<ul class="actions">' +
					'<li><a  target= _blank href="' + articleURL + '" class="button big">繼續閱讀</a></li>' +
				'</ul>' +
				'<ul class="stats">' +
					'<li><a href="#" class="icon fa-heart">加到最愛</a></li>' +
					'<li><a href="#" class="icon fa-thumbs-o-up">' + like + '</a></li>' +
				'</ul>' +
			'</footer>' +
		'</div>' +
	'</article>';


	return returnHTML;
}

