const db = require('../database/db');
require('./classModel');

const Course = db.Model.extend({
  tableName: 'courses',
  hasTimestamps: true,
  classes() {
    return this.hasMany('Class');
  },

});

module.exports = db.model('Course', Course);
