define([], function () {
    return {
        glass: (function () {
            $('.topcontent').load('header.html');
			$('.asidecontent').load('aside.html');
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
        })()
    }
});