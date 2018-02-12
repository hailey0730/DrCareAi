<?php
header("Content-Type:text/html;charset=utf-8");

$ID = $_GET['ID'];

$url = "http://www.chatbot.hk/DrCare.Doctor.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";

$url = $url."&ID=".$ID;

$json = file_get_contents($url);

$doctor = json_decode($json, true);

echo json_encode($doctor);

?>
