# MML Concepts Website

## Vercel Deployment Guide

### Prerequisites
- A [Vercel](https://vercel.com) account
- [Vercel CLI](https://vercel.com/cli) installed (optional, for local testing)
- [Git](https://git-scm.com/downloads) installed

### Steps to Deploy

1. **Push your code to GitHub**
   - Create a repository on GitHub
   - Push your code to the repository

2. **Import Project to Vercel**
   - Log in to your Vercel account
   - Click "New Project"
   - Import the GitHub repository
   - Configure your project settings:
     - Framework Preset: Other
     - Build Command: `CI=false && npm run vercel-build`
     - Output Directory: `build`
     - Install Command: `npm install`

3. **Environment Variables**
   - Add the following environment variables:
     ```
     NODE_ENV=production
     MONGODB_URI=mongodb+srv://prajwalpb123:VjiJp1bY0HHc6hcj@mmlconcepts0.n6ub92r.mongodb.net/
     PORT=3000
     ```
   - Make sure the MongoDB connection string is correct
   - Ensure `NODE_ENV` is set to `production`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application

### Alternative: Deploy via Vercel CLI

```bash
# Install Vercel CLI if you haven't already
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy from your project directory
vercel
```

### Post-Deployment

- Set up your MongoDB Atlas database for production use
- Update the CORS settings if needed
- Test all API endpoints and functionality

### Monitoring and Logs

- Use the Vercel dashboard to monitor your application
- Check logs for any errors or issues
- Set up alerts for critical events

### Troubleshooting

- If you encounter any issues, check the Vercel logs
- Ensure your MongoDB connection string is correct
- Verify that your environment variables are set correctly
- If you see build errors related to warnings, make sure CI=false is set in your build command
- Check for any ESLint or TypeScript errors that might be failing the build
- Make sure your MongoDB Atlas IP whitelist allows connections from Vercel's servers (0.0.0.0/0)
- Verify the API endpoints are correctly routed in vercel.json
