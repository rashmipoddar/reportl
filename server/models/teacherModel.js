const db = require('../database/db');
const Department = require('./departmentModel.js');


const Teacher = db.Model.extend({
  tableName: 'teachers',
  user() {
    return this.hasOne(require('./userModel.js'), 'id');
  },
  department() {
    return this.hasOne(Department);
  },
});

module.exports = Teacher;
