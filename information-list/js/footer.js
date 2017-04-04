$(function(){
	$(".footer-login ").hover(login,rights);
	function login(){
		$(".footer-login div").stop().animate({marginTop:"-40px"},200);
	}
	function rights(){
		$(".footer-login div").stop().animate({marginTop:"0px"},200);
		//$(".footer-login div").css({"marginTop":0});
	}
})