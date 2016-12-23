const db = require('../database/db');

const Course = db.Model.extend({
  tableName: 'courses',
  hasTimestamps: true,
  classes() {
    return this.hasMany(require('./classModel'));
  },

});

module.exports = Course;
