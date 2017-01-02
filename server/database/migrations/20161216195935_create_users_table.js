exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments('id').primary();
  table.boolean('is_disabled').defaultTo(false);
  table.string('name').unique();
  table.string('password');
  table.string('first_name');
  table.string('last_name');
  table.string('email').unique();
  table.text('img_url');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('users');
