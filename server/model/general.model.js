const mongoose = require('mongoose');

const General = new mongoose.Schema(
  {
    nameId: {
      type: String,
      required: true
    },
    githubLink: {
      type: String,
      required: true
    },
    instagramLink: {
      type: String,
      required: true
    },
    linkedInLink: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    about: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('General', General);
