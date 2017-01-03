const db = require('../database/db');
require('./userTypeModel');
require('./classModel');

const User = db.Model.extend({
  tableName: 'users',
  hidden: ['password'],
  hasTimestamps: true,
  virtuals: {
    fullName: {
      get() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
      },
      set(value) {
        const names = value.split(' ');
        this.set('firstName', names[0]);
        this.set('lastName', names[1]);
      },
    },
  },
  type() {
    return this.belongsTo('UserType', 'type_id');
  },
  classes() {
    return this.belongsToMany('Class', 'students_classes', 'student_id');
  },
});

module.exports = db.model('User', User);
