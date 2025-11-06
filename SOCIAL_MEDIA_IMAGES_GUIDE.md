# Social Media Images Guide

## Required Images for Social Media Cards

You need to create two images for optimal social media sharing:

### 1. Open Graph Image (Facebook, LinkedIn, etc.)
**File:** `public/assets/images/og-image.jpg`
- **Dimensions:** 1200 x 630 pixels
- **Aspect Ratio:** 1.91:1
- **Format:** JPG or PNG
- **Max File Size:** < 1MB (recommended)
- **Used by:** Facebook, LinkedIn, WhatsApp, Slack, etc.

### 2. Twitter Card Image
**File:** `public/assets/images/twitter-card.jpg`
- **Dimensions:** 1200 x 628 pixels (or use same as OG image)
- **Aspect Ratio:** 1.91:1 (summary_large_image)
- **Format:** JPG or PNG
- **Max File Size:** < 5MB
- **Used by:** Twitter/X

## Design Recommendations

### Content to Include:
1. **Company Logo/Branding**
2. **Tagline:** "Your Trusted IT Consultancy"
3. **Key Services:** IT Support, Cloud Solutions, Cybersecurity
4. **Visual Elements:** Tech-related graphics, icons
5. **Color Scheme:** Match your brand colors
6. **Website URL** (optional but recommended)

### Design Tips:
- Use high contrast for readability
- Keep important content in the center (safe zone)
- Avoid placing text near edges (may be cropped)
- Use your brand colors consistently
- Make text large and readable
- Test on both light and dark backgrounds

## Quick Creation Options

### Option 1: Canva (Free)
1. Go to [Canva.com](https://www.canva.com)
2. Search for "Facebook Post" or "Twitter Post" templates
3. Customize with your branding
4. Download as JPG
5. Save as `og-image.jpg` and `twitter-card.jpg`

### Option 2: Figma (Free)
1. Create new frame: 1200 x 630 px
2. Design your card
3. Export as JPG
4. Save to `public/assets/images/`

### Option 3: Adobe Express (Free)
1. Use social media templates
2. Customize with your content
3. Download and save

### Option 4: Use Existing Logo/Hero Image
If you have a nice hero image or branded graphic:
1. Resize to 1200 x 630 pixels
2. Add text overlay with company name and tagline
3. Export as JPG

## Testing Your Images

### 1. Facebook Sharing Debugger
- URL: https://developers.facebook.com/tools/debug/
- Enter your website URL
- Click "Scrape Again" to refresh cache
- Preview how it looks on Facebook

### 2. Twitter Card Validator
- URL: https://cards-dev.twitter.com/validator
- Enter your website URL
- Preview how it looks on Twitter

### 3. LinkedIn Post Inspector
- URL: https://www.linkedin.com/post-inspector/
- Enter your website URL
- Check how it appears on LinkedIn

## Installation

Once you have created your images:

1. Save them to the correct location:
   ```
   public/assets/images/og-image.jpg
   public/assets/images/twitter-card.jpg
   ```

2. The images are already referenced in `public/index.html`

3. Deploy to your server

4. Test using the validators above

## Image Checklist

- [ ] Created og-image.jpg (1200 x 630 px)
- [ ] Created twitter-card.jpg (1200 x 628 px)
- [ ] Images include branding/logo
- [ ] Text is readable and clear
- [ ] File sizes are optimized (< 1MB)
- [ ] Saved to `public/assets/images/`
- [ ] Tested with Facebook Debugger
- [ ] Tested with Twitter Card Validator
- [ ] Updated domain URLs in index.html

## Alternative: Use a Single Image

You can use the same image for both Open Graph and Twitter:

1. Create one image at 1200 x 630 pixels
2. Save it as both `og-image.jpg` and `twitter-card.jpg`
3. Or update `index.html` to use the same image path for both

## Example Image Content

```
+------------------------------------------+
|                                          |
|    [LOGO]    Tech Support Inc            |
|                                          |
|    Your Trusted IT Consultancy           |
|                                          |
|    ✓ IT Support                          |
|    ✓ Cloud Solutions                     |
|    ✓ Cybersecurity                       |
|                                          |
|    www.yourdomain.com                    |
|                                          |
+------------------------------------------+
```

## Need Help?

If you need professional social media images designed:
- Hire a designer on Fiverr, Upwork, or 99designs
- Use a professional design tool like Adobe Photoshop
- Ask your marketing team to create them

## After Creating Images

Remember to also update in `public/index.html`:
- Replace `https://yourdomain.com` with your actual domain
- Update social media URLs in the Schema.org structured data (lines 71-75)
- Add your actual Twitter handle if you have one

Your images will now appear when someone shares your website on social media! 🎉
