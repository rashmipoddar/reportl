exports.up = knex => knex.schema.createTable('students_classes', (table) => {
  table.integer('class_id').unsigned();
  table.integer('student_id').unsigned();
  table.timestamps(true, true);
  table.primary(['class_id', 'student_id']);
  table.foreign('class_id').references('classes.id');
  table.foreign('student_id').references('students.id');
});


exports.down = knex => knex.schema.dropTable('students_classes');
