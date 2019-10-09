const General = require('../model/general.model');

exports.getGenerals = async (req, res) => {
  try {
    let generals = await General.findOne({ nameId: 'generals' });

    res.json({
      generals
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      success: false,
      errorMsg: err.message
    });
  }
};

exports.updateGeneral = async (req, res) => {
  try {
    await General.findOneAndUpdate({ nameId: 'generals' }, req.body);

    let response = await General.findOne({ nameId: 'generals' });

    res.json({
      response
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      success: false,
      errorMsg: err.message
    });
  }
};
