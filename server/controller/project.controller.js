const Project = require('../model/project.model');

exports.getProjects = async (req, res) => {
  try {
    let response = await Project.find().sort({ order: 'descending' });

    res.json({
      response
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      errorMsg: err.message
    });
  }
};

exports.getPublishedProjects = async (req, res) => {
  try {
    let response = await Project.find({ published: true }).sort({
      order: 'descending'
    });

    res.json({
      response
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      succes: false,
      errorMsg: err.message
    });
  }
};

exports.getOneProject = async (req, res) => {
  try {
    let response = await Project.find({ _id: req.params.id });

    res.json({
      response: response[0]
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      errorMsg: err.message
    });
  }
};

exports.postProject = async (req, res) => {
  try {
    let newProject = new Project(req.body);

    const fileSizeInMb = req.file.buffer.byteLength * 0.000001;
    const fileType = req.file.mimetype;

    if (fileSizeInMb > 10 || !['image/jpeg', 'image/png'].includes(fileType)) {
      res.status(500).json({
        success: false,
        error: true,
        errorMsg: 'File too large or invalid filetype'
      });
    } else {
      newProject.pic = req.file.buffer.toString('base64');
      newProject.tags = req.body.tags.split(',');
      newProject.technologies = req.body.technologies.split(',');
      newProject.picType = fileType;

      await newProject.save();

      res.json({
        response: newProject
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      errorMsg: err.message
    });
  }
};

exports.putProjectWithPic = async (req, res) => {
  try {
    const projectId = req.params.id;

    const fileSizeInMb = req.file.buffer.byteLength * 0.000001;
    const fileType = req.file.mimetype;

    if (fileSizeInMb > 10 || !['image/jpeg', 'image/png'].includes(fileType)) {
      res.status(500).json({
        success: false,
        error: true,
        errorMsg: 'File too large or invalid filetype'
      });
    } else {
      let editedProject = await Project.findOneAndUpdate(
        { _id: projectId },
        {
          ...req.body,
          pic: req.file.buffer.toString('base64'),
          tags: req.body.tags.split(','),
          technologies: req.body.technologies.split(','),
          picType: fileType
        },
        { new: true }
      );

      res.json({
        response: editedProject
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      errorMsg: err.message
    });
  }
};

exports.putProject = async (req, res) => {
  try {
    const projectId = req.params.id;

    let editedProject = await Project.findOneAndUpdate(
      { _id: projectId },
      {
        ...req.body,
        tags: req.body.tags.split(','),
        technologies: req.body.technologies.split(',')
      },
      { new: true }
    );

    res.json({
      response: editedProject
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      errorMsg: err.message
    });
  }
};

exports.publishProject = async (req, res) => {
  try {
    const projectId = req.params.id;

    let editedProject = await Project.findOne({ _id: projectId });

    editedProject.published = !editedProject.published;

    let response = await editedProject.save();

    res.json({
      response
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      errorMsg: err.message
    });
  }
};

exports.updateProjectsOrder = async (req, res) => {
  try {
    const projectId = req.params.id;
    const value = parseInt(req.params.value);

    let editedProject = await Project.findOne({ _id: projectId });

    editedProject.order = editedProject.order + value;

    let response = await editedProject.save();

    res.json({
      response
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      errorMsg: err.message
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;

    await Project.findOneAndRemove({ _id: projectId });

    res.json({
      response: 'Project removed from database'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      errorMsg: err.message
    });
  }
};
