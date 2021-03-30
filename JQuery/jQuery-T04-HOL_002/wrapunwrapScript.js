$(document).ready(function(){
	$("#submit").click(function(){
		if($("p").parent().is("div")){
			$("p").unwrap();
		}else{
			$("p").wrap("<div></div>");
		}
		
	});
});
