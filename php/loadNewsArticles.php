<?php

header("Content-Type:text/html;charset=utf-8");

$url = 'http://www.chatbot.hk/DrCare.Clinicbot.News.api.php?Key=63ebdad609d02ac15a71bde64fb21f8ea43ac513';
// $url = 'http://www.drcare.ai/Json/clinicBotPageNewsArticles.json';		//cannot access

$json = file_get_contents($url);

$results = json_decode($json, true);

echo json_encode($results);

?>