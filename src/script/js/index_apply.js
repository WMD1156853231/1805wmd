define([], function () {
	return {
		lunbo_apply:(function(){
            $.ajax({
                url:"http://10.31.162.91/mianshuiyigou/php/index_lunbo.php",
                async:true,
                dataType:"json"
            }).done(function(data){
                var $oUl=$('.figure-img');
                var $oLi='';
                $.each(data,function(index,value){
                    $oLi+=
                        `<li>
                            <img src="${value.img}" alt="">
                        </li>`;
                });
                $oUl.html($oLi);
            })
        })(),
        goods_apply:(function(){
            $.ajax({
                url:"http://10.31.162.91/mianshuiyigou/php/index_goods1.php",
                async:true,
                dataType:"json"
            }).done(function(data){
                var $oUl=$('.content-product');
                var $oLi1='';
                var $oLi2='';
                var $oLi3='';
                var $oLi4='';
                var $oLi5='';
                function draw(value){
                    var str='';
                    str+=`<li>
                    <a href="#">
                    <div class="cut">
                        每满1000<br>减100
                    </div>
                    <div class="info">
                        <p class="brand text-overflow">${value.title}</p>
                        <p class="brand-title text-overflow">${value.discription}</p>
                        <p class="price text-overflow">¥${value.price}</p>
                    </div>
                    <div class="product-img">
                        <img src="${value.img}" alt="">
                    </div>
                </a>
                    </li>`;
                    return str;
                    
                }
                $.each(data,function(index,value){
                    if(value.sid>4 && value.sid<=8){
                        $oLi1+=draw(value);
                        $oUl.eq(0).html($oLi1);
                      
                    }
                    if(value.sid>4 && value.sid<=8){
                        $oLi2+=draw(value);
                        $oUl.eq(1).html($oLi2);
                      
                    }
                    
                    if(value.sid>8 && value.sid<=12){
                        $oLi3+=draw(value);
                        $oUl.eq(2).html($oLi3);
                    }
                    if(value.sid>12 && value.sid<=16){
                        $oLi4+=draw(value);
                        $oUl.eq(3).html($oLi4);
                      
                    }
                    if(value.sid>16 && value.sid<=20){
                        $oLi5+=draw(value);
                        $oUl.eq(4).html($oLi5);
                      
                    }                
                });
                
            })
        })(),
        bigimg_apply:(function(){
            $.ajax({
                url:"http://10.31.162.91/mianshuiyigou/php/index_bigimg.php",
                async:true,
                dataType:"json"
            }).done(function(data){
                var $odiv=$('.content-banner a');
                var $oLi1='';
                var $oLi2='';
                var $oLi3='';
                var $oLi4='';
                var $oLi5='';
                
                $.each(data,function(index,value){
                    if(value.sid==1){
                        $oLi1+=`
                    <img src="${value.img}" alt="">
                        `;
                    $odiv.eq(0).html($oLi1);
                      
                    }
                    if(value.sid==2){
                        $oLi2+=`
                    <img src="${value.img}" alt="">
                        `;
                    $odiv.eq(1).html($oLi2);
                      
                    }
                    
                    if(value.sid==3){
                        $oLi3+=`
                    <img src="${value.img}" alt="">
                        `;
                    $odiv.eq(2).html($oLi3);
                    }
                    if(value.sid==4){
                        $oLi4+=`
                    <img src="${value.img}" alt="">
                        `;
                    $odiv.eq(3).html($oLi4);
                      
                    }
                    if(value.sid==5){
                        $oLi5+=`
                    <img src="${value.img}" alt="">
                        `;
                    $odiv.eq(4).html($oLi5);
                      
                    }                
                });
                
            })
        })(),
	}
});