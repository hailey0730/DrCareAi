var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;   
$(document).ready(function() {

$('area').each(function(i,obj){
	// set time as title to be displayed in tooltip
	if(i<18){
		// var hours = 0;
		// // hours = json[i]. //something about time
		// hours = testList[i].等候時間;
		// var estimate = "";
		// if(hours > 5){	//some number 
		// estimate = "超過";
		// hours = 5;
		// }else{
		// estimate = "大約";
		// } 
		// $(this).attr("title", estimate + hours + "小時");
		$(this).attr("title", "大約" + 4 + "小時");

	}
});
if(window.matchMedia("(max-width:1300px)").matches){
		resize();
	}
$('.right').mapster({
  		fillOpacity: 0, 
  		singleSelect: true
  	});


	$("#sendMail").click(function(){
		$(".error").hide();
		var hasError = false;
		// var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

		var emailToVal = "info@clinicbot.io";

		var clientName = $('#clientName').val();
		if(clientName == ''){
			$('#clientName').after('<span class="error">You forgot to enter your name.</span>');
			hasError = true;
		}

		var emailFromVal = $("#email").val();
		if(emailFromVal == '') {
			$("#email").after('<span class="error">You forgot to enter the email address to send from.</span>');
			hasError = true;
		} else if(emailFromVal.indexOf("@") == -1 || emailFromVal.indexOf(".") == -1) {
			$("#email").after('<span class="error">Enter a valid email address to send from.</span>');
			hasError = true;
		}

		var categoryVal = $("#category").val();
		if(categoryVal == '') {
			$("#category").after('<span class="error">You forgot to enter the category.</span>');
			hasError = true;
		}

		var messageVal = $("#message").val();
		if(messageVal == '') {
			$("#message").after('<span class="error">You forgot to enter the message.</span>');
			hasError = true;
		}

		if(hasError == false) {
					$(this).hide();
		 $("#sendMail li.buttons").append('<img src="/images/template/loading.gif" alt="Loading" id="loading" />');
		 // show client it is loading


		 // $.post("/play/jqueryajaxform/sendEmail.php",
		 // 	{ emailTo: emailToVal, clientName: clientName, emailFrom: emailFromVal, category: categoryVal, message: messageVal },
		 // 	function(data){
		 // 		$("#sendMail").slideUp("normal", function() {

		 // 			$("#sendMail").before('<h1>Success</h1><p>Your email was sent.</p>');
		 // 		});
		 // 	}
		 // 	); 
		} 

		return false;
		});
});

 $(window).bind('resize',onWindowResize);

 //=======================================================
// Resize the map to fit within the boundaries provided
function resize() {
	var image =  $('img'),
	imgWidth = image.width(),
	imgHeight = image.height(),
	newWidth=0,
	newHeight=0;
	var imgPos = $('.right').offset();
	var imgWidth = $('.right').width();
	var imgHeight = $('.right').height();
	if($(window).width() < 1300){
		$('.right').attr("src","images/map-hongkong.png");
		$('.tooltip').removeClass('active');
		// var locations = $('map > area').slice(-3);
		// $(locations[0]).attr("coords","414,264,516,263,537,249,539,300,550,302,558,357,513,326,515,340,483,325,457,350,436,347,438,326,418,320,408,315");
		// $(locations[0]).attr("onclick", "showTime('select_KL.png','area1');return false;");
		 // newWidth = $('.split').children().width();	//to make width = .split > * width

	    // image.mapster('resize',newWidth,newHeight,resizeTime); 
	    // $('.content').width( $('.split.reversed').width() / 2 );

	}else{

	$('area').each(function(i,obj){
		if(i<18){
			$(this).attr("title", "超過5小時");

			$('area[title]').tooltips();
			$('.right').attr("src", "images/Mapfordesktop/Map_normal.png");
	}

		});
		
		
	}
    // newWidth = $('.split').children().width();	//to make width = .split > * width
    // console.log(newWidth);

}

// Track window resizing events, but only actually call the map resize when the
// window isn't being resized any more

function onWindowResize() {
// console.log($('.posts').css("width"));
var curWidth = $(window).width(),
curHeight = $(window).height(),
checking=false;
if (checking) {
	return;
}
checking = true;
window.setTimeout(function() {
	var newWidth = $(window).width(),
	newHeight = $(window).height();
	if (newWidth === curWidth &&
		newHeight === curHeight) {
		resize(newWidth,newHeight);

}
checking=false;
},resizeDelay );
}

//=======map time================
// IIFE to ensure safe use of $
(function( $ ) {

  // Create plugin
  $.fn.tooltips = function(el) {

  	var $tooltip,
  	$body = $('body'),
  	$el;

    // Ensure chaining works
    return this.each(function(i, el) {

      $el = $(el).attr("data-tooltip", i);  //area
      if($el.attr("data-key") != "area1" || $el.attr("data-key") != "area2" || $el.attr("data-key") != "area3"){

      // Make DIV and append to page 
      var $tooltip = $('<div class="tooltip" data-tooltip="' + i + '">' + $el.attr('title') + '<div class="arrow"></div></div>').appendTo("body");

      // Position right away, so first appearance is smooth
      // var linkPosition = $el.position();
      // var coordPosition = $el.attr("alt");
      var coordPosition = $el.attr("data-pos");
      var positionArray = coordPosition.split(',');

      // var positionArray = coordPosition.split(',').map(function(i){
      // 	return parseInt(i);
      // });
      
      var imgPos = $('.right').offset();
      var imgWidth = $('.right').width();
      var imgHeight = $('.right').height();
      
      $tooltip.css({
      	// 'position':'absolute',
          'left':  imgPos.left + parseInt(positionArray[0]) * (imgWidth/1672) + 'px', 
          'top': imgPos.top + parseInt(positionArray[1]) * (imgHeight/1156) + 'px'
      });

      $el
      // Get rid of yellow box popup
      .removeAttr("title")

      // always show

      $el = $(this);

      $tooltip = $('div[data-tooltip=' + $el.data('tooltip') + ']');

        // Reposition tooltip, in case of page movement e.g. screen resize                        
        // var linkPosition = $el.position();

        $tooltip.css({
          // 'position':'absolute',
          'left':  imgPos.left + parseInt(positionArray[0]) * (imgWidth/1672) + 'px', 
          'top': imgPos.top + parseInt(positionArray[1]) * (imgHeight/1156) + 'px'
      });

        // Adding class handles animation through CSS
        $tooltip.addClass("active");
    }

});


}

})(jQuery);
//==================================