
<script>

$(document).ready(function(){
	var c =0;
	$("#submit").click(function(){
	if(c%2==0){
		$place= $(".c").detach();
		}else{
		$("p").append($place);
		}
		c=c+1;		
		
	});
	$("#btn1").click(function(){
		$(this).css("background-color","yellow");
	});
	$("#btn2").click(function(){
		$(this).css("background-color","green");
	});
	$("#btn3").click(function(){
		$(this).css("background-color","red");
	});
	$("#btn4").click(function(){
		$(this).css("background-color","pink");
	});
	
});
</script>

