var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;    // time to wait before checking the window size again
                          // the shorter the time, the more reactive it will be.
                          // short or 0 times could cause problems with old browsers.
                          var clickCounter = {area:'',counter:false};
                          var hopsitals = [];		//list of hospitals being show next to map
                          var testList = [{"醫院":"將軍澳醫院", "地址":"將軍澳坑⼝口寶寧⾥里里 2 號", "電話":"2208 0111", "等候時間":"5"},{"醫院":"屯⾨門醫院", "地址":"將軍澳坑⼝口寶寧⾥里里 2 號", "電話":"2208 0111", "等候時間":"5"},{"醫院":"威爾斯親王醫院", "地址":"將軍澳坑⼝口寶寧⾥里里 2 號", "電話":"2208 0111", "等候時間":"5"},{"醫院":"將軍澳醫院", "地址":"將軍澳坑⼝口寶寧⾥里里 2 號", "電話":"2208 0111", "等候時間":"5"},{"醫院":"將軍澳醫院", "地址":"將軍澳坑⼝口寶寧⾥里里 2 號", "電話":"2208 0111", "等候時間":"5"}]		
                          $(document).ready(function() {

                          	

	// $.ajax({
	// 	method: "GET",
	// 	url: "",
	// })
	// .done(function( msg ) {
	// 	var json = JSON.parse(msg);
	var hours = 0;
	$('.time').each(function(i, obj){
			// hours = json[i]. //something about time
			$(this).text(hours);
		});

	$('.estimate').each(function(i,obj){
			if(hours > 5){	//some number 
				$(this).text("等候 超過");		//either 超過 or 大約
			}else{
				$(this).text("等候 大約");		//either 超過 or 大約

			} 

		});

	$('.mapEstimate').each(function(i,obj){
		if(hours > 5){	//some number 
				$(this).text("超過");		//either 超過 or 大約
			}else{
				$(this).text("大約");		//either 超過 or 大約

			} 
	});

	$('area').each(function(i,obj){
		// set time as title to be displayed in tooltip
		if(i<18){
			$(this).attr("title", "超過5小時");

		}
	});

	$('.round').each(function(i,obj){
			// var link = json[i]. //some link to nearby clinic
			// $(this).attr("href", link);
		})
		// $('.posts').append(allHospital(testList));		//input: json, default show all
	if(window.matchMedia("(max-width:1300px)").matches){
		resize();
	}
	$('.right').mapster({
  		fillOpacity: 0, 
  		singleSelect: true
  	});
		//===========tooltips======================================
		var originalwidth = $('.right').width();
		var originalHeight = $('.right').height();


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
		//=========================================================
	});
 $(window).bind('resize',onWindowResize);


//=================show time next to map===========================

	function showTime(img, location){		//input: location
		var imgSrc = 'images/';
		$('.right').attr("src", imgSrc + img);
		// $('.hospitalDiv').remove();
		console.log( imgSrc + img);
		
		if(clickCounter.counter == true){
			if(clickCounter.area == location){
			clickCounter.counter = false;
				//deselect area
				$('.right').attr("src", "images/Mapfordesktop/Map_normal.png");
			}else{
				clickCounter.area = location;
				clickCounter.counter = true;
				// $.ajax({
	// 	method: "GET",
	// 	url: "",
	// })
	// .done(function( msg ) {
	// 	var json = JSON.parse(msg);
		$('.posts').append(allHospital(testList));		//input: json

		// $('.bottom').each(function(i,obj){
		// 	var hour = json[i]. //time
		// 	$(this).text(hour);
		// });
			}

			}else{
				clickCounter.area = location;
				clickCounter.counter = true;
				// $.ajax({
	// 	method: "GET",
	// 	url: "",
	// })
	// .done(function( msg ) {
	// 	var json = JSON.parse(msg);
		$('.posts').append(allHospital(testList));		//input: json

		// $('.bottom').each(function(i,obj){
		// 	var hour = json[i]. //time
		// 	$(this).text(hour);
		// });
	}
}

function allHospital(list){
	var allHospital = '';
	for(var i = 0 ; i < testList.length; i++){
		allHospital += hospitalInfo(list[i]);
	}
	return allHospital;
}

function hospitalInfo(obj){
	var hospital = '<div class="hospitalDiv"><div class="bulletsDiv"><p>" " </p></div><a href=""><div class="hospital"><h3>';
		hospital +=  obj.醫院;	//hospital name
		hospital += '</h3><p><span style="font-weight:bold">地址:</span>';
		hospital +=  obj.地址;	//hospital address
		hospital += '</p><p><span style="font-weight:bold">電話:</span>';
		hospital +=  obj.電話;	//hospital phone
		hospital += '</p></div><div class="timeDiv"><h3><span class="time bottom">';
		hospital +=  obj.等候時間;	//hour
		hospital += '</span>小時</h3></div></a></div>';

		return hospital;
	}

//=======================reorder hospital list next to map==========================
function reorder(hospital){
	$('.hospitalDiv').remove();
	for(var i = 0; i < testList.length; i++){
		if(testList[i].醫院 == hospital){
			var first = testList.splice(i, 1);
			testList.splice(0,0, first[0]);
		}
	}
	$('.posts').append(allHospital(testList));		//input: json
	$('.hospitalDiv').first().css("background-color", "rgba(128,128,128,0.24)");
}


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
		window.location.replace('hospitalTimeMobile.html');
		// var locations = $('map > area').slice(-3);
		// $(locations[0]).attr("coords","414,264,516,263,537,249,539,300,550,302,558,357,513,326,515,340,483,325,457,350,436,347,438,326,418,320,408,315");
		// $(locations[0]).attr("onclick", "showTime('select_KL.png','area1');return false;");
		 // newWidth = $('.split').children().width();	//to make width = .split > * width

	    // image.mapster('resize',newWidth,newHeight,resizeTime); 
	    $('.left').width( $('.split').width() / 2 );
	    $('.posts').width($('.left').width());

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