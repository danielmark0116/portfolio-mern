const mongoose = require('mongoose');

const Image = new mongoose.Schema({
  pic: {
    type: Binary
  }
});

module.exports = mongoose.model('Image', Image);
