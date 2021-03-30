$(document).ready(function(){
	
	$("#sub").click(function(){
		
		var x = $("#text").val();
		
		$("#answer").html(x);
	
	});
	$("#answer").click(function(){
		
		 $("#answer").replaceWith("<img src = 'C:/Users/Vikki/Downloads/smiley.png' width:20px height:30px>");
	
	});	
});