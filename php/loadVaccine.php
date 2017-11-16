<?php

ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);

header("Content-Type:text/html;charset=utf-8");

// $Region = $_GET['Region'];
// $Women = $_GET['Women'];
// $Children = $_GET['Children'];
// $Elder = $_GET['Elderly'];

$Region = (!empty($_GET["Region"]) ? $_GET["Region"] : "");
$Women = (!empty($_GET["Women"]) ? $_GET["Women"] : "");
$Children = (!empty($_GET["Children"]) ? $_GET["Children"] : "");
$Elder = (!empty($_GET["Elderly"]) ? $_GET["Elderly"] : "");

$url = "http://www.chatbot.hk/DrCare.SIV.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513";

$url = $url."&Region=".$Region."&Women=".$Women."&Children=".$Children."&Elder=".$Elder;
//$url = $url."&Region=".urlencode( $Region)."&Women=".$Women."&Children=".$Children."&Elder=".$Elder;

// echo $url; exit;// DEBUG

$json = file_get_contents($url);
//echo $json; exit; // DEBUG
echo $json;

//$result = json_decode($json, true);
//echo count($result); exit;

// echo $result;

//echo json_encode($result);
//echo json_last_error(); // DEBUG

?>
