require('dotenv').config({
  silent: true,
});

const app = require('express')();
const db = require('./database/db');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.all('*', (req, res) => {
  res.status(404).send('Wrong place bud');
});

app.listen(port, () => console.log(`Server listening on *:${port}`));
