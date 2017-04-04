
//固定置顶
$(function(){        
        //获取要定位元素距离浏览器顶部的距离
        var navH = $(".top").offset().top;
        //滚动条事件
        $(window).scroll(function(){
                //获取滚动条的滑动距离
                var scroH = $(this).scrollTop();
                //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
                if(scroH >  navH ){
                        $(".top").css({"position":"fixed","top":0,"left":0,});
                }
                else if(scroH <= navH ){
                        $(".top").css({"position":"static","margin":"0 auto",});
                }
        })
})


//资讯二级菜单的弹出
$(document).ready(function(){//加载整个DOM元素
	$("#information").click(function(){
        $(".secondNav").css({'z-index':'1'}).animate({left:'200px',opacity:'1'},850);
	})
})


//搜索弹框
$(document).ready(function(){
	$("#search").click(function(){
		$(".alert").css({"display":"block"});
	});
	$(".alert").click(function(){
		$(".alert").css({"display":"none"});
	});

})

//阻止搜索弹窗中的事件冒泡
window.onload = function(){
var input = document.getElementsByTagName("input")[0];
input.onclick=function(event){
  // 停止DOM事件层次传播
  event.stopPropagation();
};
}


//热文/短趣切换
$(document).ready(function(){//加载整个DOM元素
	$(".hot").hover(function(){
		$(".content").eq(1).addClass("displayNone");
		$(".content").eq(0).removeClass("displayNone");
		$(".hot").addClass("hover");
		$(".interesting").removeClass("hover");
	});
	$(".interesting").hover(function(){
		$(".content").eq(0).addClass("displayNone");
		$(".content").eq(1).removeClass("displayNone");
		$(".interesting").addClass("hover");
		$(".hot").removeClass("hover");
	});
});

//短趣弹窗
$(document).ready(function(){
	$("#content").children(".issay").children("h1").click(function(){
		$(".shortA").css({"display":"block"});
	});
	$(".close").mouseover(function(){
		$(".close").css({"background":"url(images/close-orange.png)"});
	})
	$(".close").mouseout(function(){
		$(".close").css({"background":"url(images/close.png)"});
	})
	$(".close").click(function(){
		$(".shortA").css({"display":"none"});
	})
})


//轮播按钮hover
$(document).ready(function(){
	//左切换按钮
	$(".turnLeft").mouseover(function(){
		$(".turnLeft").css({"background":"url(images/arrow-left-orange.png)"});
	});
	$(".turnLeft").mouseout(function(){
		$(".turnLeft").css({"background":"url(images/arrow-left-black.png)"});
	});
	//右切换按钮
	$(".turnRight").mouseover(function(){
		$(".turnRight").css({"background":"url(images/arrow-right-orange.png)"});
	});
	$(".turnRight").mouseout(function(){
		$(".turnRight").css({"background":"url(images/arrow-right-black.png)"});
	});
});


//轮播效果
$(document).ready(function(){
	//初始化
	$(".turnImg").children("li").eq(0).css({"left":"0px"});
	$(".turnImg").children("li").eq(1).css({"left":"1000px"});
	$(".turnImg").children("li").eq(2).css({"left":"2000px"});
	$(".turnImg").children("li").eq(3).css({"left":"3000px"});
	//轮播事件-右
	$(".turnRight").click(function(){
		//防止连续多按页面崩溃
		$(".turnImg").children("li").stop(true,true);
		$(".turnImg").children("li").eq(0).animate({left:'-1000px'},350);
		$(".turnImg").children("li").eq(1).animate({left:'0px'},350);
		$(".turnImg").children("li").eq(2).animate({left:'1000px'},350);
		$(".turnImg").children("li").eq(3).animate({left:'2000px'},350,function(){//调换li标签顺序
			$(".turnImg").children("li").eq(3).after($(".turnImg").children("li").eq(0));
			$(".turnImg").children("li").eq(3).css({"left":"3000px"});
		});
	});

	//轮播事件-左
	$(".turnLeft").click(function(){
		//防止连续多按页面崩溃
		$(".turnImg").children("li").stop(true,true);
		$(".turnImg").children("li").eq(3).css({"left":"-1000px"});
		$(".turnImg").children("li").eq(0).animate({left:'1000px'},350);
		$(".turnImg").children("li").eq(1).animate({left:'2000px'},350);
		$(".turnImg").children("li").eq(2).animate({left:'3000px'},350);
		$(".turnImg").children("li").eq(3).animate({left:'0px'},350,function(){//调换li标签顺序
			$(".turnImg").children("li").eq(0).before($(".turnImg").children("li").eq(3));
		});
	});
})

