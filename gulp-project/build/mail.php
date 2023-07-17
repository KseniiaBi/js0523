<?php  
 
 $mailto = "@gmail.com";  //Website owner email address
 //getting customer data
 $name = $_POST['name']; //getting customer name
 $phone = $_POST['telephone']; //getting customer Phome number
 $subject = "New Message from Aestetics Shop"; //getting subject line from client
 
 //Email body Owner will receive
 $message = "Cleint Name: " . $name . "\n"
 . "Phone Number: " . $phone . "\n\n";
 
 
 //Email headers
 $headers = "From: " . $name; // Client email, Owner will receive
 
 //PHP mailer function
 
  $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
 
?>