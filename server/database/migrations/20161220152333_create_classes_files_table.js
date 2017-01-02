exports.up = knex => knex.schema.createTable('classes_files', (table) => {
  table.integer('file_id').unsigned();
  table.integer('class_id').unsigned();
  table.timestamps(true, true);
  table.primary(['file_id', 'class_id']);
  table.foreign('file_id').references('files.id');
  table.foreign('class_id').references('classes.id');
});

exports.down = knex => knex.schema.dropTable('classes_files');
