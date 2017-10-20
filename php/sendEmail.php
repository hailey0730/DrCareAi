<?php

$mailTo = $_POST['emailTo'];
$clientName = $_POST['clientName'];
$mailFrom = $_POST['emailFrom'];
$subject = $_POST['category'];
$message = $_POST['message'];


			
mail($mailTo, $subject, $message." 來自".$clientName, "From: ".$mailFrom);
?>