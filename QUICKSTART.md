# Quick Start Guide

## Setup & Run Locally (5 minutes)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   - Visit `http://localhost:3000`
   - The site should automatically open

## Deploy to GitHub Pages (10 minutes)

### Step 1: Update Configuration

Edit `package.json` and replace `YOUR_GITHUB_USERNAME`:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/milliform"
```

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Wait a few minutes for the deployment to complete

### Step 4: Visit Your Site

Your site will be live at:
```
https://YOUR_GITHUB_USERNAME.github.io/milliform
```

## Customization Tips

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary-color: #1a1a1a;    /* Main dark color */
  --accent-color: #c9a961;     /* Gold/accent color */
  --secondary-color: #8b7355;  /* Brown/secondary */
}
```

### Update Company Name
1. Edit `src/components/Header.js` - Change "MILLIFORM" logo text
2. Edit `public/index.html` - Update page title
3. Edit `src/components/Footer.js` - Update footer text

### Add Your Images
Replace Unsplash URLs in:
- `src/pages/Home.js`
- `src/pages/Collections.js`
- `src/pages/Projects.js`
- `src/pages/About.js`

### Update Contact Information
Edit `src/pages/Contact.js`:
- Address
- Phone number
- Email
- Opening hours
- Google Maps embed

## File Structure

```
milliform/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.js    # Navigation bar
│   │   └── Footer.js    # Footer
│   ├── pages/           # Page components
│   │   ├── Home.js      # Homepage
│   │   ├── Collections.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── App.js           # Main app & routing
│   └── index.js         # Entry point
└── package.json         # Dependencies
```

## Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm start
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### GitHub Pages not updating
1. Check Actions tab for deployment status
2. Wait 2-3 minutes after push
3. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
4. Clear browser cache

## Next Steps

1. ✅ Replace placeholder images with your own
2. ✅ Update all text content
3. ✅ Customize colors and fonts
4. ✅ Add real contact information
5. ✅ Test on mobile devices
6. ✅ Add your own favicon
7. ✅ Configure custom domain (optional)

## Need Help?

- Check the main README.md for detailed documentation
- Review the code comments in each component
- Open an issue on GitHub

Good luck with your website! 🚀
