const db = require('../database/db');

const GraphData = db.Model.extend({
  tableName: 'graph_data',
  hasTimestamps: false,
});

module.exports = db.model('GraphModel', GraphModel);
