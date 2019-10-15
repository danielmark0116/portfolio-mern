require('dotenv').config();
const mongoose = require('mongoose');

exports.dbConnection = function() {
  mongoose.connect(
    `${
      process.env.MODE === 'production'
        ? process.env.mongoDG
        : 'mongodb://localhost:27017/portfolio_db'
    }`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  );

  let db = mongoose.connection;
  db.once('open', () => {
    console.log('Connected to the database');
  });
  db.on('error', err => console.log('Db connection error: ', err));
};
