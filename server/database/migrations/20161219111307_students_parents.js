
exports.up = knex => knex.schema.createTable('students_parents', (table) => {
  table.integer('student_id');
  table.foreign('student_id').references('students.id');
  table.integer('parent_id');
  table.foreign('parent_id').references('parents.id');
});

exports.down = knex => knex.schema.dropTable('students_parents');
