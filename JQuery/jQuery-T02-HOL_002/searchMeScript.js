$(document).ready(function(){
	$("span").hover(function(){
		$(this).css("backgroundColor", "bisque");
		var s=$(this).text();
		if(s.includes("th")){
			$(this).css({"font-style":"italic","text-shadow":"2px 2px pink","font-weight":"bold"});
		}
	},function(){
		$(this).css("backgroundColor", "white");
	});
	
	
})
