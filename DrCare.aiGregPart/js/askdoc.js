$(document).ready(function(){ 
	LoadPosts();
	//alert($(".titleInfo")[0].innerHTML);
	$("#askBtn").click(function(){
		window.location.href="postQuestion.html";
	});

	$(".postLink").click(function(){
		window.location.href="posts/template.html";
	});

	
});


var totalNum;
var pageNum;
var posts;
var doctorsFileName = [];



function ShowPostInfo(post,i) {
	var postHTML = "<div class='postRow'><div class='topicIconDiv'><img class='topicIcon' src='img/post.png'></div><div class='titleInfoDiv'>";
	//change the a href
	postHTML += "<a href='posts/template.html'><p><span class='askType'></span><span class='askTitle'></span></p><p class='askContent'></p></a>";
	postHTML += "</div><div class='likeInfoDiv'><img src='img/like.png' class='likeIcon'><p class='likeNum'></p></div><div class='userInfoDiv'><p class='postUser'></p><p class='postDate'></p></div><div class='replyInfoDiv'><p class='replyDocName'></p><p class='replyDocType'></p><p class='replyDate'></p><p class='replyNum'></p></div></div>";

	$(".postDiv").append(postHTML);

	// post the information
	$(".askType")[i].innerHTML = "["+post[2]+"問題"+"]";
	$(".askTitle")[i].innerHTML = post[1];
	$(".askContent")[i].innerHTML = post[3];
	$(".likeNum")[i].innerHTML = post[4];
	$(".postUser")[i].innerHTML = post[5];
	$(".postDate")[i].innerHTML = post[6];
	if(post[7] == "None"){
		$(".replyDocName")[i].innerHTML = "N/A";
		$(".replyDocType")[i].innerHTML = "N/A";
		$(".replyDate")[i].innerHTML = "N/A";
	}
	else{
		$(".replyDocName")[i].innerHTML = post[7] +" 醫生";
		$(".replyDocType")[i].innerHTML = post[8];
		$(".replyDate")[i].innerHTML = post[9];
	}
}
// 0-id  1-title  2-type  3-content  4-likenum  5-postuser  6-postdate  7-latestname  8.latesttype  9.latestdate

function LoadPosts(){ //load the info of posts
	posts = [];
	pageNum = 0;

	var strType=document.getElementById("type").value;
	var strArea=document.getElementById("area").value;

	xmlhttp = getXmlHttpObject();
	if(xmlhttp==null) {
		alert("Error");
	}

	var request_url = "php/loadPost.php";
	// request_url = request_url + "?q=" + strType;
	// request_url = request_url + "&p=" + strArea;
	request_url = request_url + "?sid=" + Math.random(); //avoid cache

	xmlhttp.open("GET",request_url,true);
	xmlhttp.send(null);

	xmlhttp.onreadystatechange=function(){

		if(xmlhttp.readyState==4 || xmlhttp.readyState=="complete"){

			var jsonObject = eval("("+xmlhttp.responseText+")"); 
			
			for(var i=0; i<jsonObject.length; i++){
				posts[i]= jsonObject[i];
				ShowPostInfo(posts[i], i);
			}
		}
	}
}

function getXmlHttpObject(){ //create xmlttp object
	var xmlhttp = null;
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else{// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}

function openLink(title) {
	alert(title.parent());
}







