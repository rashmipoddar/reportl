const db = require('../database/db');
require('./userModel');

const UserType = db.Model.extend({
  tableName: 'users_types',
  hasTimestamps: true,
  users() {
    return this.hasMany('User', 'type_id');
  },
});

module.exports = db.model('UserType', UserType);
