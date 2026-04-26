# Milliform - Bespoke Kitchen Website

A modern, responsive React website for a luxury bespoke kitchen company, inspired by Italian design excellence.

## Features
- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern React Architecture** - Built with React 18 and React Router
- **Beautiful UI/UX** - Elegant design inspired by luxury Italian kitchen brands
- **Interactive Components** - Modal galleries, filterable collections, smooth animations
- **Contact Form** - Functional contact form for customer inquiries
- **SEO Friendly** - Semantic HTML and meta tags for better search engine visibility

## Pages

1. **Home** - Hero section, featured collections, company preview, and call-to-action
2. **Collections** - Filterable gallery of kitchen collections with detailed information
3. **About** - Company history, timeline, values, and team information
4. **Projects** - Portfolio of completed projects with modal detail views
5. **Contact** - Contact form and showroom information with embedded map

## Tech Stack

- **React 18** - Modern React with hooks
- **React Router 6** - Client-side routing
- **CSS3** - Custom responsive styling with CSS variables
- **Google Fonts** - Playfair Display and Inter fonts
- **Unsplash** - High-quality placeholder images

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/milliform.git
cd milliform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys the app to GitHub Pages

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Update package.json:**
   - Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username in the `homepage` field:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/milliform"
   ```

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. The GitHub Action will automatically build and deploy your site. Check the "Actions" tab to monitor the deployment.

### Option 2: Manual Deployment with gh-pages

1. **Update package.json:**
   - Update the `homepage` field with your GitHub username

2. **Deploy:**
   ```bash
   npm run deploy
   ```

This will build the app and push it to the `gh-pages` branch.

3. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch as the source
   - Click Save

Your site will be available at `https://YOUR_USERNAME.github.io/milliform`

## Customization

### Updating Content

1. **Company Information:**
   - Edit `src/components/Footer.js` for contact details
   - Update `src/pages/About.js` for company history and values

2. **Collections:**
   - Modify the collections array in `src/pages/Collections.js`
   - Add your own images by replacing the Unsplash URLs

3. **Projects:**
   - Update the projects array in `src/pages/Projects.js`
   - Add real project photos and descriptions

4. **Branding:**
   - Change colors in `src/index.css` CSS variables
   - Update the logo text in `src/components/Header.js`
   - Replace fonts in `public/index.html`

### Adding Your Own Images

Replace the Unsplash image URLs with your own images. You can:
- Store images in the `public` folder and reference them
- Use a CDN or image hosting service
- Use relative paths for local images

### Styling

The project uses CSS custom properties (variables) for easy theming. Main variables are in `src/index.css`:

```css
:root {
  --primary-color: #1a1a1a;
  --secondary-color: #8b7355;
  --accent-color: #c9a961;
  /* ... other variables */
}
```

## Project Structure

```
milliform/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Collections.js
│   │   ├── Collections.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── .gitignore
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The website is optimized for performance:
- Lazy loading images
- Efficient CSS with minimal dependencies
- Optimized build process with Create React App
- Responsive images for different screen sizes

## Contributing

Feel free to fork this project and customize it for your needs!

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Design inspired by [Arclinea](https://arclinea.com)
- Images from [Unsplash](https://unsplash.com)
- Icons from Unicode characters
- Fonts from [Google Fonts](https://fonts.google.com)

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using React
