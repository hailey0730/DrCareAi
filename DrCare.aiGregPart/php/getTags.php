<?php
$keyword = $_GET['keyword'];

require_once("connectDB.php");

$sql = "SELECT * FROM tags where name like '%$keyword%' order by id desc limit 5";

$result = mysql_query($sql);

if(mysql_num_rows($result) <= 0) 
	exit('0');

$tags = array();

while($row = mysql_fetch_row($result)){
    $tags[] = $row[1]; // row[1] is the name
}

echo json_encode($tags);

?>
