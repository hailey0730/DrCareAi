<?php
header("Content-Type:text/html;charset=utf-8");

$articleID = $_GET['ArticleID'];
$subcat = $_GET['SubCategory'];
$keyPhase = $_GET['KeyPhase'];

$url = "http://www.drcare.ai/DrCare.ArticleHealth.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";
$url = $url."&ArticleID=".urlencode($articleID)."&SubCategory=".urlencode($subcat)."&KeyPhase=".urlencode($keyPhase);

$json = file_get_contents($url);
$results = json_decode($json, true);

echo json_encode($results);
?>