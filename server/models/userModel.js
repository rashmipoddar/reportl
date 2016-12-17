const db = require('../database/db');

const User = db.Model.extend({
  tableName: 'users',
  hidden: ['password'],
  hasTimestamps: true,
});

module.exports = User;
