const mongoose = require('mongoose');

const Project = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true,
    default: []
  },
  category: {
    type: String,
    required: true,
    default: 'web'
  },
  short_desc: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  repo_link: {
    type: String,
    required: true
  },
  pic: {
    type: String,
    required: true
  },
  picType: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Project', Project);