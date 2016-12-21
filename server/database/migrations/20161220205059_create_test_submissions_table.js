exports.up = knex => knex.schema.createTable('test_submissions', (table) => {
  table.increments('id').primary();
  table.integer('test_id').unsigned();
  table.integer('student_id').unsigned();
  table.integer('grade_id').unsigned();
  table.timestamps(true, true);
  table.foreign('test_id').references('tests.id');
  table.foreign('student_id').references('students.id');
  table.foreign('grade_id').references('grades.id');
});

exports.down = knex => knex.schema.dropTable('test_submissions');
