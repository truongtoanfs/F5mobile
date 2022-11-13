const express = require('express');
const app = express();
const port = 5000;

// connect to database
const db = require('./config/db');
db.connect();

// enable make requests CORS
const cors = require('cors');
app.use(cors());

// process post data from form:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// define routes
const route = require('./routes');
route(app);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));
  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));
