exports.up = knex => knex.schema.createTable('students_parents', (table) => {
  table.integer('parent_id').unsigned();
  table.integer('student_id').unsigned();
  table.timestamps(true, true);
  table.primary(['parent_id', 'student_id']);
  table.foreign('parent_id').references('parents.id');
  table.foreign('student_id').references('students.id');
});

exports.down = knex => knex.schema.dropTable('students_parents');
