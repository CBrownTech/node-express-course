const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleware = (req, res, next) => {
  // Check if Authorization header is present
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'unauthorized' });
  }

  // Get the token part from the header
  const token = authHeader.split(' ')[1];

  try {
    // Verify the token and get the payload data
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { name: decodedToken.name };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'unauthorized' });
  }
};

module.exports = authMiddleware;
