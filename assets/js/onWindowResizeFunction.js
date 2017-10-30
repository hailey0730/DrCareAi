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