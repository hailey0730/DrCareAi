<?php
header("Content-Type:text/html;charset=utf-8"); 

$word = $_GET["word"];

$url = "http://www.chatbot.hk/NLP.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513&Say=".urlencode($word);

$json = file_get_contents($url);

$result = json_decode($json, true);

echo json_encode($result["Parameters"]);

?>
