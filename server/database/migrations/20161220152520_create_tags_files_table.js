exports.up = knex => knex.schema.createTable('tags_files', (table) => {
  table.integer('file_id').unsigned();
  table.integer('tag_id').unsigned();
  table.timestamps(true, true);
  table.primary(['file_id', 'tag_id']);
  table.foreign('file_id').references('files.id');
  table.foreign('tag_id').references('tags.id');
});

exports.down = knex => knex.schema.dropTable('tags_files');
