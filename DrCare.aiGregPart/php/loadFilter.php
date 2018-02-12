<?php
header("Content-Type:text/html;charset=utf-8"); 

$url = "http://www.chatbot.hk/DrCare.DoctorSubCategory.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513&Category=";

$json = file_get_contents($url);

$subcategories = json_decode($json, true);

echo json_encode($subcategories);


?>
