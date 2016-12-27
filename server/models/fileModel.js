const db = require('../database/db');

const File = db.Model.extend({
  tableName: 'files',
  hasTimestamps: true,
});

module.exports = db.model('File', File);
