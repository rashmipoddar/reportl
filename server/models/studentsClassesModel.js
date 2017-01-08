const db = require('../database/db');

const StudentsClasses = db.Model.extend({
  tableName: 'students_classes',
  hasTimestamps: true,
});

module.exports = db.model('StudentsClasses', StudentsClasses);
