# EmailJS Setup Guide - Contact Form Email Integration

## Overview

Your contact form is now configured to send emails to **kavindutheekshana@gmail.com** using EmailJS. Follow the steps below to complete the setup.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (it's free!)
3. Create an account using your email

## Step 2: Add Email Service

1. After logging in, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - Select **Gmail**
   - Click **Connect Account**
   - Sign in with **kavindutheekshana@gmail.com**
   - Allow EmailJS to access your Gmail
4. Give your service a name (e.g., "Tech Support Contact Form")
5. Click **Create Service**
6. **Copy your Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the sidebar
2. Click **Create New Template**
3. Use this template configuration:

### Template Settings:
- **Template Name:** Contact Form Submission

### Email Template Content:

**Subject:**
```
New Contact Form Submission: {{subject}}
```

**Content:**
```html
<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
    <h2 style="color: #3C72FC; border-bottom: 2px solid #3C72FC; padding-bottom: 10px;">
      New Contact Form Submission
    </h2>

    <div style="margin: 20px 0;">
      <p style="margin: 10px 0;"><strong>From:</strong> {{from_name}}</p>
      <p style="margin: 10px 0;"><strong>Email:</strong> {{from_email}}</p>
      <p style="margin: 10px 0;"><strong>Phone:</strong> {{phone}}</p>
      <p style="margin: 10px 0;"><strong>Subject:</strong> {{subject}}</p>
    </div>

    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <p style="margin: 0;"><strong>Message:</strong></p>
      <p style="margin: 10px 0; white-space: pre-wrap;">{{message}}</p>
    </div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
      <p>This email was sent from the Tech Support Inc contact form.</p>
      <p>Reply directly to this email to respond to {{from_name}}.</p>
    </div>
  </div>
</div>
```

**To Email:**
```
kavindutheekshana@gmail.com
```

**From Name:**
```
{{from_name}}
```

**From Email:**
```
{{from_email}}
```

**Reply To:**
```
{{from_email}}
```

4. Click **Save**
5. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** in the sidebar
2. Find **API Keys** section
3. **Copy your Public Key** (starts with something like `user_...`)

## Step 5: Update Contact.jsx

Now update the EmailJS configuration in your code:

Open: `src/pages/Contact.jsx`

Replace these lines (around line 71-73):

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS Public Key
```

With your actual values:

```javascript
const serviceId = 'service_xxxxxxx'; // Your Service ID from Step 2
const templateId = 'template_xxxxxxx'; // Your Template ID from Step 3
const publicKey = 'your_public_key_here'; // Your Public Key from Step 4
```

## Step 6: Test the Contact Form

1. Save the file
2. The development server should reload automatically
3. Go to the Contact page
4. Fill out the form with test data
5. Submit
6. Check **kavindutheekshana@gmail.com** for the email

## Troubleshooting

### Issue: Emails not arriving

**Check:**
1. Verify Service ID, Template ID, and Public Key are correct
2. Check spam folder
3. Verify Gmail account is connected in EmailJS
4. Check EmailJS dashboard for error logs

### Issue: Form shows error message

**Check browser console for errors:**
1. Open Developer Tools (F12)
2. Go to Console tab
3. Look for EmailJS errors
4. Common issues:
   - Invalid Service ID/Template ID/Public Key
   - Network connectivity issues
   - EmailJS service not connected

### Issue: Email arrives but formatting is wrong

**Fix:**
1. Go back to EmailJS Template editor
2. Verify all template variables: `{{from_name}}`, `{{from_email}}`, etc.
3. Make sure they match the `templateParams` in Contact.jsx

## EmailJS Free Plan Limits

- **200 emails per month** (free)
- If you need more, upgrade to paid plan

## Security Note

The Public Key is safe to expose in client-side code. It's designed to be public. However:
- **Never** expose your Private Key
- Only the Public Key is used in the Contact.jsx file

## Alternative: Environment Variables (Optional)

For better security, you can store these values in environment variables:

1. Create `.env` file in project root:
```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Update Contact.jsx to use env variables:
```javascript
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
```

3. Add `.env` to `.gitignore` (already done in most React projects)

4. Add these as GitHub Secrets for deployment:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`

5. Update GitHub Actions workflow to include env variables during build

## Testing Checklist

- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created with correct content
- [ ] Service ID, Template ID, and Public Key copied
- [ ] Contact.jsx updated with correct IDs
- [ ] Test form submission successful
- [ ] Email received at kavindutheekshana@gmail.com
- [ ] Email content looks correct
- [ ] Reply-to works correctly

## Support

If you encounter issues:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. View EmailJS dashboard logs
3. Check browser console for errors
4. Verify all credentials are correct

---

**Current Configuration:**
- Emails will be sent to: **kavindutheekshana@gmail.com**
- EmailJS library installed: ✅
- Contact form updated: ✅
- Awaiting EmailJS account setup: ⏳

Once you complete the setup, every contact form submission will automatically send an email to your inbox! 📧
