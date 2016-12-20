const db = require('../database/db');
const Student = require('./studentModel');

const User = db.Model.extend({
  tableName: 'users',
  hidden: ['password'],
  hasTimestamps: true,
  student() {
    return this.belongsTo(Student);
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
