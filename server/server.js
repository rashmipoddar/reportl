require('dotenv').config({
  silent: true,
});

const app = require('express')();
const db = require('./database/db');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.listen(port, () => console.log(`Server listening on *:${port}`));
