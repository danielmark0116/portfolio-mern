const express = require('express');
const User = require('../model/user.model');

const jwt = require('jsonwebtoken');

require('dotenv').config();

// FROM REACT_GOOGLE
exports.loginUser = async (req, res) => {
  const googleId = req.body.googleId;
  const tokenValidMinutes = 60 * 3;

  try {
    const user = await User.findOne({ googleId });

    if (!user) {
      const newUser = new User(req.body);

      newUser
        .save()
        .then(user => {
          const token = jwt.sign({ user }, process.env.JWT_SECRET, {
            expiresIn: 60 * tokenValidMinutes
          });

          res.json({
            user,
            token
          });
        })
        .catch(e => {
          res.status(500).json({
            error: true,
            success: false,
            errorMsg: e.message
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
};
