const db = require('../database/db');

const Teacher = db.Model.extend({
  tableName: 'teachers',
  hasTimestamps: true,
});

module.exports = Teacher;
