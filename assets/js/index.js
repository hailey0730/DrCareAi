var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;   
var testList = [];
$(document).ready(function() {

//get hospital time
loadMapTime();
});

 $(window).bind('resize',onWindowResize);

 //================load map time==========================
 function loadMapTime(){
 	$.getJSON('php/loadMapTime.php',
 		function(json){
 			// console.log(json);
			for(var i = 0; i < json.length; i++){
				testList[i] = json[i];
			}

			$('area').each(function(i,obj){
			// set time as title to be displayed in tooltip
			if(i<18){
				var hours = 0;
				hours = testList[i].等候時間;
				$(this).attr("title", hours + "小時");

			}
		});
			if(window.matchMedia("(max-width:1208px)").matches){
			resize();
		}else{
			$('area[title]').tooltips();
		}

	});
 }

 //=======================================================
// Resize the map to fit within the boundaries provided
function resize() {
	if($(window).width() < 1208){
		$('.right').attr("src","images/map-hongkong.png");
		$('.tooltip').css('opacity', '0');	
	}else{
    if($(".tooltip").html()==null){
      $('area[title]').tooltips();
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
    }

		$('.right').attr("src", "images/Mapfordesktop/Map_normal.png");
	}
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