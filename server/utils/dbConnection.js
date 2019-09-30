const mongoose = require('mongoose');

exports.dbConnection = function() {
  mongoose.connect('mongodb://localhost:27017/portfolio_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  let db = mongoose.connection;
  db.once('open', () => {
    console.log('Connected to the database');
  });
  db.on('error', err => console.log('Db connection error: ', err));
};
