# Deployment Guide - Plesk Server

This guide explains how to deploy your React application to a Plesk server using GitHub Actions.

## Prerequisites

1. A Plesk server with FTP access
2. A GitHub repository for this project
3. FTP credentials from your Plesk server

## Setup Instructions

### Step 1: Get Your Plesk FTP Credentials

1. Log in to your Plesk panel
2. Go to **Websites & Domains**
3. Click on **FTP Access** or **File Manager**
4. Note down:
   - FTP Server address (e.g., `ftp.yourdomain.com` or your server IP)
   - FTP Username
   - FTP Password
   - Target directory path (usually `/httpdocs` or `/public_html`)

### Step 2: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following secrets:

   | Secret Name | Description | Example |
   |------------|-------------|---------|
   | `FTP_SERVER` | Your Plesk FTP server address | `ftp.yourdomain.com` or `123.456.789.0` |
   | `FTP_USERNAME` | Your FTP username | `username@yourdomain.com` |
   | `FTP_PASSWORD` | Your FTP password | `your-ftp-password` |
   | `FTP_SERVER_DIR` | Target directory on server | `/httpdocs/` or `/public_html/` |

### Step 3: Push to GitHub

Once you've set up the secrets, the deployment will trigger automatically when you push to the `main` or `master` branch:

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

### Step 4: Monitor Deployment

1. Go to your GitHub repository
2. Click on the **Actions** tab
3. You'll see the deployment workflow running
4. Click on the workflow to see detailed logs

## Manual Deployment

You can also trigger the deployment manually:

1. Go to **Actions** tab in your GitHub repository
2. Click on **Deploy to Plesk Server** workflow
3. Click **Run workflow** button
4. Select the branch and click **Run workflow**

## Alternative: Using SFTP Instead of FTP

If your Plesk server uses SFTP (more secure), you can use a different workflow. Create an alternative workflow file:

`.github/workflows/deploy-to-plesk-sftp.yml`:

```yaml
name: Deploy to Plesk Server (SFTP)

on:
  push:
    branches:
      - main
      - master
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build React app
        run: npm run build
        env:
          CI: false

      - name: Deploy to Plesk via SFTP
        uses: wlixcc/SFTP-Deploy-Action@v1.2.4
        with:
          username: ${{ secrets.FTP_USERNAME }}
          server: ${{ secrets.FTP_SERVER }}
          password: ${{ secrets.FTP_PASSWORD }}
          local_path: './build/*'
          remote_path: ${{ secrets.FTP_SERVER_DIR }}
          sftp_only: true

      - name: Deployment Status
        run: echo "Deployment completed successfully!"
```

For SFTP, you'll need to add an SSH key secret:
- `SSH_PRIVATE_KEY` - Your SSH private key (more secure option)

## Troubleshooting

### Build Fails
- Check if all dependencies are listed in `package.json`
- Ensure Node.js version matches your local development version

### Deployment Fails
- Verify FTP credentials are correct
- Check if the target directory exists and has write permissions
- Ensure the FTP_SERVER_DIR ends with a `/` (e.g., `/httpdocs/`)

### Site Not Loading After Deployment
- Check if `.htaccess` file is needed for React Router
- Verify the build files are in the correct directory

## Adding .htaccess for React Router

If your app uses React Router, create a `.htaccess` file in the `public` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures all routes are handled by React Router.

## Environment Variables

If you need environment variables for your React app:

1. Create them in GitHub Secrets with prefix `REACT_APP_` (e.g., `REACT_APP_API_URL`)
2. Add them to the build step in the workflow:

```yaml
- name: Build React app
  run: npm run build
  env:
    CI: false
    REACT_APP_API_URL: ${{ secrets.REACT_APP_API_URL }}
```

## Security Best Practices

1. Never commit FTP credentials to the repository
2. Use SFTP instead of FTP when possible
3. Regularly rotate your FTP passwords
4. Use SSH keys instead of passwords for SFTP
5. Limit FTP access to specific directories only

## Support

If you encounter any issues:
1. Check the GitHub Actions logs for detailed error messages
2. Verify your Plesk FTP settings
3. Contact your hosting provider if you need help with FTP/SFTP configuration
