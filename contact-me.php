<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	
	// send to owner's email
	$to = "takeruadelbert@gmail.com";
	$subject = "Get In Touch";
	$headers = 'From: ' . $name . "\r\n" .
    'Reply-To: ' . $to . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	
	try {
		mail($to, $subject, $message, $headers);
		header('Location: index.html');
	} catch(Exception $ex) {
		var_dump($ex);
		die;
	}
?>