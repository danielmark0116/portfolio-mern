const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();

const fs = require('fs');

router.get('/', (req, res) => {
  res.json({
    hello: 'world GET'
  });
});

router.post('/', upload.single('testPic'), (req, res) => {
  //   console.log(req.file.buffer.toString('base64'));

  const binaryData = req.file.buffer.toString('base64');

  //   fs.writeFile('/uploads', binaryData, function(err) {
  //     if (err) {
  //       return console.log(err);
  //     }

  //     console.log('The file was saved!');
  //   });

  res.json({
    response: req.body,
    binary: binaryData
  });
});

module.exports = router;
