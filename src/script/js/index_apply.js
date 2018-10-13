define([], function () {
    return {
        // search: (function () {
        //     $('.topcontent').load('header.html', function () {


        //         //https://ds.suning.cn/ds/his/new/-'+$(this).val()+'-0-1_0-jsonp123.jsonp
        //         var $search = $('#search-input');
        //         $.ajax({
        //             url: 'https://suggest.taobao.com/sug?code=utf-8&q=' + $search.val() + '&_ksTS=1539310285839_393&callback=jsonp394',
        //             dataType: 'jsonp'
        //         }).done(function (data) {
        //             var $oUl = $('.search .search_ul');
        //             var $str = '';
        //             $.each(data.result, function (index, value) {
        //                 $str += `<li>${value[0]}</li>`;
        //                 $oUl.html($str);
        //             });
        //         });
        //     });
        // })(),
        lunbo_apply: (function () {
            $.ajax({
                url: "http://10.31.162.91/mianshuiyigou/php/index_lunbo.php",
                async: true,
                dataType: "json"
            }).done(function (data) {
                var $oUl = $('.figure-img');
                var $oLi = '';
                $.each(data, function (index, value) {
                    $oLi +=
                        `<li>
                            <img src="${value.img}" alt="">
                        </li>`;
                });
                $oUl.html($oLi);
            })
        })(),
        goods_apply: (function () {
            $.ajax({
                url: "http://10.31.162.91/mianshuiyigou/php/index_goods1.php",
                async: true,
                dataType: "json"
            }).done(function (data) {
                var $oUl = $('.content-product');
                var $oLi1 = '';
                var $oLi2 = '';
                var $oLi3 = '';
                var $oLi4 = '';
                var $oLi5 = '';
                function draw(value) {
                    var str = '';
                    str += `<li>
                    <a href="details.html?sid=${value.sid}">
                    <div class="cut">
                        每满1000<br>减100
                    </div>
                    <div class="info">
                        <p class="brand text-overflow">${value.title}</p>
                        <p class="brand-title text-overflow">${value.discription}</p>
                        <p class="price text-overflow">¥${value.price}</p>
                    </div>
                    <div class="product-img">
                        <img src="${value.img.split(',')[0]}" alt="">
                    </div>
                </a>
                    </li>`;
                    return str;

                }
                $.each(data, function (index, value) {
                    if (value.sid > 0 && value.sid <= 4) {
                        $oLi1 += draw(value);
                        $oUl.eq(0).html($oLi1);

                    }
                    if (value.sid > 4 && value.sid <= 8) {
                        $oLi2 += draw(value);
                        $oUl.eq(1).html($oLi2);

                    }

                    if (value.sid > 8 && value.sid <= 12) {
                        $oLi3 += draw(value);
                        $oUl.eq(2).html($oLi3);
                    }
                    if (value.sid > 12 && value.sid <= 16) {
                        $oLi4 += draw(value);
                        $oUl.eq(3).html($oLi4);

                    }
                    if (value.sid > 16 && value.sid <= 20) {
                        $oLi5 += draw(value);
                        $oUl.eq(4).html($oLi5);

                    }
                });

            })
        })(),
        bigimg_apply: (function () {
            $.ajax({
                url: "http://10.31.162.91/mianshuiyigou/php/index_bigimg.php",
                async: true,
                dataType: "json"
            }).done(function (data) {
                var $odiv = $('.content-banner a');
                var $oLi1 = '';
                var $oLi2 = '';
                var $oLi3 = '';
                var $oLi4 = '';
                var $oLi5 = '';

                $.each(data, function (index, value) {
                    if (value.sid == 1) {
                        $oLi1 += `
                    <img src="${value.img}" alt="">
                        `;
                        $odiv.eq(0).html($oLi1);

                    }
                    if (value.sid == 2) {
                        $oLi2 += `
                    <img src="${value.img}" alt="">
                        `;
                        $odiv.eq(1).html($oLi2);

                    }

                    if (value.sid == 3) {
                        $oLi3 += `
                    <img src="${value.img}" alt="">
                        `;
                        $odiv.eq(2).html($oLi3);
                    }
                    if (value.sid == 4) {
                        $oLi4 += `
                    <img src="${value.img}" alt="">
                        `;
                        $odiv.eq(3).html($oLi4);

                    }
                    if (value.sid == 5) {
                        $oLi5 += `
                    <img src="${value.img}" alt="">
                        `;
                        $odiv.eq(4).html($oLi5);

                    }
                });
            })
        })(),
        brand: (function () {
            $.ajax({
                url: "http://10.31.162.91/mianshuiyigou/php/brand.php",
                async: true,
                dataType: "json"
            }).done(function (data) {
                var $oUl = $('.brand-nav');
                var $oLi1 = '';
                var $oLi2 = '';
                var $oLi3 = '';
                var $oLi4 = '';
                var $oLi5 = '';
                var $oLi6 = '';
                var $oLi7 = '';
                var $oLi8 = '';
                function draw(value) {
                    var str = '';
                    str += `<li>
                    <a href="#">
                        <div class="big-brand-img">
                            <img src="${value.img}" alt="">
                            <span></span>
                        </div>
                        <div class="brand_name text-overflow">
                        ${value.title}
                        </div>
                    </a>
                </li>`;
                    return str;

                }
                $.each(data, function (index, value) {
                    if (value.sid > 0 && value.sid <= 6) {
                        $oLi1 += draw(value);
                        $oUl.eq(0).html($oLi1);

                    }
                    if (value.sid > 6 && value.sid <= 12) {
                        $oLi2 += draw(value);
                        $oUl.eq(1).html($oLi2);

                    }

                    if (value.sid > 12 && value.sid <= 18) {
                        $oLi3 += draw(value);
                        $oUl.eq(2).html($oLi3);
                    }
                    if (value.sid > 4 && value.sid <= 10) {
                        $oLi4 += draw(value);
                        $oUl.eq(3).html($oLi4);

                    }
                    if (value.sid > 10 && value.sid <= 16) {
                        $oLi5 += draw(value);
                        $oUl.eq(4).html($oLi5);
                    }
                    if (value.sid > 0 && value.sid <= 6) {
                        $oLi6 += draw(value);
                        $oUl.eq(5).html($oLi6);
                    }
                    if (value.sid > 6 && value.sid <= 12) {
                        $oLi7 += draw(value);
                        $oUl.eq(6).html($oLi7);
                    }
                    if (value.sid > 12 && value.sid <= 18) {
                        $oLi8 += draw(value);
                        $oUl.eq(7).html($oLi8);
                    }
                });
            })
        })()
    }
});