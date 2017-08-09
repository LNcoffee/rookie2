$(document).ready(function  (index) {
	// alert("aaa");
	$(".br_title li").each(function(index){
		var liNode =$(this);
		$(this).mouseover(function(){
			t=setTimeout(function() {
				$(".content").removeClass("content");
				$(".br_title li").removeClass("tabin");
				$(".br_con").eq(index).addClass("content");
				liNode.addClass("tabin");
			}, 250);
		}).mouseout(function(){
			clearTimeout(t);
		})
	})
})