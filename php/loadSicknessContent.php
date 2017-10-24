<?php
header("Content-Type:text/html;charset=utf-8");
$Name = $_GET(['Name']);

$url = "http://www.chatbot.hk/DrCare.Disease.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";
$url = $url."&Name=".urlencode($Name);

$json = file_get_contents($url);

$results = json_decode($json, true);

echo json_encode($results);
?>