
//鼠标移入时显示双箭头
$("#flash").mouseenter(function(){
	$("#flash").children("a").animate({opacity: 'show'},300);
});
$("#flash").mouseleave(function(){
	$("#flash").children("a").animate({opacity: 'hide'},300);
});

//淡入淡出
var liBtn=$('#flashbtn').children("li");
var imgList=$('#flash').find("li");
var moveAuto=window.setInterval(function(){
	$(".fl-right").click();
},3000);

liBtn.mouseenter(function(){
	if($(this).hasClass("current")){
		return;
	}
	var newPos=$(this).index();
	var oldPos=$('.flash-btn .fl-btn .current').index();
	moveFun(newPos,oldPos);
});

$(".fl-left").click(function(){
	var oldPos=$('.flash-btn .fl-btn .current').index();
	var newPos=oldPos==0?2:oldPos-1;
	moveFun(newPos,oldPos);
});

$(".fl-right").click(function(){
	var oldPos=$('.flash-btn .fl-btn .current').index();
	var newPos=oldPos==2?0:oldPos+1;
	moveFun(newPos,oldPos);
});

function moveFun(newPos,oldPos){
	var newLi=imgList.eq(newPos);
	var oldLi=imgList.eq(oldPos);
	liBtn.eq(newPos).addClass('current');
	liBtn.eq(oldPos).removeClass('current');
	newLi.stop(false,true).fadeIn(600);
	oldLi.stop(false,true).fadeOut(600);
}

//关于汇众
$(".about-img").mouseenter(function(){
	$(this).children("img").stop(true).animate({width:"120%",height:"120%",marginLeft:"-50px",marginTop:"-24px"},600);
	$(this).children("p").stop(true).animate({top:"0px"},600);
});
$(".about-img").mouseleave(function(){
	$(this).children("img").stop(true).animate({width:"100%",height:"100%",left:"0px",marginLeft:"0px",marginTop:"0px"},600);
	$(this).children("p").stop(true).animate({top:"241px"},600);
});

$("#ab-l").click(function(){
	var allLi=$(".about-text").children("li");
	var oldPos=$('.about-text .current').index();
	var newPos=oldPos==0?2:oldPos-1;
	allLi.eq(newPos).addClass('current');
	allLi.eq(oldPos).removeClass('current');
});
$("#ab-r").click(function(){
	var allLi=$(".about-text").children("li");
	var oldPos=$('.about-text .current').index();
	var newPos=oldPos==2?0:oldPos+1;
	allLi.eq(newPos).addClass('current');
	allLi.eq(oldPos).removeClass('current');
});

//应用效果
var appAll=$(".app-main").children("div");
appAll.mouseenter(function(){
	if($(this).hasClass("current")){
		return;
	}
	var oldPos=$('.app-list .app-main .current').index();
	var newPos=$(this).index();
	
	appAll.eq(oldPos).removeClass('current');
	appAll.eq(newPos).addClass('current');
	appAll.eq(newPos).children(".app-btn").addClass("btn0"+(newPos+1)+"-cur");
	appAll.eq(oldPos).children(".app-btn").removeClass("btn0"+(oldPos+1)+"-cur");
	appAll.eq(oldPos).stop(true).animate({width: "158px"},300);
	appAll.eq(newPos).stop(true).animate({width:"475px"},300);
});

//合作伙伴
//$("#te-l") 左箭头
//$("#te-r") 右箭头
var liObjs=$("team-list").children("li");
$("#te-r").click(function(){
	$(".team-list").children("li:last").prependTo($(".team-list")).css({"margin-left":"-200px"});
	$(".team-list").children("li:first").animate({"margin-left":"0px"},100);
});
$("#te-l").click(function(){
	$(".team-list").children("li:first").animate({"margin-left":"-200px"},100,function(){
		$(this).css({"margin-left":"0px"});
		$(this).appendTo($(".team-list"));
	});
});