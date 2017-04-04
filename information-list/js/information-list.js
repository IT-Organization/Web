
//资讯内容hover效果
$(document).ready(function(){
	$(".informations").mouseover(function(){
		$(this).children(".detail").stop(false,false);
		$(this).children(".detail").animate({top:'0'},450);
	})
	$(".informations").mouseout(function(){
		$(this).children(".detail").stop(false,false);
		$(this).children(".detail").animate({top:'222px'},450);
	})
})


//导航展开
$(document).ready(function(){
	$(".listTitle").children("img").click(function(){
		$(".listTitle").css({'display':'none'});
		$(".listNav").css({'display':'block'});
	})
	$(".listNav").children("ul").children("li").click(function(){
		$(".listNav").css({'display':'none'});
		$(".listTitle").css({'display':'block'});
	})
})