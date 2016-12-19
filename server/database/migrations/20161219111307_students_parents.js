
exports.up = knex => knex.schema.createTable('students_parents', (table) => {
  table.integer('student_id').unsigned();
  table.foreign('student_id').references('students.id');
  table.integer('parent_id').unsigned();
  table.foreign('parent_id').references('parents.id');
});

exports.down = knex => knex.schema.dropTable('students_parents');
