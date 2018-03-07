<?php
header("Content-Type:text/html;charset=utf-8");

$data = $_GET['data'];
$data_string = json_encode($data);

$url = "https://script.google.com/macros/s/AKfycbxD9Z6-Hqro7x-PDXLNRIsccw2-BJ_JNvcDAy4Wwz66gHfc0Ww/exec";
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($data_string))
);

$result = curl_exec($ch);
$result = json_decode($result);
var_dump($result);

?>
