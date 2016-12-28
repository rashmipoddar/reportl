const db = require('../database/db');
require('./courseModel');

const Class = db.Model.extend({
  tableName: 'classes',
  hasTimestamps: true,
  course() {
    return this.belongsTo('Course');
  },

});

module.exports = db.model('Class', Class);
