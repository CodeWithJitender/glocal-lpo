<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if(isset($_POST['contact_submit'])){

    // Get form data
    $first_name = $_POST['first_name'];
    $last_name  = $_POST['last_name'];
    $email      = $_POST['email'];
    $company    = $_POST['company'];
    $job_title  = $_POST['job_title'];
    $phone      = $_POST['phone'];
    $message    = $_POST['message'];

    $full_name = $first_name . " " . $last_name;

    $mail = new PHPMailer(true);

    try {

        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';   
        $mail->SMTPAuth   = true;
        $mail->Username   = 'jitender@digicots.com';
        $mail->Password   = 'tmbiihppypejlnhz';   // Gmail App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // ===== EMAIL SETTINGS =====
        $mail->setFrom('info@glocallpo.com', 'Glocal Landing Page Form');
        $mail->addAddress('rohit@headfield.com'); 
        $mail->addCC('sk@head-field.com');    
        $mail->addReplyTo($email, $full_name);

        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Enquiry';

        $mail->Body = "
            <h3>New Enquiry Received</h3>
            <b>Name:</b> $full_name <br>
            <b>Email:</b> $email <br>
            <b>Company:</b> $company <br>
            <b>Job Title:</b> $job_title <br>
            <b>Phone:</b> $phone <br>
            <b>Message:</b><br> $message
        ";

        $mail->send();

        header("Location: ../thankyou.html");
exit();

// echo "<h2>Message Sent Successfully ✅</h2>";

    } catch (Exception $e) {
        echo "Message could not be sent. Error: {$mail->ErrorInfo}";
    }

}else{
    echo "Invalid Request";
}
?>
