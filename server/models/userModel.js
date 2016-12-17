const db = require('../database/db');

const User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
});

module.exports = User;
