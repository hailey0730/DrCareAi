$(document).ready(function() {
	//content value determine content to show in page
	var content = sessionStorage.getItem('content');
	var moreCounter = 0;
	console.log(content);

	//set content
	$('#title h1').text();
	$('#title p').text();
	$('#titleImg').html();
	$('#content').text();

	//set more articles
	$('#contentImage1').html();
	$('#imageTitle1').text();
	$('#contentImage2').html();
	$('#imageTitle2').text();
	$('#contentImage3').html();
	$('#imageTitle3').text();

	 $(".more").click(function(){
        //testing
        var src = "images/Rectangle33Copy.png";
        var title = "如何診斷過度活躍障礙和自閉症";
         

        //now i can have three pages of doctors, can use loop and moreCounter to determine the content for more than three pages
        if(moreCounter == 0){
        $('#contentImage1').html("<img class='contentImage' src="+src+" alt='' data-position='center' />");
       $('#imageTitle1').text(title);
       console.log("change");
        }else if (moreCounter == 1){
        	 
        }else if (moreCounter ==2){
        	
        }
        moreCounter ++;
        // renew doctors contacts
       
    });


});