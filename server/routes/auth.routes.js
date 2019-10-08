const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controller/auth.controller');
const User = require('../model/user.model');

const jwt = require('jsonwebtoken');

require('dotenv').config();

// router.get(
//   '/auth/google',
//   passport.authenticate('google', {
//     scope: ['profile', 'email']
//   })
// );

// router.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
//   function(req, res) {
//     authController.login(req.user, (err, newUserData, token) => {
//       // change res to redirect to route with token param
//       // if development -> localhost with front end
//       // if production -> endpoint on the same localhost
//       res.json({
//         token: token,
//         userData: newUserData,
//         err: err,
//         valid: jwt.verify(token, process.env.JWT_SECRET)
//       });
//     });
//   }
// );

// router.get('/auth/google/failure', (req, res) => {
//   res.send('sth went wrong with auth');
// });

// FROM REACT_GOOGLE
router.post('/login/google', async (req, res) => {
  const googleId = req.body.googleId;
  const tokenValidMinutes = 60;

  try {
    const user = await User.findOne({ googleId });

    if (!user) {
      const newUser = new User(req.body);

      newUser.save().then(user => {
        const token = jwt.sign({ user }, process.env.JWT_SECRET, {
          expiresIn: 60 * tokenValidMinutes
        });

        res.json({
          user: newsUser,
          token
        });
      });
    } else {
      const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: 60 * tokenValidMinutes
      });

      res.json({
        user: user,
        token
      });
    }
  } catch (err) {
    res.status(500).json({
      error: true,
      success: false,
      errorMsg: err.message
    });
  }
});

module.exports = router;
