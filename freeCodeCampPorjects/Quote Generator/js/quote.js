
$(document).ready(function(){
  $("#getMessage").on("click",function(){
    $.getJSON('https://thesimpsonsquoteapi.glitch.me/quotes?count=num', function(json){
	  var html = "";
	  json.forEach(function(val){
	    html += "<div>";
		html +=  val.quote;
		html += "</div>"; 	
	    })
	$("#message").html(html);
    });	
  })
})

$(".twitter").click(function(){
      var textToTweet =$("#message").text();
      var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);
      $('.twitter').attr('href',tweetLink).click(); // perform click and post quote
});
