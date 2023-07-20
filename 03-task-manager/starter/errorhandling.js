// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes
  
    // Handle specific types of errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
  
    // Handle other types of errors
    // ...
  
    // Generic error response
    return res.status(500).json({ error: 'Internal server error' });
  });
  