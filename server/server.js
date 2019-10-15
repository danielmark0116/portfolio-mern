require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

console.log(process.env);
console.log(`Running in ${process.env.MODE} mode`);

// CORS & SEC
const cors = require('cors');
const helmet = require('helmet');

// DB
const db = require('./utils/dbConnection');

// GENERAL COLLECTION POPULATE IF EMPTY
const generalPopulate = require('./utils/generalsPopulate');
generalPopulate.populate();

//  PASSPORT
const passport = require('passport');
// const googleOAuthSettings = require('./utils/google_strategy.passport');
const jwtStrategySetting = require('./utils/jwt_strategy.controller');

// APP SETTINGS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());

// DB CONNECT & INIT passport
db.dbConnection();
// googleOAuthSettings.initGoogleOAuth();
jwtStrategySetting.initJwtStrategy();

// ROUTES
const projectRoutes = require('./routes/project.routes');
const authRoutes = require('./routes/auth.routes');
const generalRoutes = require('./routes/general.routes');

app.use('/api/auth', authRoutes);
app.use('/api/general', generalRoutes);
app.use('/api/project', projectRoutes);

if (process.env.MODE === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build/')));
  app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/build/index.html'));
  });
} else {
  app.use('/', (req, res) => {
    res.send('no such endpoint / develpment mode');
  });
}

app.listen(port, () => console.log(`Server is running on prot ${port}`));
