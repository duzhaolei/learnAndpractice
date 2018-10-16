<?php
// $con = mysqli_connect("localhost","root",'','news');
$con = mysqli_connect("localhost", "root", "", "phplearn");
if(!$con)
{
	die('Could not comnet:'.mysqli_connect_error());
}else{
	//echo "mysql connnect ok";
	// mysqli_select_db("news", $con);
	$sql = "INSERT INTO `news`(`newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES ('呵呵','图片路径','逗比东西南北','2018-10-15')";
	mysqli_query("set name 'utf-8'");
	$result = $con->query($sql);
	if(!$result)
	{
		die('Error:'.mysqli_error($con));
	}else{
		echo "success";
	}

}
mysqli_close($con);
?>