const db = require('../database/db');

const Parent = require('./parentModel.js');

const Student = db.Model.extend({
  tableName: 'students',
  user() {
    return this.hasOne(require('./userModel.js'), 'id');
  },
  parents() {
    return this.belongsToMany(Parent);
  },
});

module.exports = Student;
