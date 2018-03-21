// Check Off Specific Todos By Clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(){
	$(this).parent().fadeOut("500",function(){
		$(this).remove();
	})
});

$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append('<li><span><i class="fa fa-trash-o"></i> </span>'+todoText+'</li>');
	}
});

$('.fa-pencil').click(function(){
	$('input[type="text"]').fadeToggle();
})