<?php
header("Content-Type:text/html;charset=utf-8");

$Tag = $_GET['Tag'];


$url = "http://www.drcare.ai/DrCare.DiseaseType.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";
$url = $url."&Tag=".urlencode($Tag);

$json = file_get_contents($url);
$results = json_decode($json, true);

echo json_encode($results);
?>