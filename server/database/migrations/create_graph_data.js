exports.up = knex => knex.schema.createTable('dummy', (table) => {
  table.increments('id').primary();
  table.string('dummy');
});

exports.down = knex => knex.schema.dropTable('dummy');
