const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// POST /api/v1/logon
const logon = (req, res) => {
  const { name, password } = req.body;

  // Check if the user exists and the password is correct
  // For this assignment, let's assume it's valid

  // Create a payload for the token
  const payload = {
    name: name,
  };

  // Create the token
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  // Return the token
  res.status(200).json({ token });
};

module.exports = { logon };
