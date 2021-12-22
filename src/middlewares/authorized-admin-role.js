const ROLES = require('../config/roles');

const isAuthorized = (req, res, next) => {
  if (ROLES[0] !== req.user.role) {
    return res.status(403).json({ 
        success: false, 
        error: 'Unauthorized' 
    })
  }
  next();
}

module.exports = isAuthorized;