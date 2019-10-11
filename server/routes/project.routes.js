const express = require('express');
const router = express.Router();
const passport = require('passport');
const isAdmin = require('../controller/isAdmin.controller');

const projectController = require('../controller/project.controller');

const multer = require('multer');
const upload = multer();

router.get('/', projectController.getProjects);

router.get('/:id', projectController.getOneProject);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  upload.single('pic'),
  projectController.postProject
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  upload.single('pic'),
  projectController.putProject
);

router.put(
  '/publish/:id',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  projectController.publishProject
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  projectController.deleteProject
);

module.exports = router;
