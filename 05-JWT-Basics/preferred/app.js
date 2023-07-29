// Import required modules and middleware
const express = require('express');
const authMiddleware = require('./middleware/authMiddleware');
const authRoutes = require('./routes/auth');
const helloController = require('./controllers/helloController');
const dotenv = require('dotenv'); // Import the dotenv package
dotenv.config(); // Load environment variables from .env file


// Create the Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Authentication middleware
app.use(authMiddleware);

// Routes
app.use('/api/v1', authRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});