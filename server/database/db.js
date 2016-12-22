const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig);
const db = require('bookshelf')(knex);

db.plugin('visibility');
db.plugin('virtuals');
db.plugin('bookshelf-camelcase');
db.plugin('registry');

module.exports = db;
