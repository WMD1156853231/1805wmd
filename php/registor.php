<?php
    include 'conn.php';

    if(isset($_POST['username']) || isset($_POST['submit'])){
        $username=@$_POST['username'];
    }else{
        exit('非法操作');
    }


    $result=mysql_query("select * from login where username='$username'");
    if(mysql_fetch_array($result)){//如果有值代表用户名存在。
        echo 'false';//有重复
    }else{   
        echo 'true';//没有重复
    }

    

    if(isset($_POST['submit'])){
        $user=$_POST['username'];
        $password=md5($_POST['password']);
        $phone=$_POST['mobile_phone'];
        mysql_query("insert login values(null,'$user','$password','$phone')");
        header('location:http://10.31.162.91/mianshuiyigou/src/index.html');
    }
?>