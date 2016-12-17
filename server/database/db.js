const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV]);
const db = require('bookshelf')(knex);

db.plugin('bookshelf-camelcase');

module.exports = db;
