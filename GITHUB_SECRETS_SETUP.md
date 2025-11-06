# GitHub Secrets Setup Guide

## Current Issue
The deployment is failing because `FTP_HOST` is not set or is empty.

Error: `ssh: Could not resolve hostname : Name does not resolve`

## Required GitHub Secrets

Go to your GitHub repository and add these 3 secrets:

**Settings → Secrets and variables → Actions → New repository secret**

### 1. FTP_HOST
- **Name:** `FTP_HOST`
- **Value:** Your Plesk server address
- **Examples:**
  - `example.com`
  - `subdomain.example.com`
  - `123.456.789.0` (IP address)
  - `server.hosting-provider.com`

### 2. FTP_USERNAME
- **Name:** `FTP_USERNAME`
- **Value:** Your SSH/SFTP username from Plesk
- **Examples:**
  - `username`
  - `username@domain.com`
  - `user123`

### 3. FTP_PASSWORD
- **Name:** `FTP_PASSWORD`
- **Value:** Your SSH/SFTP password from Plesk
- **Note:** This is your actual password (keep it secret!)

## How to Find Your Plesk Credentials

### Option 1: From Plesk Panel
1. Log in to your Plesk control panel
2. Go to **Websites & Domains**
3. Click **FTP Access** or **SSH Access**
4. You'll see:
   - **Server:** This is your `FTP_HOST`
   - **Username:** This is your `FTP_USERNAME`
   - **Password:** Reset if needed for `FTP_PASSWORD`

### Option 2: From Hosting Provider
1. Check your hosting provider's welcome email
2. Look for SSH/SFTP credentials
3. The host might be listed as:
   - Server address
   - SSH hostname
   - SFTP server

## Verification Checklist

Before running the workflow again, verify:

- [ ] `FTP_HOST` is set (not empty)
- [ ] `FTP_HOST` has NO `ssh://` or `sftp://` prefix (just the hostname/IP)
- [ ] `FTP_HOST` has NO port number (port is handled by the workflow)
- [ ] `FTP_USERNAME` is correct
- [ ] `FTP_PASSWORD` is correct
- [ ] All 3 secrets are saved in GitHub

## Common Mistakes

❌ **Wrong:**
- `FTP_HOST`: `sftp://example.com:22`
- `FTP_HOST`: `example.com:22`
- `FTP_HOST`: Empty/blank

✅ **Correct:**
- `FTP_HOST`: `example.com`
- `FTP_HOST`: `123.456.789.0`

## Testing Your Credentials Locally

You can test if your credentials work by running this command on your local machine:

```bash
sftp -P 22 YOUR_USERNAME@YOUR_HOST
```

If it connects and asks for a password, your credentials are correct!

## After Setting Secrets

1. Go to **Actions** tab in GitHub
2. Click on the failed workflow
3. Click **Re-run all jobs**
4. Monitor the deployment

## Still Having Issues?

Check if:
1. Your Plesk server allows SSH/SFTP connections (port 22)
2. Your hosting provider hasn't blocked GitHub's IP addresses
3. The `/httpdocs` directory exists and is writable
4. Your username has permissions to access `/httpdocs`

## Need Help?

Contact your hosting provider and ask:
- "What are my SSH/SFTP credentials for Plesk?"
- "What is the full path to my web root directory?"
- "Is SSH/SFTP access enabled for my account?"
