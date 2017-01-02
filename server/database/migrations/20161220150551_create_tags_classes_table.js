exports.up = knex => knex.schema.createTable('tags_classes', (table) => {
  table.integer('class_id').unsigned();
  table.integer('tag_id').unsigned();
  table.timestamps(true, true);
  table.primary(['class_id', 'tag_id']);
  table.foreign('class_id').references('classes.id');
  table.foreign('tag_id').references('tags.id');
});

exports.down = knex => knex.schema.dropTable('tags_classes');
