<?php 
    $firstname = $_POST['Firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['Email'];
    $phonenumber = $_POST['Phone-number'];
    $message = $_POST['Message'];


    $email_from = 'info@steadfastschools.com';

    $email_subject = "New Form Submission";

    $email_body = "First Name: $firstname.\n".
                    "Last Name: $lastname.\n".
                    "Email address: $email.\n".
                    "Phone Number: $phonenumber.\n".
                    "User message: $message.\n";
                    
    $to = "ihemebiriegondu@gmail.com";

    $header = "From: $email_from \r\n";

    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");

?>