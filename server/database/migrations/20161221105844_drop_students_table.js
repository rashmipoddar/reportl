exports.up = knex => knex.schema.table('students_parents', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('users.id');
})
.then(() => knex.schema.table('students_classes', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('users.id');
}))
.then(() => knex.schema.table('grades', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('users.id');
}))
.then(() => knex.schema.table('assignments_submissions', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('users.id');
}))
.then(() => knex.schema.table('test_submissions', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('users.id');
}))
.then(() => knex.schema.table('attendance', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('users.id');
}))
.then(() => knex.schema.dropTable('students'));

exports.down = knex => knex.schema.createTable('students', (table) => {
  table.increments('id').primary();
  table.integer('user_id').unsigned();
  table.foreign('user_id').references('users.id');
  table.timestamps(true, true);
})
.then(() => knex.schema.table('students_parents', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('students.id');
}))
.then(() => knex.schema.table('students_classes', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('students.id');
}))
.then(() => knex.schema.table('grades', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('students.id');
}))
.then(() => knex.schema.table('assignments_submissions', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('students.id');
}))
.then(() => knex.schema.table('test_submissions', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('students.id');
}))
.then(() => knex.schema.table('attendance', (table) => {
  table.dropForeign('student_id');
  table.foreign('student_id').references('students.id');
}));
