var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;    // time to wait before checking the window size again
                          // the shorter the time, the more reactive it will be.
                          // short or 0 times could cause problems with old browsers.
                          var clickCounter = {area:'',counter:false};
                          var hospitalStructure = {"醫院":"","地址":"","電話":"","等候時間":"","地區":""};
                          var hospitals = [];		//list of hospitals
			   			var display = [];			//list of hospitals being show next to map
 $(document).ready(function() {
	$.ajax({
		method: "GET",
		url: "http://test.drcare.ai/DrCare.ANEWaitingTime.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513",
	})
	.done(function( msg ) {
		var json = JSON.parse(msg);
		for(var i = 0; i < json.length; i++){
			hospitals[i] = json[i];
		}

// setting hospital name and area for testing purpose
		$('.hospital').each(function(i,obj){
  		var children = $(this).children();
       	hospitals[i].醫院 = children[0].innerHTML;
       	if(hospitals[i].醫院 == "東區尤德夫人那打素醫院" || hospitals[i].醫院 == "瑪麗醫院" ||hospitals[i].醫院 == "律敦治醫院" ){
       		hospitals[i].地區 = "港島";
       	}
       	else if(hospitals[i].醫院 == "明愛醫院" ||hospitals[i].醫院 == "廣華醫院" ||hospitals[i].醫院 == "伊利利沙伯醫院" ||hospitals[i].醫院 == "基督教聯合醫院"){
       		hospitals[i].地區 = "九龍";

       	}else{
       		hospitals[i].地區 = "新界";

       	}

  	});

// display list is shown, hospitals save all hospitals
  	for(var i = 0; i< hospitals.length; i++){
		display[i] = hospitals[i];
	}
  	setBulletsDiv(display);

  	$('article').each(function(i,obj){
  		var children = $(this).children();
  		var hours = display[i].等候時間;
  		if(hours > 5){
  			$(children[0]).text("等候 超過");
  			$($(children[1]).children()).text('5');
  		}else{
  			$(children[0]).text("等候 大約");
  			$($(children[1]).children()).text(hours);
  		}
  		// var link = display[i].	//some link
  		// $($($(children[3]).children()).children()).attr("href", link);

  	});
	
	// $('.time').each(function(i, obj){
	// 	if(i>=18){
	// 		i -= 18;
	// 	}
	// 	var hours = 0;
	// 	hours = display[i].等候時間;
	// 	if(hours > 5){	//some number 
	// 			$(this).text('5');
	// 		}else{
	// 			$(this).text(hours);
	// 		} 
	// 	});

	// $('.estimate').each(function(i,obj){
	// 	if(i<18){
	// 		var hours = 0;
	// 	hours = display[i].等候時間;
	// 		if(hours > 5){	//some number 
	// 			$(this).text("等候 超過");		//either 超過 or 大約
	// 		}else{
	// 			$(this).text("等候 大約");		//either 超過 or 大約
	// 		} 
	// 	}
	// 	});

	// $('.round').each(function(i,obj){
	// 		// var link = json[i]. //some link to nearby clinic
	// 		// $(this).attr("href", link);
	// 	})

	$('.aDiv').each(function(i,obj){
		var hospital = $(this).children()[0];
		var timeDiv = $(this).children()[1];
		var hospitalChildren = $(hospital).children();
		// $(hospitalChildren[0]).text();	//h3
		// $(hospitalChildren[1]).text();	//addr
		// $(hospitalChildren[2]).text();	//phone
		var timeChildren = $(timeDiv).children();
		var hours = display[i].等候時間;
  		if(hours > 5){
  			$(timeChildren[0]).text("超過");
  			$($(timeChildren[1]).children()).text('5');
  		}else{
  			$(timeChildren[0]).text("大約");
  			$($(timeChildren[1]).children()).text(hours);
  		}

	});

	// $('.mapEstimate').each(function(i,obj){
	// 	if(i<18){
	// 		var hours = 0;
	// 	hours = display[i].等候時間;
	// 	var estimate = "";
	// 	if(hours > 5){	//some number 
	// 		estimate = "超過";
	// 		}else{
	// 		estimate = "大約";
	// 		} 
	// 		$(this).text(estimate);		//either 超過 or 大約
	// 	}
	// });

	$('area').each(function(i,obj){
		// set time as title to be displayed in tooltip
		if(i<18){
			var hours = 0;
			// hours = json[i]. //something about time
			hours = hospitals[i].等候時間;
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
	$('.right').mapster({
  		fillOpacity: 0, 
  		singleSelect: true
  	});

		
	});
	//testing purpose
	// $('area').each(function(i,obj){
	// 	if(i<18){
	// 		$(this).attr("title", '5' + "小時");		
	// 	}
	// });
	// 	$('.right').mapster({
 //  		fillOpacity: 0, 
 //  		singleSelect: true
 //  	});
		var image = $('img');
		var newWidth = $('.split').width() / 2;	//to make width = .split > * width
		var newHeight = $('.posts').height();
	    image.mapster('resize',newWidth,newHeight,resizeTime);
		// $('area[title]').tooltips();

	});
 $(window).bind('resize',onWindowResize);

//==================set bulletsDIv color===========================
 function setBulletsDiv(list){
 	$('.bulletsDiv').each(function(i,obj){
 		var space = $(this).children();
  		if(list[i].地區 == "港島"){
  			$(this).css("background-color","#4ecae4");
  			$(space[0]).css("color","#4ecae4");
  		}else if(list[i].地區 == "九龍"){
  			$(this).css("background-color","#d94b5d");
  			$(space[0]).css("color","#d94b5d");

  		}else if(list[i].地區 == "新界"){
  			$(this).css("background-color","#b5d606");
  			$(space[0]).css("color","#b5d606");

  		}
  	});

 }


//=================show time next to map===========================

	function showTime(img, location){		//input: location
		var imgSrc = 'images/';
		$('.right').attr("src", imgSrc + img);
		$('.hospitalDiv').remove();
		display = [];
		if(clickCounter.counter == true){
			if(clickCounter.area == location){
			clickCounter.counter = false;
				//deselect area
				$('.right').attr("src", "images/Mapfordesktop/Map_normal.png");
				for(var i = 0; i< hospitals.length; i++){
						display[i] = hospitals[i];
				}
				$('.posts').append(allHospital(display));
				setBulletsDiv(display);
			}else{
				clickCounter.area = location;
				clickCounter.counter = true;
				var j = 0;
				for(var i = 0; i< hospitals.length; i++){
					if(hospitals[i].地區 == location){
						display[j] = hospitals[i];
						j++;
					}
				}
				
		$('.posts').append(allHospital(display));		//input: json
		setBulletsDiv(display);
		
			}

			}else{
				clickCounter.area = location;
				clickCounter.counter = true;
				var j = 0;				
				for(var i = 0; i< hospitals.length; i++){
					if(hospitals[i].地區 == location){
						display[j] = hospitals[i];
						j++;
					}
				}
				
		$('.posts').append(allHospital(display));		//input: json
		setBulletsDiv(display);
		
	}
}

function allHospital(list){
	var allHospital = '';
	for(var i = 0 ; i < list.length; i++){
		allHospital += hospitalInfo(list[i],i);
	}
	return allHospital;
}

function hospitalInfo(obj,i){
	
	var hours = 0;
	var estimate = "";
	if(obj.等候時間 > 5){	//some number 
		estimate = "超過";
		hours = '5';
		}else{
		estimate = "大約";
		hours = obj.等候時間;
		} 
		
		var hospital = '<div class="hospitalDiv"><div class="bulletsDiv"><p>" " </p></div><a href=""><div class="hospital"><h3>';
		hospital +=  obj.醫院;	//hospital name
		hospital += '</h3><p><span style="font-weight:bold">地址:</span>';
		hospital +=  obj.地址;	//hospital address
		hospital += '</p><p><span style="font-weight:bold">電話:</span>';
		hospital +=  obj.電話;	//hospital phone
		hospital += '</p></div><div class="timeDiv"><p class="mapEstimate">';
		hospital +=  estimate;
		hospital += '</p><h3><span class="time bottom">';
		hospital +=  hours;	//hour
		hospital += '</span>小時</h3></div></a></div>';
	
		return hospital;
	}

//=======================reorder hospital list next to map==========================
function reorder(hospital){
	$('.hospitalDiv').remove();
	var area = '';
	display = [];
	for(var i = 0; i < hospitals.length; i++){
		if(hospitals[i].醫院 == hospital){
			// var first = hospitals.splice(i, 1);
			display[0] = hospitals[i];
			area = display[0].地區;
			// hospitals.splice(0,0, first[0]);
			break;
		}
	}
	var j = 1;
	for(var i = 0; i < hospitals.length; i++){
		if(hospitals[i].醫院 != hospital){
		if(hospitals[i].地區 == area){
			display[j] = hospitals[i];
			j++;
		}
	}
	}
	$('.posts').append(allHospital(display));		//input: json
	setBulletsDiv(display);
	if(area == "新界"){
	$('.hospitalDiv').first().css("background-color", "#b5d606");
		$('.right').attr("src", 'images/Mapfordesktop/Map_highlighted_green.png');
	}else if(area == "九龍"){
	$('.hospitalDiv').first().css("background-color", "#d94b5d");
		$('.right').attr("src", 'images/Mapfordesktop/Map_highlighted_red.png');

	}else if(area == "港島"){
	$('.hospitalDiv').first().css("background-color", "#4ecae4");
		$('.right').attr("src", 'images/Mapfordesktop/Highlighted blue.png');

	}
	var children = $('.hospitalDiv').first().children();
	var grandchildren = $(children[1]).children();
	$($(grandchildren[0]).children()).css("color", "white");
	$($(grandchildren[1]).children()).css("color", "white");

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
	if($(window).width() < 1208){
		window.location.replace('hospitalTimeMobile.html');
		// var locations = $('map > area').slice(-3);
		// $(locations[0]).attr("coords","414,264,516,263,537,249,539,300,550,302,558,357,513,326,515,340,483,325,457,350,436,347,438,326,418,320,408,315");
		// $(locations[0]).attr("onclick", "showTime('select_KL.png','area1');return false;");
		 // newWidth = $('.split').children().width();	//to make width = .split > * width

	    // image.mapster('resize',newWidth,newHeight,resizeTime); 
	    // $('.left').width( $('.split').width() / 2 );
	    // $('.posts').width($('.left').width());

	}else{
		var newWidth = $('.split').width() / 2;	//to make width = .split > * width
		var newHeight = $('.posts').height();
	    image.mapster('resize',newWidth,newHeight,resizeTime);
	$('area').each(function(i,obj){
		if(i<18){
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

//===========tooltips======================================

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