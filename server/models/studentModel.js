const db = require('../database/db');
const User = require('./userModel.js');
const Parent = require('./parentModel.js');

const Student = db.Model.extend({
  tableName: 'students',
  user() {
    return this.hasOne(User);
  },
  parents() {
    return this.belongsToMany(Parent);
  },
});

module.exports = Student;
