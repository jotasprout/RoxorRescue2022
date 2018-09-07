$(document).ready(function(){
	if (navigator.geolocation) {		
		navigator.geolocation.getCurrentPosition(displayLocation);	
	} 
	else { 		
		console.log('Geolocation is not supported by this browser.');	
	}
});

function displayLocation(position) {
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;	
	document.getElementById('lat').value = lat;	
	document.getElementById('lng').value = lng; 
	document.getElementById('lat').innerHTML = lat;	
	document.getElementById('lng').innerHTML = lng; 	
	console.log('Latitude is ' + lat);
	console.log('Longitude is ' + lng);
}