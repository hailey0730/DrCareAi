var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;    // time to wait before checking the window size again
                          // the shorter the time, the more reactive it will be.
                          // short or 0 times could cause problems with old browsers.
  var clickCounter = {area:'',counter:0};
  var hopsitals = [];
  var testList = [{"醫院":"將軍澳醫院", "地址":"將軍澳坑⼝口寶寧⾥里里 2 號", "電話":"2208 0111", "等候時間":"5"},{"醫院":"屯⾨門醫院", "地址":"將軍澳坑⼝口寶寧⾥里里 2 號", "電話":"2208 0111", "等候時間":"5"},{"醫院":"威爾斯親王醫院", "地址":"將軍澳坑⼝口寶寧⾥里里 2 號", "電話":"2208 0111", "等候時間":"5"},{"醫院":"將軍澳醫院", "地址":"將軍澳坑⼝口寶寧⾥里里 2 號", "電話":"2208 0111", "等候時間":"5"},{"醫院":"將軍澳醫院", "地址":"將軍澳坑⼝口寶寧⾥里里 2 號", "電話":"2208 0111", "等候時間":"5"}]
  $(document).ready(function() {

  	$('.right').mapster({
  		fillOpacity: 0, 
  		// stroke: true, 
  		singleSelect: true
  	});

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

	$('.round').each(function(i,obj){
			// var link = json[i]. //some link to nearby clinic
			console.log($(this).html());
			// $(this).attr("href", link);
		})
		$('.posts').append(allHospital(testList));		//input: json
		setCss();
});
$(window).bind('resize',onWindowResize);


//=================show time next to map===========================

	function showTime(location){		//input: location
		if(location == "area1"){
			$('.right').attr("src", "images/select_KL.png");
		}else if(location == "area2"){
			$('.right').attr("src", "images/select_HKisland.png");
		}else if(location == "area3"){
			$('.right').attr("src", "images/NT_selected.png");
		}

		// $('.hospitalDiv').remove();
		if(clickCounter.area == location){
			if(clickCounter.counter >=1){
				clickCounter.counter = 0;
				
				//deselect area
			$('.right').attr("src", "images/map-hongkong.png");

			}else{
				clickCounter.counter++;
				// $.ajax({
	// 	method: "GET",
	// 	url: "",
	// })
	// .done(function( msg ) {
	// 	var json = JSON.parse(msg);
	console.log("test showTime");
		// $('.emergencyRoom').append(allHospital());		//input: json
		$('.posts').append(allHospital(testList));		//input: json
		// hospitals = json;
		setCss();
		// $('.hospital').each(function(i,obj){
		// 	var html = '<h3>';
		// 	html += json[i]. //hospital name
		// 	html += '</h3><p>';
		// 	html += json[i]. //hospital address
		// 	html += '</p><p>';
		// 	html += json[i]. //hospital phone
		// 	html += '</p>';
		// 	$(this).html(html);
		// });

		// $('.bottom').each(function(i,obj){
		// 	var hour = json[i]. //time
		// 	$(this).text(hour);
		// });
	}
}else{
	clickCounter.counter++;
	clickCounter.area = location;

			// $.ajax({
	// 	method: "GET",
	// 	url: "",
	// })
	// .done(function( msg ) {
	// 	var json = JSON.parse(msg);
	console.log("test showTime");
		// $('.emergencyRoom').append(allHospital());		//input: json
		$('.posts').append(allHospital(testList));		//input: json
		// hospitals = json;
		setCss();
		// $('.hospital').each(function(i,obj){
		// 	var html = '<h3>';
		// 	html += json[i]. //hospital name
		// 	html += '</h3><p>';
		// 	html += json[i]. //hospital address
		// 	html += '</p><p>';
		// 	html += json[i]. //hospital phone
		// 	html += '</p>';
		// 	$(this).html(html);
		// });

		// $('.bottom').each(function(i,obj){
		// 	var hour = json[i]. //time
		// 	$(this).text(hour);
		// });
	}


	return false;
}

function setCss(){
	var imgHeight = $('img').css("height");
	var imgWidth = $('img').css("width");
	var css = {};
	if($('.posts').css("height") > imgHeight){
		// console.log(imgHeight);
		// console.log($('.posts').css("height"));
		css["height"] = imgHeight;
		css["width"] = 	"100%";//$(window).width() - imgWidth;
		css["overflow-y"] = "scroll";
		$('.posts').css(css);
	}
}

function allHospital(list){
	// console.log("allHospital");
	var allHospital = '';
	for(var i = 0 ; i < testList.length; i++){
		allHospital += hospitalInfo(list[i]);
	}
	return allHospital;
}

function hospitalInfo(obj){
	// console.log("hospitalInfo");
	var hospital = '<div class="hospitalDiv"><div class="bulletsDiv"><p>" " </p></div><a href=""><div class="hospital"><h3>';
		hospital +=  obj.醫院;	//hospital name
		hospital += '</h3><p>';
		hospital +=  obj.地址;	//hospital address
		hospital += '</p><p>';
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
			console.log(first);
			testList.splice(0,0, first[0]);
}
}
	$('.posts').append(allHospital(testList));		//input: json
}


//=======================================================
// Resize the map to fit within the boundaries provided
function resize(maxWidth,maxHeight) {
	var image =  $('img'),
	imgWidth = image.width(),
	imgHeight = image.height(),
	newWidth=0,
	newHeight=0;

    // if (imgWidth/maxWidth>imgHeight/maxHeight) {
    //     newWidth = maxWidth;
    // } else {
    //     newHeight = maxHeight;
    // }

    newWidth = $('.split').children().width();	//to make width = .split > * width
    // console.log(newWidth);
    image.mapster('resize',newWidth,newHeight,resizeTime); 

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
			// setCss();  
	}
	checking=false;
},resizeDelay );
}

$(window).on( 'resize', function () {
    $('.left').width( $('.split').width() / 2 );
    $('.posts').width($('.left').width());

}).resize();