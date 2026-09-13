# M Website Creation - Setup & Customization Guide

## 📋 Quick Start

Your website is ready to deploy! Follow these steps to get it live.

---

## 🚀 Step 1: Enable GitHub Pages (Deployment)

### Deploy Your Website Live:

1. Go to: https://github.com/abufathimaoman-barka/m-website-creation/settings
2. Click **Pages** in the left sidebar
3. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main`
   - **Folder**: Select `/ (root)`
4. Click **Save**
5. Wait 2-3 minutes for deployment

### Your Live Website URL:
```
https://abufathimaoman-barka.github.io/m-website-creation/
```

---

## 📧 Step 2: Setup Contact Form with Formspree

### Make Your Contact Form Work:

1. **Visit Formspree**: https://formspree.io
2. **Sign up** (free account)
3. **Create a new form**:
   - Give it a name (e.g., "M Website Creation Contact")
   - Choose your plan
4. **Get your Form ID** (looks like: `xyzabc123`)

### Update Your Website:

1. Go to your repository: https://github.com/abufathimaoman-barka/m-website-creation
2. Click **index.html** to edit it
3. Find this line (around line 115):
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your actual Formspree Form ID
5. Click **Commit changes**

### Test Your Contact Form:
- Visit your live website
- Scroll to "Get In Touch" section
- Fill out the form and submit
- Check your email for test submission

---

## 🎨 Step 3: Customize Your Website

### Change Colors:

1. Go to **style.css** in your repository
2. Find the `:root` section (lines 8-13):

```css
:root {
    --primary-color: #2c3e50;      /* Dark blue - Main color */
    --secondary-color: #3498db;    /* Light blue - Accent */
    --accent-color: #e74c3c;       /* Red - CTA buttons */
    --text-color: #333;            /* Dark text */
    --light-bg: #ecf0f1;           /* Light gray background */
    --white: #fff;                 /* White */
}
```

3. **Change the color codes** (hex colors):
   - `--primary-color`: Main navigation and footer color
   - `--secondary-color`: Accent color for highlights
   - `--accent-color`: Call-to-action button color
   - `--light-bg`: Background color for alternating sections

### Example Color Schemes:

**Modern Blue & Orange:**
```css
--primary-color: #1a3a52;
--secondary-color: #f39c12;
--accent-color: #e74c3c;
```

**Professional Green:**
```css
--primary-color: #27ae60;
--secondary-color: #16a085;
--accent-color: #2980b9;
```

**Dark Mode:**
```css
--primary-color: #2c3e50;
--secondary-color: #3498db;
--accent-color: #e67e22;
```

### Update Content:

1. Edit **index.html** to customize text:
   - **Line 21**: Change "M Website Creation" logo
   - **Line 28**: Update hero title
   - **Line 29**: Update hero subtitle
   - **Services Section**: Edit service descriptions (lines 40-55)
   - **Portfolio Section**: Update project titles and descriptions (lines 65-78)
   - **About Section**: Update company description (line 87)

2. **For each change**:
   - Click the file to edit
   - Make your changes
   - Click "Commit changes"

---

## 📸 Step 4: Add Project Images (Optional)

To display real project images instead of colored placeholders:

1. Create an `images` folder in your repository
2. Upload your project images
3. Update portfolio HTML to reference the images:

```html
<div class="portfolio-item">
    <img src="images/project1.jpg" alt="Restaurant Project" class="portfolio-image">
    <h3>Restaurant Sector</h3>
    <p>We created an attractive web page...</p>
</div>
```

4. Add CSS for images in `style.css`:

```css
.portfolio-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}
```

---

## ✅ Customization Checklist

- [ ] Deploy to GitHub Pages
- [ ] Setup Formspree contact form
- [ ] Replace contact form ID in index.html
- [ ] Customize colors in style.css
- [ ] Update company name and descriptions
- [ ] Add portfolio project images
- [ ] Test contact form
- [ ] Share your website link!

---

## 🔗 Useful Links

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Formspree**: https://formspree.io
- **Color Picker Tool**: https://htmlcolorcodes.com
- **Font Options**: https://fonts.google.com

---

## 📞 Support

If you encounter issues:

1. **GitHub Pages not showing**?
   - Wait a few minutes and refresh
   - Check Settings > Pages > Build status

2. **Contact form not working**?
   - Verify Formspree Form ID is correct
   - Check your email spam folder

3. **Colors not changing**?
   - Clear browser cache (Ctrl+Shift+Delete)
   - Refresh the page

---

**Your website is now ready to go live! Good luck! 🚀**
