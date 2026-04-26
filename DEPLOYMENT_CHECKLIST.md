# Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment

### 1. Configuration
- [ ] Updated `homepage` in `package.json` with your GitHub username
- [ ] Changed repository name from "milliform" if needed
- [ ] Updated `basename` in `src/App.js` if using custom repo name

### 2. Content Updates
- [ ] Replaced "MILLIFORM" logo with your company name
- [ ] Updated company description in Footer
- [ ] Changed contact information (address, phone, email)
- [ ] Updated opening hours
- [ ] Replaced placeholder images with real photos
- [ ] Updated collections with your actual products
- [ ] Added real project portfolio items
- [ ] Updated About page content (history, values, team)

### 3. Branding
- [ ] Customized color scheme in `src/index.css`
- [ ] Changed fonts if desired
- [ ] Added company favicon (replace in `public/`)
- [ ] Updated meta description in `public/index.html`
- [ ] Updated manifest.json with your branding

### 4. Functionality
- [ ] Tested all navigation links
- [ ] Verified mobile menu works
- [ ] Tested contact form
- [ ] Checked all page transitions
- [ ] Verified images load correctly
- [ ] Tested filtering on Collections page
- [ ] Tested project modals
- [ ] Verified responsive design on multiple devices

### 5. SEO & Meta
- [ ] Updated page title in `public/index.html`
- [ ] Added meta description
- [ ] Added Open Graph tags for social sharing
- [ ] Updated robots.txt if needed
- [ ] Added sitemap.xml (optional)

### 6. Performance
- [ ] Optimized images (compressed and appropriate sizes)
- [ ] Removed console.log statements
- [ ] Removed unused imports
- [ ] Build runs without warnings (`npm run build`)

### 7. GitHub Setup
- [ ] Created GitHub repository
- [ ] Pushed code to repository
- [ ] Enabled GitHub Pages in Settings
- [ ] Selected "GitHub Actions" as source

## Deployment Steps

### Option 1: Automatic (GitHub Actions)
1. [ ] Commit all changes
   ```bash
   git add .
   git commit -m "Ready for deployment"
   ```

2. [ ] Push to GitHub
   ```bash
   git push origin main
   ```

3. [ ] Check Actions tab for deployment progress

4. [ ] Wait 2-3 minutes for deployment to complete

5. [ ] Visit your site at `https://USERNAME.github.io/REPO_NAME`

### Option 2: Manual (gh-pages)
1. [ ] Run deployment command
   ```bash
   npm run deploy
   ```

2. [ ] Go to Settings → Pages

3. [ ] Select `gh-pages` branch

4. [ ] Wait for deployment confirmation

## Post-Deployment

### Testing
- [ ] Site loads correctly at GitHub Pages URL
- [ ] All pages are accessible
- [ ] Navigation works properly
- [ ] Mobile responsive design works
- [ ] Images display correctly
- [ ] Contact form submits (check console)
- [ ] No console errors
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on different devices (desktop, tablet, mobile)

### Analytics (Optional)
- [ ] Add Google Analytics
- [ ] Set up Google Search Console
- [ ] Submit sitemap to search engines

### Custom Domain (Optional)
- [ ] Purchase domain
- [ ] Add CNAME file to public/
- [ ] Configure DNS settings
- [ ] Update GitHub Pages settings
- [ ] Enable HTTPS

### Monitoring
- [ ] Bookmark GitHub Actions page
- [ ] Set up uptime monitoring (optional)
- [ ] Monitor Google Search Console

## Maintenance

### Regular Updates
- [ ] Update dependencies monthly (`npm update`)
- [ ] Review and update content quarterly
- [ ] Check for broken links
- [ ] Refresh portfolio/projects section
- [ ] Update images if needed

### Security
- [ ] Run security audit (`npm audit`)
- [ ] Fix any vulnerabilities
- [ ] Keep dependencies updated
- [ ] Review and update privacy policy

## Common Issues & Solutions

### Site not updating after push
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Wait 2-3 minutes for GitHub Pages to rebuild
- Check Actions tab for deployment errors
- Verify you pushed to the correct branch

### 404 on page refresh
- This is normal for client-side routing
- GitHub Pages serves the app from index.html
- Navigating via the app works fine

### Images not loading
- Check image URLs are correct
- Ensure images are in public/ folder or using absolute URLs
- Verify image paths in build folder

### Styles not applying
- Hard refresh browser
- Check CSS file imports
- Verify build completed successfully
- Check browser console for errors

## Support Resources

- **React Documentation:** https://react.dev
- **React Router:** https://reactrouter.com
- **GitHub Pages:** https://pages.github.com
- **Create React App:** https://create-react-app.dev

---

**Remember:** Always test locally before deploying!

```bash
npm start      # Test locally
npm run build  # Build for production
npm run deploy # Deploy to GitHub Pages
```
