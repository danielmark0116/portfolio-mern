const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

// ROUTES
const projectRoutes = require('./routes/project.routes');

app.use('/api', projectRoutes);

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
