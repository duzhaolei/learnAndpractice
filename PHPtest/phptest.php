<?php
    header("Content-type: application/json; charset=utf-8");
//    $username = $_GET['username']; //接收信息会显示在地址链接内，
   // $username = $_POST['username']; // 接收信息不再地址链接里

   $username = $_REQUEST['username'];
    if($username == 'admin'){
        // echo '登录成功';
        $msg = '登录成功';
        $error = 'ok';
        echo json_encode(array('msg'=>$msg,'errorCode'=>$error));
    }else{
        echo json_encode(array('msg'=>'登录失败','errorCode'=>'fail'));
    }
?>