<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Load environment variables function
function loadEnv($file) {
    if (!file_exists($file)) {
        return false;
    }

    $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue;
        }

        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);

        if (!array_key_exists($name, $_ENV)) {
            putenv(sprintf('%s=%s', $name, $value));
            $_ENV[$name] = $value;
        }
    }
    return true;
}

// Load SMTP configuration from config.env
loadEnv(__DIR__ . '/config.env');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($data['name']) || empty($data['email']) || empty($data['subject']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit();
}

// Sanitize input
$name = htmlspecialchars(strip_tags($data['name']));
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(strip_tags($data['subject']));
$phone = isset($data['phone']) ? htmlspecialchars(strip_tags($data['phone'])) : 'Not provided';
$message = htmlspecialchars(strip_tags($data['message']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Get SMTP settings from environment variables
$smtpHost = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
$smtpPort = (int)(getenv('SMTP_PORT') ?: 587);
$smtpUsername = getenv('SMTP_USERNAME');
$smtpPassword = getenv('SMTP_PASSWORD');
$fromEmail = getenv('SMTP_FROM_EMAIL') ?: 'noreply@yourdomain.com';
$fromName = getenv('SMTP_FROM_NAME') ?: 'Tech Support Contact Form';
$toEmail = getenv('SMTP_TO_EMAIL') ?: 'kavindutheekshana@gmail.com';

// Check if SMTP is configured
if (empty($smtpUsername) || empty($smtpPassword)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'SMTP not configured. Please contact administrator.']);
    exit();
}

// Email subject
$emailSubject = 'New Contact Form Submission: ' . $subject;

// Email body (HTML)
$emailBody = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }
        .content { background-color: white; padding: 30px; border-radius: 10px; }
        .header { color: #3C72FC; border-bottom: 2px solid #3C72FC; padding-bottom: 10px; margin-bottom: 20px; }
        .field { margin: 10px 0; }
        .label { font-weight: bold; }
        .message-box { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <h2 class="header">New Contact Form Submission</h2>

            <div class="field">
                <span class="label">From:</span> ' . $name . '
            </div>

            <div class="field">
                <span class="label">Email:</span> ' . $email . '
            </div>

            <div class="field">
                <span class="label">Phone:</span> ' . $phone . '
            </div>

            <div class="field">
                <span class="label">Subject:</span> ' . $subject . '
            </div>

            <div class="message-box">
                <p><strong>Message:</strong></p>
                <p>' . nl2br($message) . '</p>
            </div>

            <div class="footer">
                <p>This email was sent from the Tech Support Inc contact form.</p>
                <p>Reply directly to this email to respond to ' . $name . '.</p>
            </div>
        </div>
    </div>
</body>
</html>
';

// Prepare email message
$boundary = md5(uniqid(time()));

$headers = "From: $fromName <$fromEmail>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";

$body = "--$boundary\r\n";
$body .= "Content-Type: text/html; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= $emailBody . "\r\n";
$body .= "--$boundary--";

// Function to send SMTP email
function sendSMTP($host, $port, $username, $password, $from, $to, $subject, $headers, $body) {
    $smtp = fsockopen($host, $port, $errno, $errstr, 30);

    if (!$smtp) {
        throw new Exception("Could not connect to SMTP server: $errstr ($errno)");
    }

    $response = fgets($smtp, 515);

    // EHLO
    fputs($smtp, "EHLO " . $_SERVER['SERVER_NAME'] . "\r\n");
    $response = fgets($smtp, 515);

    // STARTTLS
    fputs($smtp, "STARTTLS\r\n");
    $response = fgets($smtp, 515);

    stream_socket_enable_crypto($smtp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);

    // EHLO again
    fputs($smtp, "EHLO " . $_SERVER['SERVER_NAME'] . "\r\n");
    $response = fgets($smtp, 515);

    // AUTH LOGIN
    fputs($smtp, "AUTH LOGIN\r\n");
    $response = fgets($smtp, 515);

    fputs($smtp, base64_encode($username) . "\r\n");
    $response = fgets($smtp, 515);

    fputs($smtp, base64_encode($password) . "\r\n");
    $response = fgets($smtp, 515);

    if (strpos($response, '235') === false) {
        throw new Exception("SMTP authentication failed");
    }

    // MAIL FROM
    fputs($smtp, "MAIL FROM: <$from>\r\n");
    $response = fgets($smtp, 515);

    // RCPT TO
    fputs($smtp, "RCPT TO: <$to>\r\n");
    $response = fgets($smtp, 515);

    // DATA
    fputs($smtp, "DATA\r\n");
    $response = fgets($smtp, 515);

    // Send message
    $emailData = "Subject: $subject\r\n";
    $emailData .= $headers . "\r\n";
    $emailData .= $body . "\r\n.\r\n";

    fputs($smtp, $emailData);
    $response = fgets($smtp, 515);

    // QUIT
    fputs($smtp, "QUIT\r\n");
    fclose($smtp);

    return true;
}

// Try to send email
try {
    sendSMTP($smtpHost, $smtpPort, $smtpUsername, $smtpPassword, $fromEmail, $toEmail, $emailSubject, $headers, $body);

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message! We will get back to you soon.'
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again or contact us directly at ' . $toEmail
    ]);
}
?>
