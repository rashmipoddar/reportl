exports.up = knex => knex.schema.createTable('grades', (table) => {
  table.increments('id').primary();
  table.integer('class_id').unsigned();
  table.integer('student_id').unsigned();
  table.integer('scale');
  table.integer('weight');
  table.timestamps(true, true);
  table.foreign('class_id').references('classes.id');
  table.foreign('student_id').references('students.id');
});


exports.down = knex => knex.schema.dropTable('grades');
