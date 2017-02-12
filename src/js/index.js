// 推荐天天低价
$(".topList-l .title li").tabs();

// 热门活动
$(".topList-r .ti li").tabs();

// 鲜花布局
$("#flower .flower ul.flowerNav li").not(".first").tabs();

// 个性定制 右
$("#specific .parCon .parM ul li ").not(".last").tabs();

// 生日礼物
$("#gift .parCon .parM ul li ").not(".last").tabs();


// 手风琴
$("#flower .flower .flowerCon .flowerL li").mouseover(function(){

	var _index = $(this).index();
	$(this).addClass('active')
		.siblings()
		.removeClass('active');
	$(this).find("h3,p")
		.addClass("active")
		.end()
		.siblings()
		.find("h3,p")
		.removeClass("active");

});