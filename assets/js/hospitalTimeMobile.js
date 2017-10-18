var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;    // time to wait before checking the window size again
                          // the shorter the time, the more reactive it will be.
                          // short or 0 times could cause problems with old browsers.
                          var clickCounter = {area:'',counter:false};
                          var hospitalStructure = {"醫院":"","地址":"","電話":"","等候時間":"","地區":""};
                          var hospitals = [];		//list of hospitals being show next to map
			   			var display = [];	
$(document).ready(function() {

	$.ajax({
		method: "GET",
		url: "DrCare.ANEWaitingTime.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513",
	})
	.done(function( msg ) {
		var json = JSON.parse(msg);
		for(var i = 0; i < json.length; i++){
			hospitals[i] = json[i];
		}
		
      	for(var i = 0; i< hospitals.length; i++){
			display[i] = hospitals[i];
		}
      	setBulletsDiv(display);


	$('article').each(function(i,obj){
  		var children = $(this).children();
  		var hours = display[i].等候時間;
  		
  			$(children[0]).text("等候 大約");			//should be from dB too 
  			$($(children[1]).children()).text(hours);
  		
  		// var link = display[i].	//some link to clinic close by
  		// $($($(children[3]).children()).children()).attr("href", link);

  	});

$('.aDiv').each(function(i,obj){
		var hospital = $(this).children()[0];
		var timeDiv = $(this).children()[1];
		var hospitalChildren = $(hospital).children();
		$(hospitalChildren[0]).text(display[i].醫院);	//h3
		$(hospitalChildren[1]).text(display[i].地址);	//addr
		$(hospitalChildren[2]).text(display[i].電話);	//phone
		var timeChildren = $(timeDiv).children();
		var hours = display[i].等候時間;
  		$(timeChildren[0]).text("大約");
  		$($(timeChildren[1]).children()).text(hours);

	});


	$('.right').mapster({
  		fillOpacity: 0, 
  		singleSelect: true
  	});
		
	});

	var image = $('img');
		var newWidth = $('.split').width() / 2;	//to make width = .split > * width
		var newHeight = $('.posts').height();
	    image.mapster('resize',newWidth,newHeight,resizeTime);
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
				$('.right').attr("src", "images/map-hongkong.png");
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
		allHospital += hospitalInfo(list[i]);
	}
	return allHospital;
}

function hospitalInfo(obj){

	var	estimate = "等候 大約";
	var	hours = obj.等候時間;
	
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
	if($(window).width() >= 1208){
		window.location.replace('hospitalTime.php');
	}else{
		var image = $('img');
		var newWidth = $('.split').width() / 2;	//to make width = .split > * width
	    image.mapster('resize',newWidth,newHeight,resizeTime);
	    $('.left').width( $('.split').width() / 2 );
	    $('.posts').width($('.left').width());
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
