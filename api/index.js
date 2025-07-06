// This file is used as an API entry point for Vercel
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../server/config/db');
const logger = require('../server/middleware/logger');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.production') });

// Initialize express
const app = express();

// Connect to database
connectDB();

// Middleware with increased header size limits
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
  origin: '*',
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
  credentials: true,
  maxAge: 600
}));

// Apply request logger middleware (silent)
app.use(logger);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  });
});

// Routes
app.use('/api/contacts', require('../server/routes/contacts'));

// Export the Express API
module.exports = app;
