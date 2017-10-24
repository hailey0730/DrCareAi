<?php

$mailTo = 'hayhay0730@gmail.com';
$clientName = $_POST['clientName'];
$mailFrom = $_POST['emailFrom'];
$subject = $_POST['category'];
$message = $_POST['message'];


			
mail($mailTo, $subject, $message, "From: ".$mailFrom);
?>