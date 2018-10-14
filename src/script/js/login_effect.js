define([], function () {
	return {
        login:!function(){
            function addCookie(key,value,day){
                var date=new Date();//创建日期对象
                date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
                document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
            }
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
            $('#btn').on('click',function(){
                var $username=$('#username').val();
                var $password=$('#password').val();
                $.ajax({
                    type:'post',
                    url:'../php/login.php',
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
                            location.href='index.html';
                        }
                    }
                })
            });
            // if( getcookie('UserName') ){//cookie存在,去cookie赋值
            //     console.log(getcookie('UserName'))
            //     $('#username').val()=getcookie('UserName');
            //     $('.mb-checkbox').prop('checked',true);
            // }
        }()
    }
})