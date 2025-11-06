# SEO Setup Guide - Google Search Console

## Files Created

✅ **sitemap.xml** - Created in `/public/sitemap.xml`
✅ **robots.txt** - Updated in `/public/robots.txt`

## Important: Update Your Domain

**Before deploying**, replace `https://yourdomain.com` with your actual domain in these files:

1. **public/sitemap.xml** - Replace all instances of `https://yourdomain.com`
2. **public/robots.txt** - Replace `https://yourdomain.com/sitemap.xml`

Example:
```
https://yourdomain.com → https://alexwebtech.com
```

## Sitemap Details

Your sitemap includes all 11 pages:
- `/` (Home) - Priority: 1.0
- `/about` - Priority: 0.8
- `/services` - Priority: 0.9
- `/outsourced-it-support` - Priority: 0.9
- `/pricing` - Priority: 0.9
- `/microsoft-365` - Priority: 0.8
- `/cost-calculator` - Priority: 0.7
- `/our-approach` - Priority: 0.7
- `/areas-we-cover` - Priority: 0.8
- `/solutions` - Priority: 0.8
- `/contact` - Priority: 0.8

## Submit to Google Search Console

### Step 1: Verify Your Domain

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Choose **Domain** or **URL prefix**
4. Verify ownership using one of these methods:
   - HTML file upload
   - HTML tag (add to public/index.html)
   - Google Analytics
   - Google Tag Manager
   - DNS record

### Step 2: Submit Your Sitemap

1. After verification, go to **Sitemaps** in the left menu
2. Enter your sitemap URL: `https://yourdomain.com/sitemap.xml`
3. Click **Submit**

### Step 3: Test Your Sitemap

Before submitting, test if it's accessible:
```
https://yourdomain.com/sitemap.xml
https://yourdomain.com/robots.txt
```

Both should load successfully in your browser.

## Additional SEO Improvements

### 1. Add Meta Tags to index.html

The `public/index.html` already has basic meta tags. Consider adding:

```html
<!-- Open Graph for social media -->
<meta property="og:title" content="Tech Support Inc - Your Trusted IT Consultancy">
<meta property="og:description" content="Reliable IT support, cloud solutions, and cybersecurity services for UK small businesses.">
<meta property="og:image" content="https://yourdomain.com/assets/images/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Tech Support Inc - Your Trusted IT Consultancy">
<meta name="twitter:description" content="Reliable IT support, cloud solutions, and cybersecurity services for UK small businesses.">
<meta name="twitter:image" content="https://yourdomain.com/assets/images/twitter-image.jpg">
```

### 2. Google Analytics (Optional)

Add Google Analytics to track visitors:

1. Create a Google Analytics account
2. Get your tracking ID (e.g., G-XXXXXXXXXX)
3. Add to `public/index.html` in the `<head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Schema Markup (Structured Data)

Add schema markup for better search results. Create a script in `public/index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tech Support Inc",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/assets/images/logo.svg",
  "description": "Reliable IT support, cloud solutions, and cybersecurity services for UK small businesses.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+44-XXX-XXX-XXXX"
  }
}
</script>
```

## Monitoring & Maintenance

### Check These Regularly:

1. **Google Search Console**
   - Coverage issues
   - Mobile usability
   - Core Web Vitals
   - Security issues

2. **Update Sitemap**
   - Update `lastmod` dates when pages change
   - Re-submit to Search Console after updates

3. **Check robots.txt**
   - Ensure it's not blocking important pages
   - Test at: https://yourdomain.com/robots.txt

## SEO Checklist

- [ ] Replace `yourdomain.com` with actual domain in sitemap.xml
- [ ] Replace `yourdomain.com` with actual domain in robots.txt
- [ ] Deploy updated files to server
- [ ] Verify sitemap.xml is accessible
- [ ] Verify robots.txt is accessible
- [ ] Add property to Google Search Console
- [ ] Verify domain ownership
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Add schema markup (optional)
- [ ] Check mobile-friendliness
- [ ] Test page speed

## Useful Tools

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

## Next Steps

1. Update domain URLs in sitemap.xml and robots.txt
2. Commit and push changes
3. Wait for GitHub Actions to deploy
4. Verify files are accessible on your live site
5. Submit to Google Search Console
6. Monitor indexing progress (can take 1-2 weeks)

Good luck with your SEO! 🚀
