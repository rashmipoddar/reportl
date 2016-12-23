const db = require('../database/db');
const Course = require('./courseModel');

const Class = db.Model.extend({
  tableName: 'classes',
  hasTimestamps: true,
  course() {
    return this.belongsTo(Course);
  },

});

module.exports = Class;
