# MML Concepts - Full Stack Website

A modern full stack website for MML Concepts featuring a professional portfolio showcase and MongoDB-backed contact form system.

## 🚀 Features

- **React 18** - Latest React version with improved rendering and concurrent features
- **MongoDB Integration** - Contact form submissions saved to MongoDB database
- **Express Backend** - RESTful API for handling form submissions
- **TailwindCSS** - Utility-first CSS framework with custom design system
- **React Router** - Declarative routing for React applications
- **Full Stack** - Complete solution with frontend and backend in one package

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB installation)

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

3. Available scripts:
   ```bash
   npm run dev       # Start both frontend and backend in development mode
   npm start         # Start frontend only in development mode
   npm run server    # Start backend only
   npm run build     # Build the frontend for production
   npm run prod      # Run in production mode (after build)
   ```

4. Open your browser and navigate to http://localhost:3000

5. The backend API will be available at http://localhost:5000

## 💾 MongoDB Setup

For detailed MongoDB setup instructions, see [MONGODB_SETUP.md](MONGODB_SETUP.md).

Quick setup:
1. Create a MongoDB Atlas account
2. Create a cluster
3. Add a database user
4. Set up network access
5. Get your connection string
6. Add it to your `.env` file as `MONGODB_URI`

## 🚀 Deployment

This application is ready to be deployed to platforms like Heroku:

1. Create a new app on Heroku
2. Connect your GitHub repository
3. Add the MONGODB_URI environment variable in Heroku settings
4. Deploy the main branch

The application will automatically build the React frontend and serve it through the Express backend.

## 📁 Project Structure

```
/
├── public/              # Static assets and media files
│   ├── images/          # Image assets
│   └── index.html       # HTML template
├── server/              # Backend server code
│   ├── config/          # Database configuration
│   ├── models/          # Mongoose models
│   └── routes/          # API routes
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ContactForm.jsx  # Contact form component
│   │   ├── navbar.jsx       # Navigation component
│   │   └── footer.jsx       # Footer component
│   ├── pages/           # Page components
│   │   ├── index.jsx        # Main portfolio page
│   │   ├── ContactPage.jsx  # Standalone contact page
│   │   ├── home.jsx         # Hero section
│   │   ├── teamSection.jsx  # Team showcase
│   ├── services/        # API services
│   │   └── contactService.js # Contact form API service
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