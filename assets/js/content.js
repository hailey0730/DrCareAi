var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;  
// var article = {'ID':'', 'CreateDateTime':'', 'Category':'','SubCategory':'', 'Title':'', 'Content':'', 'ImageUrl':'', 'RelatedDoctorCat':''};

var relatedArt = [];

$(document).ready(function() {

//E.g.  http://www.drcare.ai/content.php?ArticleID=1
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var articleID = getUrlParameter('ArticleID');
if(articleID == null){
	//content value determine content to show in page
	articleID = sessionStorage.getItem('articleContent');
}
  if(window.matchMedia("(max-width:720px)").matches){
    $('#content').css("margin-right", 5+'em');
  }else{
    $('#content').css("margin-right", $('body').width() * 1/3 + 'px');  
  }
	var articleContent = {'ID':'', 'CreateDateTime':'', 'Category':'','SubCategory':'', 'Title':'', 'Content':'', 'ImageUrl':'', 'RelatedDoctorCat':''};		

loadContent({
	ArticleID: articleID
});

});

$(window).bind('resize',onWindowResize);

function resize(newWidth,newHeight) {
  if(newWidth > 720){

    $('#content').css("margin-right", newWidth * 1/3 + 'px');
  }else{
    $('#content').css("margin-right", 5+'em');

  }

}

function loadContent(conf){
	$.getJSON("php/loadArticleContent.php",
		{ArticleID: conf.ArticleID},
		function(json){
			articleContent = json[0];
	
	//set ArticleID in link in share button
	var fbShareBtn = '<div class="fb-like" data-href="http://www.drcare.ai/content.php?ArticleID='
	+ articleContent.ID + '" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>';
	
	$('#title').append(fbShareBtn);


	//set content
	$('#title h1').text(articleContent.Title);
	var subTitle = articleContent.Category;
	subTitle += ' | ';
	subTitle += articleContent.SubCategory;
	$('#title a').text(subTitle);
	var link = 'searchHealthArticle.php?Category=';
	link += articleContent.Category;
	link += '&SubCategory=';
	link += articleContent.SubCategory;
	$('#title a').attr("href", link);	//link to other articles with same tags

	var imgurl= 'images/健康認文章圖片-20171012T090814Z-001/健康認文章圖片/';
	imgurl += articleContent.ImageUrl;

	$('#titleImg').attr("src", imgurl);	
	$('#content').html(articleContent.Content);

	var docKind = articleContent.RelatedDoctorCat;
	docKind += '醫生';
	$('.relatedoc').text(docKind);
	var docLink = 'http://www.drcare.ai/Doctor/findoc.php?subcategory=';
	docLink += articleContent.RelatedDoctorCat;
	$('.relatedoc').attr('href', docLink);

	loadRelatedArticles({
	SubCategory: articleContent.SubCategory
});
});
}

function loadRelatedArticles(conf){
	$.getJSON("php/loadArticleContent.php",
		{ArticleID: '',
		SubCategory:conf.SubCategory},
		function(json){
			for(var i = 0; i < json.length; i ++){
    		relatedArt[i] = json[i];
    	}

var display = [];
	//set more articles
	$('article').each(function(i,obj){
		var rand = Math.floor(Math.random()*relatedArt.length);
		if(relatedArt.length <= 3 && relatedArt[i] != null){
			$(this).append(otherArt(relatedArt[i]));
		
		}else if(relatedArt.length > 3){
			if(i == 0){
				display[i] = rand;
				$(this).append(otherArt(relatedArt[rand]));
			}else{
				while(rand == display[i-1] || rand == display[i-2]){
					rand = Math.floor(Math.random()*relatedArt.length);
				}
				display[i] = rand;
				$(this).append(otherArt(relatedArt[rand]));
			}
		}
	});


		});
}

function passArticle(article){
     window.sessionStorage.setItem('articleContent', article);
     window.location.replace("content.php");
}

function otherArt(article){
	var imgurl= 'images/健康認文章圖片-20171012T090814Z-001/健康認文章圖片/';
	imgurl += article.ImageUrl;
	var innerHtml = '<div class="content"><a onclick=passArticle("';
	innerHtml += article.ID;
	innerHtml += '") class="image main" style="cursor:pointer;">							<div>							<img class="contentImage" src="';
	innerHtml += imgurl;
	innerHtml += '" alt="" data-position="center" />							</div>								<p class="imageTitle">';
	innerHtml += article.Title;
	innerHtml += '</p>								</a>							</div>';
	return innerHtml;
}