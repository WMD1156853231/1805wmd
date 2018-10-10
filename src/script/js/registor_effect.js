define([], function () {
    return {
        reg:(function(){
            $(function(){
				$('#form').validate({
					rules:{
						username:{
							required:true,
							rangelength:[2,10],
                            remote: {//将前端的name给后端
							    url: "http://10.31.162.91/mianshuiyigou/php/registor.php",     //后台处理程序
							    type: "post"               //数据发送方式
							}
						},
						password:{
							required:true,
							rangelength:[6,16]
						},
						repassword:{
							required:true,
							equalTo:'#password'
						},
						mobile_phone:{
                            required:true,
                            digits:true,
							rangelength:[11,11]
						}
					},
					messages:{
						username:{
							required:'用户名不能为空',
							rangelength:'请输入2到10位的用户名',
							remote:'用户名已存在'
						},
						password:{
                            required:'密码不能为空',
                            rangelength:'密码长度必须在6到16位'
						},
						repassword:{
                            required:'密码重复不能为空',
                            equalTo:'两次输入密码长度不同'
						},
						mobile_phone:{
                            required:'手机号码不能为空',
                            digits:'请输入正确的手机号码',
							rangelength:'手机号码长度有误'
						}
					}
					
				});
			});
			
			$.validator.setDefaults({
			    /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
			    success: function(label){
			        label.text('√').css('color','green').addClass('valid');
			    }
			});
		})(),
		login:(function(){
			function addCookie(key,value,day){
				var date=new Date();//创建日期对象
				date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
				document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
			}
			$('#btn').on('click',function(){
				var $username=$('#username').val();
				var $password=$('#password').val();
				$.ajax({
					type:'post',
					url:'http://10.31.162.91/mianshuiyigou/php/login.php',
					data:{//将用户名和密码传输给后端
						name:$username,
						pass:$password
					},
					success:function(data){//请求成功，接收后端返回的值
						if(!data){//用户名或者密码错误
							$('#error').html('用户名或者密码错误');
							$('#password').val('');
						}else{//成功
							addCookie('UserName',$username,7);
							location.href='http://10.31.162.91/mianshuiyigou/src/index.html';
						}
					}
				})
			});
		})()
    }
})