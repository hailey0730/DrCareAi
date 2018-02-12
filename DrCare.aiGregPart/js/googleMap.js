/******************************/
/******************************/
/******************************/
/******************************/
/******************************/
/*****     Google Map     *****/

var map;
var markers = [];
var infowindow;
var defaultZoom = 18;


function mapInitialize(){ // initialize the google map
    var mapProp = {
        center:new google.maps.LatLng(22.3603544,114.161689), //Hong Kong 
        zoom:11,
        draggable: true,
        disableDoubleClickZoom: false,
        //disableDefaultUI: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    //google.maps.event.addDomListener(window, 'load', mapInitialize);

    google.maps.event.addListener(map, 'zoom_changed', function () {
	    if (map.getZoom() > defaultZoom){
	        map.setZoom(defaultZoom);
	    }
  	});
}


function pinAddress(docInfo){ //pin the dot on the map
	var location = new google.maps.LatLng(docInfo["Latitude_X"],docInfo["Longitude_Y"]);
	addMarker(location, docInfo);
}

// test only, delete after prod
function pinAddrese_uat(docInfo) {
	for(let i of docInfo["Clinic"]) {
		var location = new google.maps.LatLng(i["Latitude_X"], i["Longitude_Y"]);
		addMarker(location, docInfo, i["Address_ch"]);
	}
}

function fitZoom(){
	var i = markers.length;
	var mapBounds = new google.maps.LatLngBounds();
	while(i--){
		mapBounds.extend(new google.maps.LatLng(markers[i].getPosition().lat(), markers[i].getPosition().lng()));
	}
	map.fitBounds(mapBounds);
}

function addMarker(location, docInfo, addressInfo){
	var marker = new google.maps.Marker({
		map: map,	
		animation: google.maps.Animation.DROP, 
		position: location
	});

	addressInfo = addressInfo || docInfo["Address_ch"];
	
	// add infowindow for markers
	google.maps.event.addListener(marker, 'mouseover', function() {
    	if(infowindow) {
    		infowindow.close();
    	}

    	infowindow = new google.maps.InfoWindow({
			content:'姓名: <a href="docPage.php?Name=' + docInfo["Name"].split(" ", 1) + "&ID=" + docInfo["ID"] + '">' + docInfo["Name"].split(" ", 1) + '</a><br/>專科: ' + docInfo["SubCategory"] +  '<br/>地址: '+ addressInfo
    	});
    	
    	infowindow.open(map,marker);
	});

	google.maps.event.addListener(marker, 'mouseout', function() {

	});

	markers.push(marker);
	fitZoom();
}


// Sets the map on all markers in the array.
function setMapOnAll(map){
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}


// Removes the markers from the map, but keeps them in the array.
function deleteMarkers(){
    setMapOnAll(null);
    markers = [];
}


function mapRelocated(lat, lng, zoom){ //move and relocate the map
	map.setCenter(new google.maps.LatLng(lat, lng));
	map.setZoom(zoom);
}



