<?php
header("Content-Type:text/html;charset=utf-8");

$curPage = $_GET['curPage'];
$numPerPage = $_GET['perPage'];
$Category = $_GET['Category'];
$SubCategory = $_GET['SubCategory'];

$url = "http://www.chatbot.hk/DrCare.Doctor.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";

$url = $url."&Category=".urlencode($Category)."&SubCategory=".urlencode($SubCategory)."&Offset=".($curPage-1)*$numPerPage."&Limit=".$numPerPage;


$json = file_get_contents($url);

$results = json_decode($json, true);

$doctors = array();

array_push($doctors, $results["Result"], $results["Count"]);

echo json_encode($doctors);

?>
