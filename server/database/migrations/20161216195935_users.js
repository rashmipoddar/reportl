exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments('id').primary();
  table.boolean('enabled');
  table.string('username').unique();
  table.string('password');
  table.string('firstname');
  table.string('lastname');
  table.string('email');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('users');
