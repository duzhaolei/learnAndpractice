<!DOCTYPE html>
<html>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
<title>我的第一个PHP</title>
<body>
<h1>我的PHP</h1>
<?php
  if(1>2){
  echo "我的第一个PHP";
  }else{
   echo "Hello Word";
  };
  ?>

  <br>

<?php
$a="我是变量";
echo $a;
?>

<br>

<?php
  //require_once('a.php');//require_once()引用的外部文件一旦出错，下面的代码会中断执行；
  include_once('a.php');//include_once()所引用的文件如果出错，会在报错的同时继续执行下面的代码
  $a = "我是外面的";
  function test()
  {
    global $a;
    echo $GLOBALS['b'];
  }
  test()
?>

</body>
</html>