define([], function () {
    return {
        glass: (function () {
            $('.topcontent').load('header.html');
            
            $('.footercontent').load('footer.html');

            $('.spic').hover(function () {
                $('.sf').css('display', 'block');
                $('.bf').css('display', 'block');
                //小放大镜的尺寸
                $('.sf').width($(this).width() * $('.bf').width() / $('.bpic').width());
                $('.sf').height($(this).height() * $('.bf').height() / $('.bpic').height());
                var $bili = $('.bpic').width() / $('.spic').width();
                //鼠标在小放大镜里移动
                $('.spic').on('mousemove', function (ev) {
                    var $left = ev.pageX - $('.img-item').offset().left - $('.sf').width() / 2;
                    var $top = ev.pageY - $('.img-item').offset().top - $('.sf').height() / 2;
                    if ($left <= 0) {
                        $left = 0;
                    } else if ($left >= $('.spic').width() - $('.sf').width()) {
                        $left = $('.spic').width() - $('.sf').width();
                    }
                    if ($top <= 0) {
                        $top = 0;
                    } else if ($top >= $('.spic').height() - $('.sf').height()) {
                        $top = $('.spic').height() - $('.sf').height();
                    }

                    $('.sf').css({
                        left: $left,
                        top: $top
                    });
                    $('.bpic').css({
                        left: -$bili * $left,
                        top: -$bili * $top
                    })
                })
            }, function () {
                $('.sf').css('display', 'none');
                $('.bf').css('display', 'none');
            });

            //设置ul尺寸
            // var $li = $('.spic-list .list li');
            // console.log($('.bpic').width());
            // var $ul = $('.spic-list .list');
            // var $liwidth = $li.eq(0).innerWidth();
            // $ul.width($li.size() * $liwidth);


            $('.spic-list .list').on('click','li', function () {
                var url = $(this).find('img').attr('src');//当前点击的li下面的图片路径
                $(this).addClass('active').siblings().removeClass('active');
                $('.spic').find('img').attr('src', url);
                $('.bpic').attr('src', url);
            });

            // var $num = 6;//当前ul里面显示的个数。
            // if ($li.length <= 6) {
            //     $('#left,#right').css('color', '#fff');
            // }
            // $('#right').on('click', function () {
            //     if ($num < $li.size()) {
            //         $num++;
            //         $('#left').css('color', '#333');
            //         if ($num == $li.size()) {
            //             $('#right').css('color', '#fff');
            //         }
            //         $ul.animate({
            //             left: -($num - 6) * $liwidth
            //         });
            //     }
            // });

            // $('#left').on('click', function () {
            //     if ($num > 6) {
            //         $num--;
            //         $('#right').css('color', '#333');
            //         if ($num == 6) {
            //             $('#left').css('color', '#fff');
            //         }
            //         $ul.animate({
            //             left: -($num - 6) * $liwidth
            //         });
            //     }
            // });
        })()
    }
});