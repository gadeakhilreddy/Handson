
$(document).ready(function(){

$("button").click(function(){
var x=parseInt($("#num1").val());
var y=parseInt($("#num2").val());

if(x>=0 && y>=0){
var r=x+y;
$("#message").text(r).css("color", "blue");
$("#test").val(r);
}
else{

$("#message").text("Please Enter the Values").css("color", "red");
}

});

});