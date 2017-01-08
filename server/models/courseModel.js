const db = require('../database/db');
require('./classModel');
require('./departmentModel');

const Course = db.Model.extend({
  tableName: 'courses',
  hasTimestamps: true,
  classes() {
    return this.hasMany('Class');
  },
  department() {
    return this.belongsTo('departments', 'department_id');
  },
});

module.exports = db.model('Course', Course);
