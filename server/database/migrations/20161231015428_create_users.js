exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments('id').primary();
  table.boolean('is_disabled').defaultTo(false);
  table.string('name').unique();
  table.string('password');
  table.string('first_name');
  table.string('last_name');
  table.string('email').unique();
  table.text('img_url');
  table.text('description');
  table.string('address');
  table.string('phone_number');
  table.date('date_of_birth');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('users');
