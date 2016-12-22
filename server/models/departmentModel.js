const db = require('../database/db');
require('./userTypeModel');
require('./userModel');

const Department = db.Model.extend({
  tableName: 'departments',
  hasTimestamps: true,
  users() {
    return this.belongsToMany('User', 'users_departments');
  },
});

module.exports = db.model('Department', Department);
