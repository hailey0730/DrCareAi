$(document).ready(function() {
	//content value determine content to show in page
	var content = sessionStorage.getItem('content');
	var moreCounter = 0;
	console.log(content);

	//set content
	$('#title h1').text();
	$('#title p').text();
	$('#title a').attr("href", );	//link to other articles with same tags
	$('#titleImg').attr("src", );	
	$('#content p').text();

	//set more articles
	$('.contentImage').each(function(i,obj){
		$(this).attr("src", );
	});
	$(".imageTitle").each(function(i, obj){
		$(this).text();
	});


});