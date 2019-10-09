const General = require('../model/general.model');

const data = require('../mocks/general.mock');

exports.populate = async () => {
  try {
    let noOfDocs = await General.countDocuments();

    if (noOfDocs === 0) {
      console.log('Inserting init data for General Model');
      const initGeneral = new General(data);
      let response = await initGeneral.save();
    }
  } catch (err) {
    console.log(err.message);
  }
};
