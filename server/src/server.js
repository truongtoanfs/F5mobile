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

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));
