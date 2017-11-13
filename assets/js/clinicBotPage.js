$(document).ready(function(){
	loadNewsArticles();
});

function loadNewsArticles(){
	$.getJSON("php/loadNewsArticles.php",
		function(data){
			var newsHTML = "";
			console.log(data);
			for(var i = 0; i < data.length; i++){
				newsHTML += '<section><header><p>' + data[i].Date + '</p><h4>'
				+ data[i].Title + '</h4></header><span class="imageBottom"><img src="images/'
				+ data[i].Image + '" alt=""></span><div class="content"><p>'
				+ data[i].Content + '</p><ul class="actions"><li><a href="'
				+ data[i].Link + '" class="button" target="_blank">閱讀</a></li></ul></div></section>';
			}

			$('.timeline').append(newsHTML);
		});
}