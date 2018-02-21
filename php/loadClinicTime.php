<?php

ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);

header("Content-Type:text/html;charset=utf-8");

$url = "http://www.chatbot.hk/DrCare.LongHolidayDrList.api.php";

$json = file_get_contents($url);
echo $json;

?>
