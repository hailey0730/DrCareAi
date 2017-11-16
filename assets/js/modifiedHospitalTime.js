var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;    // time to wait before checking the window size again
                          // the shorter the time, the more reactive it will be.
                          // short or 0 times could cause problems with old browsers.
                          var clickCounter = {area:'',counter:false};
                          var hospitalStructure = {"醫院":"","地址":"","電話":"","等候時間":"","地區":""};
                          var hospitals = [];		//list of hospitals
			   			var display = [];			//list of hospitals being show next to map
 $(document).ready(function() {

loadMapTime();

	var image = $('img');
		var newWidth = $('.split').width() / 2;	//to make width = .split > * width
		var newHeight = $('.posts').height();
	    image.mapster('resize',newWidth,newHeight,resizeTime);

	});
 $(window).bind('resize',onWindowResize);

 //=================load map time==================================
 function loadMapTime(){
 	$.getJSON('php/loadMapTime.php',
 		function(json){

		for(var i = 0; i < json.length; i++){
			hospitals[i] = json[i];
		}

// display list is shown, hospitals save all hospitals
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

	$('area').each(function(i,obj){
		// set time as title to be displayed in tooltip
		if(i<18){
			var hours = 0;
			hours = hospitals[i].等候時間;
			var estimate = "~";
			
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
 		
 }

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
				if($(window).width() < 1208){
					$('.right').attr("src", "images/map-hongkong.png");
				}else{
					$('.right').attr("src", "images/Mapfordesktop/Map_normal.png");
				}
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
	
	var	estimate = "等候 大約";
	var	hours = obj.等候時間;
	
		
		var hospital = '<div class="hospitalDiv"><div class="bulletsDiv"><p>" " </p></div><a ><div class="hospital"><h3>';
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
	if($(window).width() >= 1208){
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
		// window.location.replace('hospitalTimeMobile.php');
		if($('.right').attr('src') == 'images/Mapfordesktop/Map_normal.png' ||
			$('.right').attr('src') == 'images/Mapfordesktop/Map_highlighted_green.png' ||
			$('.right').attr('src') == 'images/Mapfordesktop/Map_highlighted_red.png' ||
			$('.right').attr('src') == 'images/Mapfordesktop/Highlighted blue.png' ){
			
			$('.tooltip').remove();
			// $('.mapster_wrap_0').remove();
			$('map').remove();
			$('.right').attr('src','images/map-hongkong.png');
			// $('.split').append('<img class="right"  src="images/map-hongkong.png" alt="Planets" usemap="#planetmap">');
			
			$('.split').append(smallVerMap());

			$('.right').mapster({
		  		fillOpacity: 0, 
		  		singleSelect: true
		  	});
		}
			var image = $('img');
			var newWidth = $('.split').width() / 2;	//to make width = .split > * width
		    image.mapster('resize',newWidth,newHeight,resizeTime);
		    // $('.left').width( $('.split').width() / 2 );
		    // $('.posts').width($('.left').width());
		
		
	}else{
		if($('.right').attr('src') == 'images/map-hongkong.png' ||
			$('.right').attr('src') == 'images/select_KL.png' ||
			$('.right').attr('src') == 'images/select_HKisland.png' ||
			$('.right').attr('src') == 'images/NT_selected.png' ){
			// $('.mapster_wrap_0').remove();
			$('map').remove();
			$('.right').attr('src','images/Mapfordesktop/Map_normal.png');
			// $('.split').append('<img class="right"  src="images/Mapfordesktop/Map_normal.png" alt="Planets" usemap="#planetmap">');
			
			$('.split').append(bigVerMap());

			$('.right').mapster({
		  		fillOpacity: 0, 
		  		singleSelect: true
		  	});

			$('area').each(function(i,obj){
			// set time as title to be displayed in tooltip
			if(i<18){
				var hours = 0;
				hours = hospitals[i].等候時間;
				var estimate = "~";
				
				$(this).attr("title", estimate + hours + "小時");		

				}
			});

			$('area[title]').tooltips();
		}
		var newWidth = $('.split').width() / 2;	//to make width = .split > * width
		var newHeight = $('.posts').height();
	    image.mapster('resize',newWidth,newHeight,resizeTime);
	
		$('area').promise().done(function(){
			movingTooltips();
		})
		
	}
   
}

var movingTooltips = function(){
	$('area').each(function(i,obj){
		if(i<18){
			$('.tooltip').each(function(i,obj){
				if(i<18){
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
			  }
			});
			$('.right').attr("src", "images/Mapfordesktop/Map_normal.png");

		
	}

		});
}

function smallVerMap(){
	var smallMap = '<map name="planetmap">										<!-- area of map for highlight -->					<area data-key="area1" shape="poly" coords="414,264,516,263,537,249,539,300,550,302,558,357,513,326,515,340,483,325,457,350,436,347,438,326,418,320,408,315" , onclick="showTime(';
	smallMap += "'select_KL.png'";
	smallMap += ', ';
	smallMap += "'九龍'";
	smallMap += ');return false;">					<area data-key="area2" shape="poly" coords="420,505,382,513,389,488,361,479,364,466,342,471,337,502,360,495,358,540,370,553,387,556,404,546,420,478,356,407,398,387,432,399,469,394,481,382,547,397,572,426,577,506,551,512,518,453,521,529,490,503,467,459,447,474" , onclick="showTime(';
	smallMap += "'select_HKisland.png'";
	smallMap += ',';
	smallMap += "'港島'";
	smallMap += ');return false;">					<area data-key="area3" shape="poly" coords="134,266,88,199,437,6,683,73,762,255,635,381,563,353,541,251,411,267,411,316,350,310,251,268,175,242,282,285,136,350,140,319,73,330,60,382,19,401,4,435,8,479,70,449,114,469,120,440,185,426,198,459,245,441,219,422,245,390,247,338,282,341,298,334,297,295" , onclick="showTime(';
	smallMap += "'NT_selected.png'";
	smallMap += ',';
	smallMap += "'新界'";
	smallMap += ');return false;">				</map>';

	return smallMap;
}

function bigVerMap(){
	var bigMap = '<map name="planetmap">					<!-- HK island -->					<area data-key="HKright" title="" data-pos="1202,820" shape="poly" coords="1163,867,1129,816,1135,784,1166,777,1186,789,1197,796,1304,802,1319,873,1198,881,1175,854" href="#" onclick="reorder(';
	bigMap += "'東區尤德夫人那打素醫院'";
	bigMap += ');return false;"> 					<area data-key="HKleft" title="" data-pos="731,767" shape="poly" coords="860,901,822,847,722,830,720,756,839,757,854,802,887,814,894,843,885,867" href="#" onclick="reorder(';
	bigMap += "'瑪麗醫院'";
	bigMap += ');return false;"> 					<area data-key="HKmiddle" title="" data-pos="969,849" shape="poly" coords="1006,836,986,785,1022,756,1048,772,1051,801,1039,834,1082,839,1095,911,960,911,959,846" href="#" onclick="reorder(';
	bigMap += "'律敦治醫院'";
	bigMap += ');return false;"> 					<!-- kowloon -->					<area data-key="NTbelowMiddle" title="" data-pos="735,550" shape="poly" coords="838,529,727,532,718,603,854,611,863,579,869,593,906,545,901,516,874,499,850,506" href="#" onclick="reorder(';
	bigMap += "'明愛醫院'";
	bigMap += ');return false;"> 					<area data-key="kowloonTop" title="" data-pos="945,455" shape="poly" coords="954,592,917,535,930,510,933,442,1064,445,1064,511,986,519,986,558" href="#" onclick="reorder(';
	bigMap += "'廣華醫院'";
	bigMap += ');return false;"> 					<area data-key="kowloonBottom" title="" data-pos="847,669" shape="poly" coords="942,644,836,651,836,724,962,729,975,695,980,702,1018,656,1013,626,972,608" href="#" onclick="reorder(';
	bigMap += "'伊利沙伯醫院'";
	bigMap += ');return false;"> 					<area data-key="NTrightSecond" title="" data-pos="1186,472" shape="poly" coords="1185,611,1146,556,1173,517,1177,458,1308,462,1311,534,1219,539,1220,559,1206,587" href="#" onclick="reorder(';
	bigMap += "'基督教聯合醫院'";
	bigMap += ');return false;">					<!-- NT -->					<area data-key="NTrightFourth" title="" data-pos="1030,141" shape="poly" coords="1000,274,969,220,980,190,1006,184,1010,130,1147,135,1149,203,1041,208,1030,240" href="#" onclick="reorder(';
	bigMap += "'雅麗氏何妙齡那打素醫院'";
	bigMap += ');return false;"> 					<area data-key="NTTOP" title="" data-pos="705,46" shape="poly" coords="837,173,802,110,696,108,688,31,821,27,829,78,864,87,875,119,862,152" href="#" onclick="reorder(';
	bigMap += "'北區醫院'";
	bigMap += ');return false;"> 					<area data-key="NTLeftBottom" title="" data-pos="14,737" shape="poly" coords="170,846,205,789,174,753,148,755,15,730,6,789,129,799" href="#" onclick="reorder(';
	bigMap += "'北大嶼山醫院'";
	bigMap += ');return false;"> 					<area data-key="NTleftSecond" title="" data-pos="400,138" shape="poly" coords="526,269,488,211,390,206,390,130,522,132,531,172,556,188,563,213" href="#" onclick="reorder(';
	bigMap += "'博愛醫院'";
	bigMap += ');return false;"> 					<area data-key="NTrightThird" title="" data-pos="1140,335" shape="poly" coords="1117,460,1076,401,1103,372,1121,371,1126,320,1261,325,1261,397,1154,398" href="#" onclick="reorder(';
	bigMap += "'威爾斯親王醫院'";
	bigMap += ');return false;"> 					<area data-key="NTmiddle" title="" data-pos="825,354" shape="poly" coords="804,496,767,441,786,408,804,405,807,345,940,343,942,408,837,420,835,455" href="#" onclick="reorder(';
	bigMap += "'瑪嘉烈醫院'";
	bigMap += ');return false;"> 					<area data-key="NTBottom" title="" data-pos="450,902" shape="poly" coords="586,1013,559,973,436,966,438,896,562,892,578,920,611,930,621,957,617,976" href="#" onclick="reorder(';
	bigMap += "'長洲醫院'";
	bigMap += ');return false;"> 					<area data-key="NTbelowTop" title="" data-pos="716,202" shape="poly" coords="671,313,639,257,662,221,685,227,701,194,835,195,831,264,706,267" href="#" onclick="reorder(';
	bigMap += "'天水圍醫院'";
	bigMap += ');return false;"> 					<area data-key="NTright" title="" data-pos="1320,570" shape="poly" coords="1288,692,1252,631,1290,593,1302,599,1309,558,1444,566,1438,635,1327,639" href="#" onclick="reorder(';
	bigMap += "'將軍澳醫院'";
	bigMap += ');return false;"> 					<area data-key="NTleftFirst" title="" data-pos="324,290" shape="poly" coords="456,414,424,360,313,352,312,279,437,279,449,318,477,327,493,357" href="#" onclick="reorder(';
	bigMap += "'屯門醫院'";
	bigMap += ');return false;"> 					<area data-key="NTleftThird" title="" data-pos="546,361" shape="poly" coords="687,482,645,432,536,425,533,350,662,350,673,390,705,395,717,419,707,451" href="#" onclick="reorder(';
	bigMap += "'仁濟醫院'";
	bigMap += ');return false;">				 					<!-- area of map for highlight -->					<area data-key="area1" shape="poly" coords="1129,545,1167,522,1173,616,1194,624,1201,743,1120,701,997,732,892,701,900,577,932,545" href="#", onclick="showTime(';
	bigMap += "'Mapfordesktop/Map_highlighted_red.png'";
	bigMap += ', ';
	bigMap += "'九龍'";
	bigMap += ');return false;">					<area data-key="area2" shape="poly" coords="930,992,789,855,814,784,1076,789,1242,891,1255,1054,1112,1103,947,999,928,1052,869,1153,799,1152,785,1118,805,1035,762,1062,765,977,803,961,868,1048" href="#", onclick="showTime(';
	bigMap += "'Mapfordesktop/Highlighted blue.png'";
	bigMap += ',';
	bigMap += "'港島'";
	bigMap += ');return false;">					<area data-key="area3" shape="poly" coords="642,595,586,559,321,547,264,499,230,418,514,183,971,4,1238,41,1471,145,1666,387,1626,529,1375,802,1217,740,1199,612,1177,523,1123,548,937,534,901,571,898,654,667,604,666,685,637,1038,552,1084,443,881,257,973,72,1001,55,893,202,690,319,650" href="#", onclick="showTime(';
	bigMap += "'Mapfordesktop/Map_highlighted_green.png'";
	bigMap += ',';
	bigMap += "'新界'";
	bigMap += ');return false;">				</map>';

	return bigMap;
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