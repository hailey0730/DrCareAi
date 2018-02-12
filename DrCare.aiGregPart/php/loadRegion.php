<?php
header("Content-Type:text/html;charset=utf-8"); 

$url = "http://www.chatbot.hk/DrCare.Region.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";

$json = file_get_contents($url);

$regions = json_decode($json);

echo json_encode($regions);


?>
