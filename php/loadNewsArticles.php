<?php

header("Content-Type:text/html;charset=utf-8");

$url = 'http://hayhay0730.000webhostapp.com/clinicBotPageNewsArticles.json';
// $url = 'http://www.drcare.ai/Json/clinicBotPageNewsArticles.json';		//cannot access

$json = file_get_contents($url);

$results = json_decode($json, true);

echo json_encode($results);

?>