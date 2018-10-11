define([], function () {
	return {
		search:(function(){
			$('.topcontent').load('header.html',function(){
				
			});
		})(),
		aside: (function () {
			$('.asidecontent').load('aside.html', function () {
				//侧边栏进出效果
				var $gw = $('.gouwu');
				var $esc = $('.esc');
				var $cart = $('.cart');
				var $aside = $('.asidecontent');
				$gw.on('click', function () {//点击购物流程										
					if ($gw.hasClass('bg-ff4a00') && $aside.css({ right: 0 })) {//如果有橙色背景同时侧边栏right值为0
						$aside.animate({ right: -280 });//right值变为-280
						$(this).removeClass('bg-ff4a00');//移除橙色背景
					} else {
						$aside.animate({//否则right值变为-280，加上橙色背景
							right: 0
						})
						$(this).addClass('bg-ff4a00');
						$('.right-shop-step').show();
					}

					if ($cart.hasClass('bg-ff4a00') && $aside.css({ right: 0 })) {//如果点击时购物车背景为橙色同时此时right值为0
						$(this).addClass('bg-ff4a00');//购物流程加上橙色背景
						$('.right-shop-step').show();
						$cart.removeClass('bg-ff4a00');//购物车移除橙色背景
						$('.right-goods-cart').hide();

					}
				});
				$cart.on('click', function () {
					if ($cart.hasClass('bg-ff4a00') && $aside.css({ right: 0 })) {
						$aside.animate({ right: -280 });
						$(this).removeClass('bg-ff4a00');
					} else {
						$aside.animate({
							right: 0
						})
						$(this).addClass('bg-ff4a00');
						$('.right-goods-cart').show();
					}
					if ($gw.hasClass('bg-ff4a00') && $aside.css({ right: 0 })) {
						$(this).addClass('bg-ff4a00');
						$('.right-goods-cart').show();
						$gw.removeClass('bg-ff4a00');
						$('.right-shop-step').hide();
					}
				});
				$esc.on('click', function () {
					$aside.animate({ right: -280 });
					$gw.removeClass('bg-ff4a00');
					$cart.removeClass('bg-ff4a00');

				});


			});
		}),
		louti: (function () {
			

			$('.footercontent').load('footer.html');
			/*-------------楼梯-----------------*/
			var $louti = $('#loutinav');
			var $loutili = $('#loutinav li');
			var $louceng = $('.louti');
			$louti.hide();
			$(window).on('scroll', function () {
				var $scrolltop = $(window).scrollTop();//获取滚动条的top值
				if ($scrolltop >= 400) {
					$louti.show();
				} else {
					$louti.hide();
				}
				$louceng.each(function (index) {
					var $top = $louceng.eq(index).offset().top + $(this).innerHeight() / 2;
					if ($top > $scrolltop) {
						$loutili.removeClass('active');
						$loutili.eq($(this).index()).addClass('active');
						return false;
						//每次只能有一个条件满足，其他阻止循环
					}
				})
			});
			$loutili.not('.last').on('click', function () {
				var $top = $louceng.eq($(this).index()).offset().top;
				$('html,body').animate({
					scrollTop: $top
				});
			});
			$('.last').on('click', function () {
				$('html,body').animate({
					scrollTop: 0
				});
			});
		})(),
		lunbo: (function () {
			var index = 0;
			var $timer = null;
			$('.bullet li').on('mouseover', function () {
				$('.next').show();
				$('.prev').show();
				$(this).addClass('current').siblings('.bullet li').removeClass('current');
				$('.figure-img li').eq($(this).index()).stop(true).animate({ opacity: 1 }).siblings('.figure-img li').animate({ opacity: 0 });
				index = $(this).index();
			});
			$('.figure').hover(function () {
				$('.next').show();
				$('.prev').show();
				clearInterval($timer);
			}, function () {
				$('.next').hide();
				$('.prev').hide();
				clearInterval($timer);
				$timer = setInterval(function () {
					$('.next').click();
				}, 1000)
			})
			$('.next').on('click', function () {
				index++;
				if (index >= $('.bullet li').size()) {
					index = 0;
				}
				$('.bullet li').eq(index).addClass('current').siblings('.bullet li').removeClass('current');
				$('.figure-img li').eq(index).stop(true).animate({ opacity: 1 }).siblings('.figure-img li').animate({ opacity: 0 });
			});

			$('.prev').on('click', function () {
				index--;
				if (index < 0) {
					index = $('.bullet li').size() - 1;
				}
				console.log(index);
				$('.bullet li').eq(index).addClass('current').siblings('.bullet li').removeClass('current');
				$('.figure-img li').eq(index).stop(true).animate({ opacity: 1 }).siblings('.figure-img li').animate({ opacity: 0 });
			});

		})(),
		hot_tab: (function () {
			$('.hot-tab li').on('click', function () {
				$(this).addClass('check').siblings('.hot-tab li').removeClass('check');
				$('.hot-goodlist ul').eq($(this).index()).show().siblings('.hot-goodlist ul').hide();
			});
		})(),
		brand_tab: (function () {
			function tab(ele) {
				$(ele + ' .tab span').on('mouseover', function () {
					$(this).addClass('current').siblings('.big-brand .tab span').removeClass('current');
					$(ele + ' ul').eq($(this).index()).show().siblings(ele + ' ul').hide();
				});
			}
			tab('.two');
			tab('.three');
			tab('.four');
		})()
	}
});