const express = require('express');
const router = express.Router();
const passport = require('passport');
const isAdmin = require('../controller/isAdmin.controller');

const generalsController = require('../controller/generals.controller');

router.get('/', generalsController.getGenerals);

router.put(
  '/',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  generalsController.updateGeneral
);

module.exports = router;
