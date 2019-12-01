const express = require("express");
const router = express.Router();
const passport = require("passport");
const isAdmin = require("../controller/isAdmin.controller");

const projectController = require("../controller/project.controller");

const multer = require("multer");
const upload = multer();

// PREFIX URL
// /api/project

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  projectController.getProjects
);

router.get("/published", projectController.getPublishedProjects);

router.get("/:id", projectController.getOneProject);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  upload.single("pic"),
  projectController.postProject
);

router.put(
  "/:id/withPic",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  upload.single("pic"),
  projectController.putProjectWithPic
);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  upload.none(),
  projectController.putProject
);

router.patch(
  "/publish/:id",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  projectController.publishProject
);

router.patch(
  "/order/:id/:value",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  projectController.updateProjectsOrder
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  projectController.deleteProject
);

module.exports = router;
