exports.up = knex => knex.schema.table('users', (table) => {
  table.dropColumn('img_url');
  table.integer('profile_photo_id').unsigned();
  table.foreign('profile_photo_id').references('files.id');
});

exports.down = knex => knex.schema.table('users', (table) => {
  table.dropForeign('profile_photo_id');
  table.dropColumn('profile_photo_id');
  table.text('img_url');
});
