
$(document).ready(function(){
	$("#submit").click(function(){
		var x = $("#place").val();
		if(x==""){
			alert("hii");
		}else{
			old = $("#output").html();
			newtask  = old + "<br>" + x;
			
			$("#output").html(newtask);
		}
	});
});

