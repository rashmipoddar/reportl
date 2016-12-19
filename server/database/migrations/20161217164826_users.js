exports.up = knex => knex.schema.table('users', (table) => {
  table.text('img_url');
});

exports.down = knex => knex.schema.table('users', (table) => {
  table.dropColumn('img_url');
});
