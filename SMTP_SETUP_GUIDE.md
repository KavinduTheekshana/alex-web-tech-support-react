# SMTP Email Setup Guide - Contact Form

## Overview

Your contact form now uses **PHP mail()** function with SMTP to send emails to **kavindutheekshana@gmail.com**. This is a simpler, more reliable solution that works natively with Plesk.

## Files Created

✅ **public/api/contact.php** - PHP backend that handles email sending
✅ **src/pages/Contact.jsx** - Updated to use PHP backend

## How It Works

1. User fills out contact form
2. Form data is sent to `/api/contact.php` via POST request
3. PHP validates and sanitizes the data
4. Email is sent using PHP's `mail()` function
5. Response is sent back to React app
6. Success/error message is displayed to user

## Configuration

### Update Domain in contact.php

Open `public/api/contact.php` and update line 84:

```php
$headers .= "From: Tech Support Contact Form <noreply@yourdomain.com>" . "\r\n";
```

Replace `yourdomain.com` with your actual domain:

```php
$headers .= "From: Tech Support Contact Form <noreply@alextech.com>" . "\r\n";
```

### Email Recipient

The email is sent to: **kavindutheekshana@gmail.com** (line 46)

To change this, edit line 46 in `public/api/contact.php`:

```php
$to = 'kavindutheekshana@gmail.com';
```

## Plesk SMTP Configuration (Optional)

By default, PHP's `mail()` function uses the server's sendmail/SMTP configuration. Plesk usually has this configured automatically.

### If Emails Are Not Being Delivered:

#### Option 1: Check Plesk Mail Settings

1. Log in to Plesk
2. Go to **Tools & Settings** → **Mail Server Settings**
3. Ensure mail server is enabled
4. Check that your domain has mail DNS records (MX records)

#### Option 2: Use External SMTP (Gmail, SendGrid, etc.)

If Plesk's mail server isn't configured, you can use an external SMTP service. Install PHPMailer:

Create `public/api/contact-smtp.php`:

```php
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// ... (rest of validation code same as contact.php)

$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your-email@gmail.com';
    $mail->Password   = 'your-app-password';  // Use App Password, not regular password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('noreply@yourdomain.com', 'Tech Support Contact Form');
    $mail->addAddress('kavindutheekshana@gmail.com');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission: ' . $subject;
    $mail->Body    = $emailBody;

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
}
?>
```

## Testing

### Test Locally (Development)

The PHP backend won't work in local development because it needs a server with PHP.

For local testing, you can:
1. Keep the old simulated version for development
2. Or set up a local PHP server (XAMPP, MAMP, etc.)

### Test on Production (After Deployment)

1. Deploy to your Plesk server
2. Go to the Contact page
3. Fill out the form with test data
4. Submit
5. Check **kavindutheekshana@gmail.com** for the email

## Troubleshooting

### Issue: 404 Error - contact.php not found

**Solution:**
- Ensure the file is deployed to `httpdocs/api/contact.php`
- Check file permissions (should be 644)
- Verify the path is correct: `/api/contact.php`

### Issue: 500 Error - Server error

**Check:**
1. PHP error logs in Plesk
2. File permissions (contact.php should be readable)
3. PHP version (should be 7.4 or higher)

**View errors in Plesk:**
- Go to Websites & Domains
- Click on your domain
- Go to Logs
- Check error_log

### Issue: Email not arriving

**Check:**
1. Spam folder in Gmail
2. Plesk mail server is running
3. Domain has proper MX records
4. PHP mail() function is enabled on server

**Test if mail() works:**

Create `test-email.php` in `public/api/`:

```php
<?php
$to = 'kavindutheekshana@gmail.com';
$subject = 'Test Email';
$message = 'This is a test email from PHP mail()';
$headers = 'From: test@yourdomain.com';

if (mail($to, $subject, $message, $headers)) {
    echo 'Email sent successfully';
} else {
    echo 'Email failed to send';
}
?>
```

Access: `https://yourdomain.com/api/test-email.php`

### Issue: CORS Error

The PHP file includes CORS headers, but if you still get CORS errors:

1. Check `.htaccess` file
2. Add these lines to `.htaccess`:

```apache
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type"
</IfModule>
```

## Security Features

The PHP backend includes:

✅ **Input validation** - Checks all required fields
✅ **Email validation** - Validates email format
✅ **Sanitization** - Removes HTML tags and special characters
✅ **CORS protection** - Only allows POST and OPTIONS methods
✅ **XSS protection** - Uses `htmlspecialchars()` to prevent XSS attacks
✅ **Spam protection** - Basic validation (you can add honeypot or reCAPTCHA)

## Adding reCAPTCHA (Optional)

To prevent spam, you can add Google reCAPTCHA:

1. Get reCAPTCHA keys from https://www.google.com/recaptcha
2. Add reCAPTCHA widget to contact form
3. Verify reCAPTCHA token in `contact.php` before sending email

## Production Checklist

- [ ] Updated domain in contact.php (line 84)
- [ ] Verified email recipient is correct
- [ ] Deployed contact.php to server
- [ ] Tested form submission
- [ ] Email received successfully
- [ ] Checked spam folder
- [ ] Verified email formatting looks good
- [ ] Reply-to functionality works

## Advantages of SMTP over EmailJS

✅ **No external dependencies** - Works directly on your server
✅ **No API limits** - Unlimited emails (within server limits)
✅ **More reliable** - No third-party service downtime
✅ **Better deliverability** - Sent from your own domain
✅ **Free** - No subscription required
✅ **Privacy** - Data stays on your server

## Support

If you encounter issues:
1. Check Plesk error logs
2. Test with `test-email.php` script
3. Verify PHP mail() is enabled
4. Contact your hosting provider for SMTP configuration

---

**Current Configuration:**
- Email sent to: **kavindutheekshana@gmail.com**
- Backend: **PHP with mail() function**
- Location: **public/api/contact.php**
- Method: **POST request**

Your contact form is now ready to send emails via SMTP! 📧
