const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: false,
      default: ''
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', User);
