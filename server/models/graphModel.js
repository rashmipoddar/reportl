const db = require('../database/db');

const GraphModel = db.Model.extend({
  tableName: 'graph_data',
  hasTimestamps: false,
});

module.exports = db.model('GraphModel', GraphModel);
