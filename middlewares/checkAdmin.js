// Middleware function to check if user has ADMIN role
const isAdmin = (req, res, next) => {
  console.log('Checking user role:', req.role);
  if (req.role === 'ADMIN') {
    next();
  } else {
    return res.status(403).json({
      error: "Access denied. You must have ADMIN privileges.",
    });
  }
};

module.exports = isAdmin;
