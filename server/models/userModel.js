const db = require('../database/db');
require('./userTypeModel');

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
});

module.exports = db.model('User', User);
