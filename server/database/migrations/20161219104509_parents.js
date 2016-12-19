
exports.up = knex => knex.schema.createTable('parents', (table) => {
  table.increments('id').primary();
  table.integer('user_id');
  table.foreign('user_id').references('users.id');
});

exports.down = knex => knex.schema.dropTable('parents');
