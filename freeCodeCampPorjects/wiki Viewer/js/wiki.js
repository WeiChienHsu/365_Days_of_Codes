$(document).keypress(function(e) {
    if(e.which == 13) {
        search();
    }
});

$("#searchbtn").click(function(){
	search();
})

function search(){
	var title = $('input[type="text"]').val();
	var msg = $(".message");
	$('input[type="text"]').val("");
	if (title === "" || title === " " || title == "Search..") {
    msg.text("Please input a value to search!");
    msg.fadeIn("fast");
    msg.css("display", "block");
    msg.fadeOut(5000);
  } else {
    getData(title);
  }
}


function getData(a) {
  var pageData = [], pageIDs=[];
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&requestid=NitinNair89&prop=extracts&indexpageids=1&generator=search&exchars=450&explaintext=1&exlimit=10&exintro=1&gsrsearch=' + a + '&gsrlimit=10&gsrqiprofile=classic&callback=?',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      if(!data.query) {
       $(".message").text("There were no results matching the query. " + a );
       refreshContent();
      } else {
      pageIDs = data.query.pageids;
      pageData = data.query.pages;
      formatData(pageIDs,pageData);
      }
    }
  });
}

function formatData(pageID,pageData){
	refreshContent();
	var id = 0;
	var pageUrl = "http://en.wikipedia.org/?curid=";
	for(var i=0; i< pageID.length ; i++){
		id = pageID[i];
		 document.getElementById("resultBox").innerHTML = document.getElementById("resultBox").innerHTML + " " + '<div id="result"> <h4><a href="'+pageUrl+id+'" target="_black">'+pageData[id].title+'</a></h4><p>'+pageData[id].extract+'</p></div>';
	}
}

function refreshContent(){
	 document.getElementById("resultBox").innerHTML = "";
}
