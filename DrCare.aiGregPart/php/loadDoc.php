<?php
header("Content-Type:text/html;charset=utf-8");

$curPage = $_GET['curPage'];
$numPerPage = $_GET['perPage'];
$Category = $_GET['Category'];
$SubCategory = $_GET['SubCategory'];
$Region = $_GET['Region'];
$Address = $_GET['Address'];
$Name = $_GET['Name'];


$url = "http://www.chatbot.hk/DrCare.Doctor.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";

$url = $url."&Name=".urlencode($Name)."&Category=".urlencode($Category)."&SubCategory=".urlencode($SubCategory)."&Region=".urlencode($Region)."&Address=".urlencode($Address)."&Offset=".($curPage-1)*$numPerPage."&Limit=".$numPerPage;

$json = file_get_contents($url);

$results = json_decode($json, true);

$doctors = array();

array_push($doctors, $results["Result"], $results["Count"]);

echo json_encode($doctors);

?>
