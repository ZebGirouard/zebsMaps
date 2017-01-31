angular.module("coffeeTable")
	.controller("USMapController", USMapController);

function USMapController() {
	console.log("USMap Controller!");

	var stateNames = {
		AL: "alabama",
		AK: "alaska",
		AR: "arkansas",
		AZ: "arizona",
		CA: "california",
		CO: "colorado",
		CT: "connecticut",
		DE: "delaware",
		FL: "florida",
		GA: "georgia",
		HI: "hawaii",
		IA: "iowa",
		ID: "idaho",
		IL: "illinois",
		IN: "indiana",
		KS: "kansas",
		KY: "kentucky",
		LA: "louisiana",
		MA: "massachusetts",
		MD: "maryland",
		ME: "maine",
		MI: "michigan",
		MN: "minnesota",
		MO: "missouri",
		MS: "mississippi",
		MT: "montana",
		NC: "north-carolina",
		ND: "north-dakota",
		NE: "nebraska",
		NH: "new-hampshire",
		NJ: "new-jersey",
		NM: "new-mexico",
		NV: "nevada",
		NY: "new-york",
		OH: "ohio",
		OK: "oklahoma",
		OR: "oregon",
		PA: "pennsylvania",
		RI: "rhode-island",
		SC: "south-carolina",
		SD: "south-dakota",
		TN: "tennessee",
		TX: "texas",
		UT: "utah",
		VA: "virginia",
		VT: "vermont",
		WA: "washington",
		WV: "west-virginia",
		WI: "wisconsin",
		WY: "wyoming"
	};

	var photoArray = {
		AL: "https://www.facebook.com/photo.php?fbid=10103733970265460&set=a.10103674700073400.1073741830.921731&type=3&theater",
		CA: "https://www.facebook.com/photo.php?fbid=781207362030&set=a.769930396160.2426403.921731&type=3&theater",
		CO: "https://www.facebook.com/photo.php?fbid=10103938983222850&set=a.10101195415130300.2875204.921731&type=3&theater",
		DC: "https://www.facebook.com/photo.php?fbid=10103674707962590&set=a.10103674700073400.1073741830.921731&type=3&theater",
		FL: "https://www.facebook.com/photo.php?fbid=10103707943917470&set=a.10103674700073400.1073741830.921731&type=3&theater",
		GA: "https://www.facebook.com/photo.php?fbid=10103694915556410&set=a.10103674700073400.1073741830.921731&type=3&theater",
		HI: "https://www.facebook.com/photo.php?fbid=830322185569&set=a.830318133689.2228150.4807812&type=3&theater",
		IA: "https://www.facebook.com/photo.php?fbid=10101048165799140&set=a.10100993512409970.2835260.921731&type=3&theater",
		LA: "https://www.facebook.com/photo.php?fbid=10103733970549890&set=a.10103674700073400.1073741830.921731&type=3&theater",
		MA: "https://www.facebook.com/photo.php?fbid=10100993520603550&set=a.10100993512409970.2835260.921731&type=3&theater",
		MD: "https://www.facebook.com/photo.php?fbid=2284063856244&set=a.10100452078283339&type=3&theater",
		ME: "https://www.facebook.com/photo.php?fbid=769940441030&set=a.769930396160.2426403.921731&type=3&theater",
		MO: "https://www.facebook.com/photo.php?fbid=10103733972191600&set=a.10103674700073400.1073741830.921731&type=3&theater",
		NC: "https://www.facebook.com/photo.php?fbid=10103684072156670&set=a.10103674700073400.1073741830.921731&type=3&theater",
		NH: "https://www.facebook.com/photo.php?fbid=947778951269&set=a.947778387399.2248903.4802624&type=3&theater",
		NJ: "https://www.facebook.com/photo.php?fbid=565128291259&set=a.565125382089.2107676.4807549&type=3&theater",
		NV: "https://www.facebook.com/photo.php?fbid=10101720219622890&set=a.10101720211898370.1073741826.921731&type=3&theater",
		OH: "https://www.facebook.com/photo.php?fbid=509742320189&set=a.505014953869.2036553.4811630&type=3&theater",
		PA: "https://www.facebook.com/photo.php?fbid=508839539369&set=a.504981950009.2005555.4808101&type=3&theater",
		SC: "https://www.facebook.com/photo.php?fbid=10103690076828260&set=a.10103674700073400.1073741830.921731&type=3&theater",
		TN: "https://www.facebook.com/photo.php?fbid=10103733971153680&set=a.10103674700073400.1073741830.921731&type=3&theater",
	};

	$('#map').usmap({
		// Hover for more info
	  mouseover: function(event, data) {
	  	console.log(event);
	  	console.log(data);
	  	$('#infoWindow')
	  		.css({'left':event.pageX, 'top':event.pageY})
	  		.fadeIn('slow');
	  },
	  // The click action
	  click: function(event, data) {
	    $('#clicked-state')
	      .text('You clicked: '+data.name);
	    window.location.href = photoArray[data.name] || "http://kids.nationalgeographic.com/explore/states/" + stateNames[data.name];
	  }
	});
	
}