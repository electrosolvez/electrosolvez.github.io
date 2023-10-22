<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Replace with your email address.
    $to = "your-email@example.com";
    $subject = "Contact Form Submission";
    $messageBody = "Name: $name\nEmail: $email\nMessage: $message";

    // Send an email.
    mail($to, $subject, $messageBody);

    // Redirect to a thank you page.
    header("Location: thank_you.html");
    exit;
}
?>
