<?php
header("Content-Type:text/html;charset=utf-8");

$Region = $_GET['Region'];
$Women = $_GET['Women'];
$Children = $_GET['Children'];
$Elder = $_GET['Elder'];

$url = "http://www.chatbot.hk/DrCare.SIV.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";

$url = $url."&Region=".$Region."&Women=".$Women."&Children=".$Children."&Elder=".$Elder;

$json = file_get_contents($url);

$result = json_decode($json, true);

echo json_encode($result);

?>
