const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// CORS & SEC
const cors = require('cors');
const helmet = require('helmet');

// DB
const db = require('./utils/dbConnection');

// SESSION & PASSPORT
const session = require('express-session');
const passport = require('passport');
const googleOAuthSettings = require('./utils/google_strategy.passport');
require('dotenv').config();

// APP SETTINGS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default_session_secret',
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

// DB CONNECT & INIT passport
db.dbConnection();
googleOAuthSettings.initGoogleOAuth();

// ROUTES
const projectRoutes = require('./routes/project.routes');

app.use('/api', projectRoutes);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login']
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

if (process.env.MODE === 'production') {
  app.use(express.static(path.join(__dirname, '../client/test/')));
  app.use('/', (req, res) => {
    res.render('index');
  });
} else {
  app.use('/', (req, res) => {
    res.send('no such endpoint');
  });
}

app.listen(port, () => console.log(`Server is running on prot ${port}`));
