# SMTP Environment Configuration Guide

## Overview

Your contact form now uses **config.env** file to store SMTP credentials securely. This keeps sensitive information out of your code.

## Files Created

✅ **public/api/config.env** - SMTP configuration (not committed to Git)
✅ **public/api/config.env.example** - Template file (safe to commit)
✅ **public/api/contact.php** - Updated to use config.env

## Step 1: Get Gmail App Password

Since you're using Gmail SMTP, you need an "App Password":

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Enable **2-Step Verification** (if not already enabled)
4. Go back to Security
5. Click **App Passwords** (under "How you sign in to Google")
6. Select app: **Mail**
7. Select device: **Other** (Custom name)
8. Enter name: **Tech Support Contact Form**
9. Click **Generate**
10. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

## Step 2: Update config.env

Edit `public/api/config.env`:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=kavindutheekshana@gmail.com
SMTP_PASSWORD=your-16-char-app-password-here
SMTP_FROM_EMAIL=noreply@yourdomain.com
SMTP_FROM_NAME=Tech Support Contact Form
SMTP_TO_EMAIL=kavindutheekshana@gmail.com
```

Replace:
- `your-16-char-app-password-here` → Your Gmail App Password (from Step 1)
- `yourdomain.com` → Your actual domain

## Step 3: Deploy to Server

The `config.env` file needs to be manually uploaded to your server because it's in `.gitignore` (for security).

### Option A: Manual Upload via Plesk File Manager

1. Build your project locally: `npm run build`
2. Log in to Plesk
3. Go to **Files** → **File Manager**
4. Navigate to `/httpdocs/api/`
5. Upload `config.env` file

### Option B: Upload via FTP

1. Connect to your server via FTP
2. Navigate to `/httpdocs/api/`
3. Upload `config.env` file

### Option C: SSH Command

```bash
scp public/api/config.env username@yourserver:/path/to/httpdocs/api/
```

## Configuration Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server address | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port (587 for TLS) | `587` |
| `SMTP_USERNAME` | Your Gmail address | `kavindutheekshana@gmail.com` |
| `SMTP_PASSWORD` | Gmail App Password | `abcd efgh ijkl mnop` |
| `SMTP_FROM_EMAIL` | Email "from" address | `noreply@yourdomain.com` |
| `SMTP_FROM_NAME` | Sender name | `Tech Support Contact Form` |
| `SMTP_TO_EMAIL` | Where emails are sent | `kavindutheekshana@gmail.com` |

## Security Features

✅ **Credentials not in code** - SMTP password stored in separate file
✅ **Gitignore protection** - config.env not committed to repository
✅ **Server-side only** - Never exposed to frontend
✅ **Environment-based** - Easy to change per environment

## Testing

After deployment:

1. Go to your website's Contact page
2. Fill out the form
3. Submit
4. Check **kavindutheekshana@gmail.com** for the email
5. If no email arrives, check:
   - Gmail App Password is correct
   - config.env is uploaded to server
   - Check server error logs in Plesk

## Troubleshooting

### Issue: "SMTP not configured" error

**Solution:**
- Ensure `config.env` is uploaded to `/httpdocs/api/`
- Check file permissions (should be readable)
- Verify SMTP_USERNAME and SMTP_PASSWORD are set

### Issue: "SMTP authentication failed"

**Solution:**
- Verify Gmail App Password is correct (no spaces)
- Ensure 2-Step Verification is enabled
- Try generating a new App Password

### Issue: Emails not arriving

**Check:**
1. Spam folder
2. Gmail App Password is valid
3. SMTP_TO_EMAIL is correct
4. Check Plesk error logs

## Alternative SMTP Providers

If you want to use a different SMTP provider, update config.env:

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USERNAME=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USERNAME=postmaster@yourdomain.com
SMTP_PASSWORD=your-mailgun-password
```

### Amazon SES
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USERNAME=your-ses-username
SMTP_PASSWORD=your-ses-password
```

## Production Checklist

- [ ] Gmail 2-Step Verification enabled
- [ ] Gmail App Password generated
- [ ] config.env updated with App Password
- [ ] Domain updated in SMTP_FROM_EMAIL
- [ ] config.env uploaded to server
- [ ] File permissions set correctly
- [ ] Contact form tested
- [ ] Email received successfully

## Important Notes

⚠️ **Never commit config.env to Git** - It contains sensitive passwords
⚠️ **Keep App Password secret** - Don't share it
⚠️ **Regenerate if compromised** - Create new App Password if leaked

---

**Current Configuration:**
- SMTP Provider: **Gmail**
- Email sent to: **kavindutheekshana@gmail.com**
- Configuration file: **public/api/config.env**
- Deployment: **Manual upload required**

Your SMTP configuration is complete! Just add your Gmail App Password and deploy. 📧
