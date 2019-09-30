const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controller/auth.controller');

const jwt = require('jsonwebtoken');

require('dotenv').config();

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  function(req, res) {
    authController.login(req.user, (err, newUserData, token) => {
      res.json({
        token: token,
        userData: newUserData,
        err: err,
        valid: jwt.verify(token, process.env.JWT_SECRET)
      });
    });
  }
);

router.get('/auth/google/failure', (req, res) => {
  res.send('sth went wrong with auth');
});

module.exports = router;
