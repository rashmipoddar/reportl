exports.up = knex => knex.schema.createTable('assignments_submissions', (table) => {
  table.increments('id').primary();
  table.integer('assignment_id').unsigned();
  table.integer('student_id').unsigned();
  table.integer('grade_id').unsigned();
  table.timestamps(true, true);
  table.foreign('assignment_id').references('assignments.id');
  table.foreign('student_id').references('students.id');
  table.foreign('grade_id').references('grades.id');
});

exports.down = knex => knex.schema.dropTable('assignments_submissions');
