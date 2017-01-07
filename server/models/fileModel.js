const db = require('../database/db');
require('./gradeableObjectModel');
require('./userModel');

const File = db.Model.extend({
  tableName: 'files',
  hasTimestamps: true,
  module() {
    return this.belongsTo('Module', 'module_id');
  },
  gradeableobject() {
    return this.hasMany('GradeableObjectModel');
  },
  user() {
    return this.hasOne('User', 'profile_photo_id');
  },
});

module.exports = db.model('File', File);
