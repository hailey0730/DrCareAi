<?php
header("Content-Type:text/html;charset=utf-8");

$target = $_GET['target'];
$KeyPhase = $_GET['KeyPhase'];

$url = "http://www.chatbot.hk/DrCare.Article.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";


if($target == "all") {
	
}
else{ //when target is doc id
	
	$url = $url."&Doctor=".urlencode($target);

}

if($KeyPhase != null){
	$url = $url."&KeyPhase=".urlencode($KeyPhase);
}

$json = file_get_contents($url);

$articles = json_decode($json, true);

echo json_encode($articles);

?>
