exports.up = knex => knex.schema.createTable('staff', (table) => {
  table.increments('id').primary();
  table.integer('user_id').unsigned();
  table.foreign('user_id').references('users.id');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('staff');
