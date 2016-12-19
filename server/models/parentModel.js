const db = require('../database/db');
const User = require('./userModel.js');
const Student = require('./studentModel.js');

const Parent = db.Model.extend({
  tableName: 'parents',
  user() {
    return this.hasOne(User);
  },
  students() {
    return this.belongsToMany(Student);
  },
});

module.exports = Parent;
