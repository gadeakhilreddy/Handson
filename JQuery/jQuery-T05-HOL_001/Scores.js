


	$("input").keyup(function(){
	
    math1 = parseFloat($("#math1").val());
    math2 = parseFloat($("#math2").val());
    science = parseFloat($("#science").val());
    english = parseFloat($("#english").val());
    sanskrit = parseFloat($("#sanskrit").val());
    social = parseFloat($("#social").val());

    if(isNaN(math1)) math1 = 0;
    if(isNaN(math2)) math2 = 0;
    if(isNaN(science)) science = 0;
    if(isNaN(english)) english = 0;
    if(isNaN(sanskrit)) sanskrit = 0;
    if(isNaN(social)) social = 0;
    sum = parseFloat((math1 + math2 + science + english + sanskrit + social).toFixed(2));
    $("#sumValue").text(sum);
    });

