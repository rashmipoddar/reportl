exports.up = knex => knex.schema.createTable('tags', (table) => {
  table.increments('id').primary();
  table.string('name');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('tags');
