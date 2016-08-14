<?php
$first_name = $_POST['name1'];
$last_name = $_POST['name2'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent=" From: $name \n subject: $subject \n Message: $message";
$recipient = "admin@dev-items.com";
$subject = "Add Your Subject Here";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("location: thank-you.html")
?>
