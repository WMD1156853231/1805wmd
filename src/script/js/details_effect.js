define([], function () {
    return {
        bigglass: (function () {
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


            $('.spic-list .list').on('click', 'li', function () {
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
        })(),
        cookie: (function () {
            // 1.通过详情页添加商品加入购物车，通过购物车页面下面的推荐商品加入购物车。
            //思路：通过详情页将商品的编号和商品的数量存放到cookie里面，利用数组（多个商品）。
            //确认是第一次点击购物，还是多次。

            //2.不管是第一次点击还是多次点击加入购物车按钮都要提前获取cookie。提前约定cookie的名称。（cartsid，cartnum）
            //添加cookie的函数
            function addcookie(key, value, day) {
                var date = new Date(); //创建日期对象
                date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
                document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
            }
            //得到cookie
            function getcookie(key) {
                var str = decodeURI(document.cookie);
                var arr = str.split('; ');
                for (var i = 0; i < arr.length; i++) {
                    var arr1 = arr[i].split('=');
                    if (arr1[0] == key) {
                        return arr1[1];
                    }
                }
            }
            //删除cookie
            function delcookie(key) {
                addcookie(key, '', -1); //添加的函数,将时间设置为过去时间
            }

            var sidarr = []; //将取得cookie的编号存放到此数组
            var numarr = []; //将取得cookie的数量存放到此数组
            //获取cookie,值变成数组
            function getcookievalue() {
                if (getcookie('cartsid') && getcookie('cartnum')) {
                    sidarr = getcookie('cartsid').split(','); //[1,2,3,4]
                    numarr = getcookie('cartnum').split(','); //[50,60,70,80]
                }
            }
            //到此位置,cookie必须先获取,确定商品是否存在购物车里面
            //3.判断是否是第一次添加
            $('.cartadd a').on('click', function () {
                var sid = location.search.substring(1).split('=')[1]; //获取当前页面a对应的图片的sid。  5
                getcookievalue();//获取cookie,值变成数组
                if ($.inArray(sid, sidarr) != -1) { //sid存在,数量累加
                    if (getcookie('cartnum') == '') {
                        var num = parseInt($('.sum .val').val());
                        numarr[$.inArray(sid, sidarr)] = num;//根据$.inArray通过sid确定位置.
                        addcookie('cartnum', numarr.toString(), 7);//修改后的结果
                        sidarr[$.inArray(sid, sidarr)] = sid;//将当前id添加到对应的位置。
                        addcookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
                    } else {
                        var num = parseInt(numarr[$.inArray(sid, sidarr)]) + parseInt($('.sum .val').val());//当前的值和cookie里面的值(和sid对应的值)进行累加
                        numarr[$.inArray(sid, sidarr)] = num;//将新的数量，覆盖原先的值。
                        addcookie('cartnum', numarr, 10);
                    }
                } else { //不存在,存入cookie
                    sidarr.push(sid); //将sid追加到数组
                    addcookie('cartsid', sidarr, 10); //存cookie
                    numarr.push($('.sum .val').val()); //将表单的值追加到数组
                    addcookie('cartnum', numarr, 10); //存cookie
                }
            });
        })()
    }
});