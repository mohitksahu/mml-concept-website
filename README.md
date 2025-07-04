# MML Concepts - React Website

A modern React-based website for MML Concepts featuring a professional portfolio showcase and client-side contact form system.

## 🚀 Features

- **React 18** - Latest React version with improved rendering and concurrent features
- **Client-side Contact Form** - Contact form with localStorage persistence and JSON download
- **TailwindCSS** - Utility-first CSS framework with custom design system
- **React Router** - Declarative routing for React applications
- **Frontend-Only** - Pure React application with no backend dependencies

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn


## 🛠️ Installation

### Frontend Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the frontend:
   ```bash
   npm start
   ```

3. Open your browser and navigate to http://localhost:3000

## 📁 Project Structure

```
/
├── public/              # Static assets and media files
│   ├── images/          # Image assets
│   └── index.html       # HTML template
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ContactForm.jsx  # Client-side contact form
│   │   ├── navbar.jsx       # Navigation component
│   │   └── footer.jsx       # Footer component
│   ├── pages/           # Page components
│   │   ├── index.jsx        # Main portfolio page
│   │   ├── ContactPage.jsx  # Standalone contact page
│   │   ├── home.jsx         # Hero section
│   │   ├── teamSection.jsx  # Team showcase
│   │   └── projectShowcase.jsx # Project gallery
│   ├── styles/          # Styling and CSS
│   │   ├── index.css        # Main stylesheet
│   │   ├── tailwind.css     # Tailwind configuration
│   │   └── navbar.css       # Component-specific styles
│   ├── app.jsx          # Main application component
│   ├── index.js         # Application entry point
│   └── routes.jsx       # Application routing
├── .env                 # Frontend environment variables
├── package.json         # Frontend dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## 📝 Contact Form Features

- **LocalStorage Integration** - All submissions saved to browser storage
- **JSON Backups** - Automatic backup files created
- **Export Functionality** - Download all submissions
- **Form Validation** - Client-side validation
- **Status Tracking** - Submission status monitoring

## 🎨 Styling

This project uses Tailwind CSS with a custom design system:

- **Custom Color Palette** - Professional brand colors
- **Utility-first Approach** - Rapid development workflow
- **Responsive Design** - Mobile-first responsive utilities
- **Component-specific Styles** - Modular CSS architecture

## 📦 Deployment

### Frontend Build
```bash
npm run build
```

### Production Setup
1. Deploy the built files to your hosting provider
2. Configure environment variables for production
3. Configure any environment variables needed
4. Build and deploy frontend

## 🛠️ Development

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/routes.jsx`
3. Import and use in application

### Contact Form Operations
- Form submissions saved to localStorage
- JSON files automatically downloaded for each submission
- Export all submissions function available in browser console

## 🙏 Acknowledgments

- **MML Concepts Team** - Professional multimedia solutions
- **React** - Modern web development framework
- **Tailwind CSS** - Utility-first styling framework
- **LocalStorage** - Client-side data persistence

Built with ❤️ by the Concepts Tech Team