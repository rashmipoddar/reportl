const db = require('../database/db');

const Staff = db.Model.extend({
  tableName: 'staff',
  hasTimestamps: true,
});

module.exports = Staff;
