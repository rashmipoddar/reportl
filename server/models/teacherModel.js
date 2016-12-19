const db = require('../database/db');
const User = require('./userModel.js');
const Department = require('./departmentModel.js');

const Teacher = db.Model.extend({
  tableName: 'teachers',
  user() {
    return this.hasOne(User);
  },
  department() {
    return this.hasOne(Department);
  },
});

module.exports = Teacher;
