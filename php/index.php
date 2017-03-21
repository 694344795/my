<?php
// echo 'hello';
// echo $_SERVER["REQUEST_URI	
	echo $_GET['name'];
	var $name = $_GET['name'];
	$con = new mysqli('127.0.0.1','root','','item') or die('数据库连接失败'.$con->connect_error);
	$sql = "select * from bannerimg where name='$name'";
	$result = $con->query($sql);
	if($result->num_rows>0){
		while ($row = $result->fetch_assoc()) {
            echo $row.['src'];
        }
    } else{
        echo "数据表中没有数据!";
    }
    $conn5->close(); //关闭数据库

	}
?>
