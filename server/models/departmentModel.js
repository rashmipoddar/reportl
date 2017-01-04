const db = require('../database/db');
require('./userModel');
require('./courseModel');

const Department = db.Model.extend({
  tableName: 'departments',
  hasTimestamps: true,
  users() {
    return this.belongsToMany('User', 'users_departments');
  },
  courses() {
    return this.hasMany('Course');
  },
});

module.exports = db.model('Department', Department);
