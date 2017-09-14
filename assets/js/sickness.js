$(document).ready(function(){
	var moreCounter = 0;
	var likeNum = 30;

  //content value determine content to show in page
  // var type = "循環系統疾病";
  // var name = sessionStorage.getItem('sickness');
  console.log(name);
  var name = '中風';
  //set content of this page
  $.ajax({
  method: "GET",
  url: "http://www.chatbot.hk/DrCare.Disease.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513",
  data: { Name:  name}
})
  .done(function( msg ) {
    var json = JSON.parse(msg);
    $('#title').text(name);
    $('#whatTitle').text('甚麼是'+name+'? (What)');
    $('#whyTitle').text('為甚麼會'+name+'? (Why)');
    $('#howTitle').text(name+'治療⽅方法? (How)');
    $('#desc').text(json[0].Desc);
    $('#what').text(json[0].What);
    $('#why').text(json[0].Why);
    $('#how').text(json[0].How);
    console.log("done ajax");
  });

  

	$("#like").html(" | "+likeNum+'<img id="likePic" src="images/like-128copy3.png">');
	var liked = false;

    $(".more").click(function(){


        //testing
        var name = "錢德光";
        var category = "兒科";
        var location = "沙田";
        var address = "香港香港";

        //now i can have three pages of doctors, can use loop and moreCounter to determine the content for more than three pages
        if(moreCounter == 0){
        	$('#nameTag1').html("<h3>"+name+"</h3><span>醫⽣生</span><p>"+category+"</p>");
       $('#address1').html("<h3>"+location+"</h3><p>"+address+'</p>');
        }else if (moreCounter == 1){
        	 $('#nameTag2').html("<h3>"+name+"</h3><span>醫⽣生</span><p>"+category+"</p>");
       $('#address2').html("<h3>"+location+"</h3><p>"+address+'</p>');
        }else if (moreCounter ==2){
        	 $('#nameTag3').html("<h3>"+name+"</h3><span>醫⽣生</span><p>"+category+"</p>");
       $('#address3').html("<h3>"+location+"</h3><p>"+address+'</p>');
        }
        moreCounter ++;
        // renew doctors contacts
       
    });

    $("#addFavourite").click(function(){
    	//add to favourite and send info back
    });

    $("#like").click(function(){
    	if(liked == false){
    	likeNum++;
    	$("#like").html(" | "+likeNum+'<img id="likePic" src="images/like-128copy3.png">');
    	liked = true;
    	//send info back 
	    }else{
	    	likeNum--;
    	$("#like").html(" | "+likeNum+'<img id="likePic" src="images/like-128copy3.png">');
    	liked = false;
    	//send info back 
	    }
    });

});