$(".compeny").children("li").click(function(){
	if($(this).hasClass("current")){
		return;
	}
	var oldPos=$(".compeny .current").index();
	$(this).addClass("current");
	$(".compeny").children("li").eq(oldPos).removeClass("current");
});
