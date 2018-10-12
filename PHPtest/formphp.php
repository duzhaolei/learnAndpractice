<!DOCTYPE html>
<html>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
<title>我的第一个PHP</title>
<script type='text/javaScript' src="http://libs.baidu.com/jquery/2.1.1/jquery.min.js"></script>
<body>
<form action="phptest.php" method="get">
    <label for="username">帐号</label>
    <input type="text" name="username" id="username">
      <br>
      <label for="password">密码</label>
    <input type="password" name="password" id="password">
    <br>
    <input type="submit" id="sub" value="提交">
</form>
<script type="text/javaScript">
    $('#sub').click(function(e){
        e.preventDefault()
        $.ajax({
            url:'phptest.php',
            type:'get',
            dataType:'json',
            data:{
                username:$('#username').val()
            },
            success:function(data){
                console.log(data.msg)
            },
            error:function(){
               alert("登录失败")
            }
        })
    })
</script>
</body>
</html>