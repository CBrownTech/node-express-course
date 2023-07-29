const hello = (req, res) => {
    // Get the user's name from req.user.name (set by authMiddleware)
    const userName = req.user.name;
  
    // Return the message with the user's name
    res.status(200).json({ message: `Hello, ${userName}!` });
  };
  
  module.exports = { hello };
  