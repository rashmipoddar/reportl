exports.up = knex => knex.schema.createTable('tags_grades', (table) => {
  table.integer('grade_id').unsigned();
  table.integer('tag_id').unsigned();
  table.timestamps(true, true);
  table.primary(['grade_id', 'tag_id']);
  table.foreign('grade_id').references('grades.id');
  table.foreign('tag_id').references('tags.id');
});


exports.down = knex => knex.schema.dropTable('tags_grades');
