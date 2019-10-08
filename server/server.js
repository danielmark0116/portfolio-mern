const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// CORS & SEC
const cors = require('cors');
const helmet = require('helmet');

// DB
const db = require('./utils/dbConnection');

//  PASSPORT
const passport = require('passport');
const googleOAuthSettings = require('./utils/google_strategy.passport');
const jwtStrategySetting = require('./utils/jwt_strategy.controller');
require('dotenv').config();

// APP SETTINGS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());

// DB CONNECT & INIT passport
db.dbConnection();
googleOAuthSettings.initGoogleOAuth();
jwtStrategySetting.initJwtStrategy();

// ROUTES
const projectRoutes = require('./routes/project.routes');
const authRoutes = require('./routes/auth.routes');

app.use('/api', projectRoutes);
app.use('/api/auth', authRoutes);
app.get(
  '/secret',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      auth: true
    });
  }
);

const isAdmin = require('./controller/isAdmin.controller');

app.get(
  '/secret/admin',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  (req, res) => {
    res.json({
      auth: true
    });
  }
);

if (process.env.MODE === 'production') {
  app.use(express.static(path.join(__dirname, '../client/public/')));
  app.use('/', (req, res) => {
    res.render('index');
  });
} else {
  app.use('/', (req, res) => {
    res.send('no such endpoint / develpment mode');
  });
}

app.listen(port, () => console.log(`Server is running on prot ${port}`));
