
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
                if(scroH <= navH ){
                        $(".top").css({"position":"static","margin":"62px auto",});
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
		$(".alert").css({"display":"block","position":"fixed"});
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