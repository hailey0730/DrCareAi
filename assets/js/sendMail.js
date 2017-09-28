var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;   
var testList = [];
$(document).ready(function() {

//get hospital time
$.ajax({
		method: "GET",
		url: "http://www.chatbot.hk/DrCare.ANEWaitingTime.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513",
		xhrFields: {
        withCredentials: false
    },
    crossDomain: true,
    headers:{},
    success: function(msg){
    	var json = JSON.parse(msg);
		for(var i = 0; i < json.length; i++){
			testList[i] = json[i];
		}

		$('area').each(function(i,obj){
		// set time as title to be displayed in tooltip
		if(i<18){
			var hours = 0;
			hours = testList[i].等候時間;
			var estimate = "";
			if(hours > 5){	//some number 
			estimate = ">";
			hours = 5;
			}else{
			estimate = "~";
			} 
			$(this).attr("title", estimate + hours + "小時");

		}
	});
		if(window.matchMedia("(max-width:1208px)").matches){
		resize();
	}else{
		$('area[title]').tooltips();
	}
    },
    error:function(){}
	});
	// .done(function( msg ) {
		
	// });
	//======test other browser==================
	// $('area').each(function(i,obj){
	// 	// set time as title to be displayed in tooltip
	// 	if(i<18){
			
	// 		$(this).attr("title", '大約 5' + "小時");

	// 	}
	// });

	// 	$('area[title]').tooltips();
	//=========test other browser end==========

//===========send email===================
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

		 // $.post("assets/js/sendEmail.php",
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
	if($(window).width() < 1208){
		$('.right').attr("src","images/map-hongkong.png");
		$('.tooltip').css('opacity', '0');	
	}else{
		$('.tooltip').css('opacity','1');	
		$('.tooltip').each(function(i,obj){
			var area = $('map').children();
			var coordPosition = $(area[i]).attr("data-pos");
		    var positionArray = coordPosition.split(',');

		      var imgPos = $('.right').offset();
		      var imgWidth = $('.right').width();
		      var imgHeight = $('.right').height();
		      $(this).css({
		      	// 'position':'absolute',
		          'left':  imgPos.left + parseInt(positionArray[0]) * (imgWidth/1672) + 'px', 
		          'top': imgPos.top + parseInt(positionArray[1]) * (imgHeight/1156) + 'px'
		      });
		});

		$('.right').attr("src", "images/Mapfordesktop/Map_normal.png");
	}
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