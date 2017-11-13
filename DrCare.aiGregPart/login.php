<?php

if(!isset($_POST['submit'])){  
    exit('ERROR');
}

$username = htmlspecialchars($_POST['username']);
$password = MD5($_POST['password']); //encoding password
$curURL = $_POST['url'];

require_once "connectDB.php";

// check userid
$check_query = mysql_query("SELECT * FROM user WHERE username='$username' AND password='$password' LIMIT 1");

if($result = mysql_fetch_array($check_query)) {
    //login successfully
    session_start();
    $_SESSION['user_name'] = $result['name'];
    $_SESSION['user_type'] = $result['type'];
    $_SESSION['user_id'] = $result['id'];
    if($_SESSION['user_type'] == 1){
    	$_SESSION['doc_id'] = $result['docID'];
    	$query = mysql_query("SELECT * FROM doc WHERE id=".$_SESSION['doc_id']." LIMIT 1");
    	$docInfo = mysql_fetch_array($query);
    	$_SESSION['user_name'] = $docInfo['name'];
    	$_SESSION['doc_type'] = $docInfo['type'];
    }

    header("Location:".$curURL);
    exit;
}
else {
    exit('Login falied.');
}    

?>
