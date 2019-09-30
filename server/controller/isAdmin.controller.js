const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next) {
  const token = jwt.verify(
    req.headers.authorization.split(' ')[1],
    process.env.JWT_SECRET
  );

  if (token.user.admin) {
    next();
  } else {
    res.status(401).json({
      msg: 'Aunathorized. You are not admin'
    });
  }
};
