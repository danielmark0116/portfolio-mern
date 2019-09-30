const User = require('../model/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async function(userData, cb) {
  const googleId = userData.id;
  const name = userData.displayName;
  const email = userData.emails[0].value;
  const photo = userData.photos[0].value;

  try {
    const user = await User.findOne({ googleId });

    if (!user) {
      const newUser = new User({
        googleId,
        email,
        name,
        photo
      });

      newUser.save().then(user => {
        const token = jwt.sign({ user }, process.env.JWT_SECRET, {
          expiresIn: 60 * 60
        });

        cb(null, user, token);
      });
    } else {
      const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60
      });

      cb(null, user, token);
    }
  } catch (err) {
    console.log(err);
  }
};
