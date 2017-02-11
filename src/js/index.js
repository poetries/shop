// 推荐 天天低价
$("#topEvent .topList .topList-l ").find("p a").click(function(){
	var _index = $(this).index();
	$(this).addClass("active")
		   .siblings()
		   .removeClass("active");
	$("#topEvent .topList .topList-l .con").eq(_index)
		                                   .fadeIn(300)
		                                   .siblings()
		                                   .fadeOut(300);
});

$("#topEvent .topList .topList-r p.ti a ").click(function(){
	var _index = $(this).index();
	$(this).addClass("active")
		   .siblings()
		   .removeClass("active");
	$("#topEvent .topList .topList-r-recommend .con").eq(_index)
		                                             .fadeIn(300)
		                                             .siblings()
		                                             .fadeOut(300);
});

// 鲜花布局
$("#flower .flower ul.flowerNav li").not(".first").mouseover(function(){

	var _index = $(this).index();
	$(this).addClass("active")
		   .siblings()
		   .removeClass("active");
	$("#flower .flower .flowerCon .flowerR ul.flowerList").eq(_index)
		                                                  .fadeIn(400)
		                                                  .siblings()
		                                                  .fadeOut(400);
});

//手风琴效果
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



// 个性定制 右
$("#specific .parCon .parM ul li ").not(".last").mouseover(function(){
	var _index = $(this).index();
	$(this).addClass("active")
		   .siblings()
		   .removeClass("active");
	$("#specific .parCon .parR ul.con").eq(_index)
		                               .fadeIn(300)
		                               .siblings()
		                               .fadeOut(300);
});
$("#gift .parCon .parM ul li ").not(".last").mouseover(function(){
	var _index = $(this).index();
	$(this).addClass("active")
		   .siblings()
		   .removeClass("active");
	$("#gift .parCon .parR ul.con").eq(_index)
		                           .fadeIn(300)
		                           .siblings()
		                           .fadeOut(300);
});
