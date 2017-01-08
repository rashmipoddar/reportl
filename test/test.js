const { expect } = require('chai');
const knexConfig = require('../server/database/knexfile.js');
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'development']);
global.expect = expect;

describe('Reportl', function() {
  before(function() {
    this.timeout(30 * 1000);
    return knex.migrate.latest({
      directory: './server/database/migrations',
    })
    .then(() => knex.raw('SET GLOBAL foreign_key_checks = 0;'));
  });

  after(function() {
    return knex.raw('SET GLOBAL foreign_key_checks = 1;');
  });

  require('./userModel');

});
