//1.当滚动条滚到header的下面时，".left"固定定位到页面刚开始的位置。
$(window).scroll(function(){ 
        var top = $(this).scrollTop(); // 当前窗口的滚动距离
            if(top>=34){
               $('.left').css({
  					position: 'fixed',
  					top: '0'
				});
            }
            else{
            	$('.left').css('position','absolute');
            }
            });

$('#search').focus(function(){
	$(this).css('border','5px #ed4040');
});
//2.当点击回到顶部按钮时，滚动条回到刚开始的位置。
//自己的思路：先获取到竖向滚动条当前的位置，然后再将竖向滚动条的位置设为零。当前位置x~0的变化会经历一定的时间，不能一下子就到顶部，不太友好。
//实际的做法：用animate动画将滚动条滑动到页面顶部。
$('#top').click(function(){
		$('html,body').animate({scrollTop:0},300);
})
//3.滚动条滚动到页面底部时，滚动加载信息。
//牵扯到与后台数据的交互，先不写啦

//4.鼠标移入某一导航时，相应的子菜单会显示出来
//自己的思路：鼠标移入导航，相应的子菜单显示出来；鼠标移出导航，相应的子菜单过一段时间消失；鼠标移入子菜单，可以正常选择进入导航；鼠标移出子菜单，子菜单立即消失。
//现写出子菜单并放在页面的适当位置，将其display设为none。当鼠标移入时，该子菜单display变为block；当鼠标移出时，设置一个延迟器，让其子菜单的display过段时间变成none；鼠标移出子菜单，子菜单的display立即变为none。
$('#more').mouseover(function(){
	$('.submenu').show('fast');
});
$('#more').mouseleave(function(){
	$('.submenu').hide('slow');
});

$('.submenu').mouseleave(function(){
	$(this).hide('fast');
});
$('#header-more').mouseover(function(){
	$('#top-more').show('fast');
});
$('#header-more').mouseleave(function(){
	$('#top-more').hide('last');
});
$('#top-more').mouseleave(function(){
	$(this).hide('fast');
});
//5.鼠标移入广告列表的取消，会出现不感兴趣的提示。

$('.icon-cancel').click(function(){
	$(this).parents('.prompt').hide();
})
