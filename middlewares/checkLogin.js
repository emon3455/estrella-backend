const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      throw new Error('Authorization header missing');
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      throw new Error('Token missing');
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email, userId, name, role } = decoded;
    if (!email || !userId || !name || !role) {
      throw new Error('Invalid token payload');
    }
    req.email = email;
    req.userId = userId;
    req.name = name;
    req.role = role;
    next();
  } catch (error) {
    res.status(401).json({
      error: "Unauthorized Access",
    });
  }
};

module.exports = checkLogin;
