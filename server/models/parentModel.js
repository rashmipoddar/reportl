const db = require('../database/db');

const Parent = db.Model.extend({
  tableName: 'parents',
  hasTimestamps: true,
});

module.exports = Parent;
