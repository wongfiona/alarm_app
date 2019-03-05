// =================================================
// Report City & AutoFill Coords
// =================================================
var lat = ""
var lng = ""
function insertGoogleScript() {
	var google_api = document.createElement('script'),
			api_key    = 'AIzaSyClW9k8SbziIeGaeQBPPCa3LQXsUC2zgNQ';

	// Inject the script for Google's API and reference the initGoogleAPI
	// function as a callback.
	google_api.src = 'https://maps.googleapis.com/maps/api/js?key='+ api_key +'&callback=initGoogleAPI&libraries=places,geometry';
	document.body.appendChild(google_api);
}


// SearchBox Method
function initGoogleAPI() {
	var autocomplete = new google.maps.places.SearchBox(document.querySelector("#city-search"));

	autocomplete.addListener('places_changed', function() {
		var place = autocomplete.getPlaces()[0];
		//lat = place.geometry.location.lat();
		//lng = place.geometry.location.lng();
    document.querySelector("#latitude").value = place.geometry.location.lat();
    document.querySelector("#longitude").value = place.geometry.location.lng();
		//$("#latitude").text(lat);
		//$("#longitude").text(lng);
	});
}

insertGoogleScript();
