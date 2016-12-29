const db = require('../database/db');
require('./courseModel');
require('./moduleModel');

const Class = db.Model.extend({
  tableName: 'classes',
  hasTimestamps: true,
  course() {
    return this.belongsTo('Course');
  },
  modules() {
    return this.hasMany(Module, 'classes_id');
  },
});

module.exports = db.model('Class', Class);
