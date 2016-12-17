require('dotenv').config({
  silent: true,
});

const app = require('express')();
const db = require('./database/db');

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server listening on *:${port}`));
