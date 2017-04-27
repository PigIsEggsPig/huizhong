$(".pro-list").children("li").click(function(){
	if($(this).hasClass=="current"){
		return;
	}
	var oldPos=$(".pro-list .current").index();
	$(this).addClass("current");
	$(".pro-list").children("li").eq(oldPos).removeClass("current");
	//插件
	var dataValue=$(this).attr('data');
	$('.main-list').isotope({
		itemSelector: '.main-list li',
		filter:dataValue
	});
});
//插件
$('.main-list').isotope({
	itemSelector: '.main-list li'
});