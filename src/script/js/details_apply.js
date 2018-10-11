define([], function () {
	return {
		content:(function(){
			$.ajax({
                url:"http://10.31.162.91/mianshuiyigou/php/details.php",
				async:true,
				data:{
					sid:location.search.substring(1).split('=')[1]
				},
				dataType:"json"
				//头部
            }).done(function(data){
                var $oBox=$('.main-top p');
                var $str='';               
                    $str+=
                        `<a href="index.html" title="首页" class="link-color">首页</a> >
						<a href="#" title="护肤" class="link-color">护肤</a> >
						<a href="#" title="面部护理" class="link-color">面部护理</a> >
						<a href="#" title="面膜" class="link-color">面膜</a> >
						<i>${data[0].discription}</i>`;
                
				$oBox.html($str);
			//左侧上面放大镜小图
            }).done(function(data){
                var $spic=$('.main-content-left .img-item .spic img');
                $spic.attr("src",data[0].img.split(',')[0]);
			//大放大镜
            }).done(function(data){
                var $bf=$('.main-content-left .img-item .bf img');
                $bf.attr("src",data[0].img.split(',')[0]);
			//放大镜下面小图
            }).done(function(data){
                var $oList=$('.spic-list .list');
				var $str='';
									
						$str+=
                        `<li class="active">
						<img src="${data[0].img.split(',')[0]}" alt="">
					</li>
					<li>
						<img src="${data[0].img.split(',')[1]}" alt="">
					</li>
					<li>
						<img src="${data[0].img.split(',')[2]}" alt="">
					</li>
					<li>
						<img src="${data[0].img.split(',')[3]}" alt="">
					</li>
					<li>
						<img src="${data[0].img.split(',')[4]}" alt="">
					</li>`;
					
					              
                    $oList.html($str);
                
				
			//右侧标题
            }).done(function(data){
                var $oTitle=$('.main-content-right .title');
                var $str='';               
                    $str+=
                        `
						<a href="#">${data[0].fulltitle}</a><br>
						${data[0].discription}					
					`;
                
				$oTitle.html($str);
				
			//价格
            }).done(function(data){
                var $oUl=$('.main-content-right .price');
                var $str='';               
                    $str+=
                        `
						<li>
						免税价：<span class="free-price">¥${data[0].special}</span>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<del>市场价：¥${data[0].price}</del>
					</li>
					<li>
						促销价：
						<b>￥</b>
						<span class="special">10656</span>
					</li>					
					`;
                
                $oUl.html($str);
            })
		})()
	}
});