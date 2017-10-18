// var article = {'ID':'', 'CreateDateTime':'', 'Category':'','SubCategory':'', 'Title':'', 'Content':'', 'ImageUrl':'', 'RelatedDoctorCat':''};

var relatedArt = [];

$(document).ready(function() {
	//content value determine content to show in page
	var articleID = sessionStorage.getItem('articleContent');

  if(window.matchMedia("(max-width:720px)").matches){
    $('#content').css("margin-right", 5+'em');
  }else{
    $('#content').css("margin-right", $('body').width() * 1/3 + 'px');  
  }
	var articleContent = {'ID':'', 'CreateDateTime':'', 'Category':'','SubCategory':'', 'Title':'', 'Content':'', 'ImageUrl':'', 'RelatedDoctorCat':''};		

	$.ajax({
        method:"GET",
        url:"DrCare.ArticleHealth.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513",
        data: { ArticleID :  articleID}		
    }).done(function(data){
        var json = JSON.parse(data);
	
	articleContent = json[0];

	//set content
	$('#title h1').text(articleContent.Title);
	var subTitle = articleContent.Category;
	subTitle += ' | ';
	subTitle += articleContent.SubCategory;
	$('#title p').text(subTitle);
	var link = 'searchHealthArticle.php?Category=';
	link += articleContent.Category;
	link += '&SubCategory=';
	link += articleContent.SubCategory;
	$('#title a').attr("href", link);	//link to other articles with same tags
	$('#titleImg').attr("src", articleContent.ImageUrl);	
	$('#content').html(articleContent.Content);

	var docKind = articleContent.RelatedDoctorCat;
	docKind += '醫生';
	$('.relatedoc p').text(docKind);
	var docLink = 'http://www.drcare.ai/Doctor/findoc.php?subcategory=';
	docLink += articleContent.RelatedDoctorCat;
	$('.relatedoc').attr('href', docLink);

$.ajax({
        method:"GET",
        url:"DrCare.ArticleHealth.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513",
        data: { SubCategory :  articleContent.SubCategory}		//suppose to return the exact article
    }).done(function(data){
    	var json = JSON.parse(data);
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

});



});

function passArticle(article){
     window.sessionStorage.setItem('articleContent', article);
     window.location.replace("content.php");
}

function otherArt(article){
	var innerHtml = '<div class="content"><a onclick=passArticle("';
	innerHtml += article.ID;
	innerHtml += '") class="image main" style="cursor:pointer;">							<div>							<img class="contentImage" src="';
	innerHtml += article.ImageUrl;
	innerHtml += '" alt="" data-position="center" />							</div>								<p class="imageTitle">';
	innerHtml += article.Title;
	innerHtml += '</p>								</a>							</div>';
	return innerHtml;
}