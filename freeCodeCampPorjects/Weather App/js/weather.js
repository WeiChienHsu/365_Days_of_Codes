var api = "https://fcc-weather-api.glitch.me/api/current?"
var lat,lon;
var tempUnit = "C";
var currentTempInCelsuis = $("#temp").text() ;

$("#toF").on("click",function(){
	if(tempUnit !== "F"){
	tempUnit = "F";
	var newTempInF = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
	$("#temp").text(newTempInF);	
	$("#tempUnit").text(" " + String.fromCharCode(176)+tempUnit)
	}
});

$("#toC").on("click",function(){
	if(tempUnit !== "C"){
	tempUnit = "C";
	var newTempInC = Math.round(parseInt(($("#temp").text()) -32) * (5 / 9));
	$("#temp").text(newTempInC);
	$("#tempUnit").text(" " + String.fromCharCode(176)+tempUnit);
	}
});



$( document ).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeaterInfo(lat,lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
})

function getWeaterInfo(lat,lon){ 
	//When you have actual lat and lon data
	var urlString = api+lat+"&"+lon;
		// AJAX JSON DATA
	$.ajax({
		type:"GET",
		url:urlString,
		success:function(data){
			$("#icon").attr("src",data.weather[0].icon);
			var currentTempInCelsius = Math.round(data.main.temp * 10) / 10;
      		$("#temp").text(currentTempInCelsius);
      		$("#city").text(data.name);
      		$("#country").text(data.sys.country);
      		$("desc").text(data.weather[0].main);
      		$("tempUnit").text(" " + String.fromCharCode(176)+tempUnit);
		}
	})	
  }


