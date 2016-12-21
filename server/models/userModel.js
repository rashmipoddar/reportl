const db = require('../database/db');
const Student = require('./studentModel');
const Teacher = require('./teacherModel');

const User = db.Model.extend({
  tableName: 'users',
  hidden: ['password'],
  hasTimestamps: true,
  student() {
    return this.belongsTo(Student);
  },
  teacher() {
    return this.belongsTo(Teacher);
  },
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
});

module.exports = User;
