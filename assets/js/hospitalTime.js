$(document).ready(function() {

	$('.right').mapster({
		fillColor: '7a0707', 
	    stroke: true, 
	    singleSelect: true
	});

	// $.ajax({
	// 	method: "GET",
	// 	url: "",
	// })
	// .done(function( msg ) {
	// 	var json = JSON.parse(msg);

	// 	$('.time').each(function(i, obj){
	// 		$(this).text(obj[i]);
	// 	});

	// 	$('.estimate').each(function(i,obj){
	// 		$(this).text();		//either 超過 or 大約

	// 	});
	// });
});

	function showTime(){
		console.log("test showTime");
		return false;
	}