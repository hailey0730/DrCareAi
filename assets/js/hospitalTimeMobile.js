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
		url: "http://test.drcare.ai/DrCare.ANEWaitingTime.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513",
	})
	.done(function( msg ) {
		var json = JSON.parse(msg);
		for(var i = 0; i < json.length; i++){
			hospitals[i] = json[i];
		}
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
// $('.time').each(function(i, obj){
// 		if(i>=18){
// 			i -= 18;
// 		}
// 		var hours = 0;
// 		// hours = json[i]. //something about time
// 		hours = hospitals[i].等候時間;
// 		if(hours > 5){	//some number 
// 				$(this).text('5');
// 			}else{
// 				$(this).text(hours);

// 			} 
// 		});

// 	$('.estimate').each(function(i,obj){
// 		if(i<18){
// 			var hours = 0;
// 		// hours = json[i]. //something about time
// 		hours = hospitals[i].等候時間;
// 			if(hours > 5){	//some number 
// 				$(this).text('等候 超過');
// 			}else{
// 				$(this).text('等候 大約');

// 			} 
// 		}

// 		});

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

// 	$('.mapEstimate').each(function(i,obj){
// 		if(i<18){

// 		var hours = 0;
// 		// hours = json[i]. //something about time
// 		hours = hospitals[i].等候時間;
// 		var estimate = "";
// 		if(hours > 5){	//some number 
// 			estimate = "超過";
// 			}else{
// 			estimate = "大約";
// 			} 
// 			$(this).text(estimate);		//either 超過 or 大約
// }
// 	});

	$('area').each(function(i,obj){
		// set time as title to be displayed in tooltip
		if(i<18){
			var hours = 0;
			// hours = json[i]. //something about time
			hours = hospitals[i].等候時間;
			var estimate = "";
			if(hours > 5){	//some number 
			estimate = "超過";
			hours = 5;
			}else{
			estimate = "大約";
			} 
			$(this).attr("title", estimate + hours + "小時");

		}
	});

	// $('.round').each(function(i,obj){
	// 		// var link = json[i]. //some link to nearby clinic
	// 		// $(this).attr("href", link);
	// 	})
		// $('.posts').append(allHospital(hospitals));		//input: json, default show all
	
	$('.right').mapster({
  		fillOpacity: 0, 
  		singleSelect: true
  	});
		
	});
//testing purpose
	// $('.right').mapster({
 //  		fillOpacity: 0, 
 //  		singleSelect: true
 //  	});
	var image = $('img');
		var newWidth = $('.split').width() / 2;	//to make width = .split > * width
		var newHeight = $('.posts').height();
	    image.mapster('resize',newWidth,newHeight,resizeTime);
});
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

	var estimate = "";
	if(obj.等候時間 > 5){	//some number 
		estimate = "超過";
		}else{
		estimate = "大約";
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
		hospital +=  obj.等候時間;	//hour
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
		// var locations = $('map > area').slice(-3);
		// $(locations[0]).attr("coords","414,264,516,263,537,249,539,300,550,302,558,357,513,326,515,340,483,325,457,350,436,347,438,326,418,320,408,315");
		// $(locations[0]).attr("onclick", "showTime('select_KL.png','area1');return false;");
		var image = $('img');
		var newWidth = $('.split').width() / 2;	//to make width = .split > * width
		// var newHeight = $('.posts').height();
	    image.mapster('resize',newWidth,newHeight,resizeTime);
	    $('.left').width( $('.split').width() / 2 );
	    $('.posts').width($('.left').width());

	
    // newWidth = $('.split').children().width();	//to make width = .split > * width
    // console.log(newWidth);
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

// $(window).on( 'resize', function () {
//     $('.left').width( $('.split').width() / 2 );
//     $('.posts').width($('.left').width());

// }).resize();