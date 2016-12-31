exports.up = knex => knex.schema.table('users', (table) => {
  table.text('description');
  table.string('address');
  table.string('phone_number');
  table.date('date_of_birth');
});


exports.down = knex => knex.schema.table('users', (table) => {
  table.dropColumns([
    'description',
    'address',
    'phone_number',
    'date_of_birth',
  ]);
});
