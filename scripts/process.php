<?php
//Check whether the form has been submitted
if (array_key_exists('check_submit', $_POST)) {
   //Converts the new line characters (\n) in the text area into HTML line breaks (the <br /> tag)
   $_POST['Comments'] = nl2br($_POST['Comments']);
   //Check whether a $_GET['Languages'] is set
   if ( isset($_POST['ServicesRequested']) ) {
     $_POST['ServicesRequested'] = implode(', ', $_POST['ServicesRequested']); //Converts an array into a single string
   }
   $to = "ally.rippley@gmail.com";
    $subject = "New Inquiry";

    $message = "
      <html>
        <head>
          <title>New Inquiry</title>
        </head>
        <body>
          <p>You have received a new inquiry from your website</p>
          <p>{$_POST['Name']} is requesting the following services</p>
          <p>{$_POST['ServicesRequested']}</p>
          <p>Budget provided is {$_POST['Budget']}</p>
          <p>Location provided is {$_POST['Country']}</p>
          <p>Additional Comments: {$_POST['Comments']}</p>
        </body>
      </html>
    ";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <webmaster@example.com>' . "\r\n";
//    $headers .= 'Cc: myboss@example.com' . "\r\n";

    mail($to,$subject,$message,$headers);
   //Let's now print out the received values in the browser
   echo "Your name: {$_POST['Name']}<br />";
   echo "Your budget: {$_POST['Budget']}<br /><br />";
   echo "Your comments:<br />{$_POST['Comments']}<br /><br />";
   echo "You are from: {$_POST['Country']}<br />";
   echo "Services request: {$_POST['ServicesRequested']}<br />";
   echo '<script>window.location.href = "/contactSuccess";</script>';
} else {
    echo "You can't see this page without submitting the form.";
}
?>
