<?php
    include "conn.php";
    $result=mysql_query("select * from brand");
    $arr=array();
    for($i=0;$i<mysql_num_rows($result);$i++){
        $arr[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
    }
    echo json_encode($arr);
?>