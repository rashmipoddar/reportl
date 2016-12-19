const db = require('../database/db');
const Teacher = require('./teacherModel.js');

const Department = db.Model.extend({
  tableName: 'departments',
  hasTimestamps: true,
  teachers() {
    return this.hasMany(Teacher);
  },
});

module.exports = Department;
