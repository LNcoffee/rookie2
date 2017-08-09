$(function(){
	
	var i=0;
	var clone=$(".scrollpics .banner-img li").first().clone();
	$(".scrollpics .banner-img").append(clone);
	var size=$(".scrollpics .banner-img li").size();
	for(var j=0;j<size-1;j++){
		$(".scrollpics .num").append("<li></li>");
	}
	$(".scrollpics .num li").first().addClass("on");
	/*鼠标划入圆点*/
	$(".scrollpics .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".scrollpics .banner-img").stop().animate({left:-index*480},500)
		$(this).addClass("on").siblings().removeClass("on")
	})

	/*自动轮播定时器*/
	var t=setInterval(function(){
		i++;
		move();
	},2000)

	/*对定时器的操作*/
	$(".scrollpics").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
		i++;
		move();
	},2000)
	})
	/*图片轮换*/
	function move(){
		if (i==size) {
			$(".scrollpics .banner-img").css({left:0})
			i=1;
		};
		if (i==-1) {
			$(".scrollpics .banner-img").css({left:-(size-1)*480})
			i=size-2;
		};
		$(".scrollpics .banner-img").stop().animate({left:-i*480},500)

		if (i==size-1) {
			$(".scrollpics .num li").eq(0).addClass("on").siblings().removeClass("on")
		} else{
			$(".scrollpics .num li").eq(i).addClass("on").siblings().removeClass("on")
		};
	}
})
