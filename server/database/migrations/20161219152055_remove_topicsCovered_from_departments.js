
exports.up = knex => knex.schema.table('departments', (table) => {
  table.dropColumn('topicsCovered');
});

exports.down = knex => knex.schema.table('departments', (table) => {
  table.string('topicsCovered');
});
