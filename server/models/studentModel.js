const db = require('../database/db');
const Parent = require('./parentModel.js');


const Student = db.Model.extend({
  tableName: 'students',
  user() {
    return this.belongsTo(require('./userModel.js'), 'user_id');
  },
  parents() {
    return this.belongsToMany(Parent);
  },
});

module.exports = Student;
