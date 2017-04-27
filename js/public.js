//导航
$(".nav li,.nav dd").each(function(){
	if($(this).children(".nav-pub").hasClass("nav-pub")){
		$(this).mouseenter(function(){
			if(this.nodeName=="DD"){
				$(this).children("a").addClass("navCur");
			}
			$(this).children(".nav-pub").show();
		});
		$(this).mouseleave(function(){
			if(this.nodeName=="DD"){
				$(this).children("a").removeClass("navCur");
			}
			$(this).children(".nav-pub").hide();
		});
	}
});


//侧边导航栏
$(".page04").click(function(){
	toTopFun();
});

//底部置顶
$(".toTop").click(function(){
	toTopFun();
});

window.onscroll=function(){
	var scrollTopNum=document.documentElement.scrollTop+document.body.scrollTop;
	var winHeight=document.documentElement.clientHeight/2;
	console.log(winHeight);
	if(scrollTopNum>winHeight)
	{
		$(".toTop").fadeIn(600);
	}
	else{
		$(".toTop").fadeOut(600);
	}
}
//向上滚动
function toTopFun(){
	var scrollTopNum=document.documentElement.scrollTop+document.body.scrollTop;
	scrollTopNum-=30;
	if(scrollTopNum>0){
		document.documentElement.scrollTop=scrollTopNum;
		document.body.scrollTop=scrollTopNum;
		window.setTimeout(toTopFun,5);
	}
}