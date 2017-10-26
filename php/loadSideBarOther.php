<?php
header("Content-Type:text/html;charset=utf-8");

$url = "";

$json = file_get_contents($url);

$results = json_decode($json, true);

echo json_encode($results);

?>