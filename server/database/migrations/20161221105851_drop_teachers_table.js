exports.up = knex => knex.schema.table('classes', (table) => {
  table.dropForeign('teacher_id');
  table.foreign('teacher_id').references('users.id');
})
.then(() => knex.schema.dropTable('teachers'));

exports.down = knex => knex.schema.createTable('teachers', (table) => {
  table.increments('id').primary();
  table.integer('user_id').unsigned();
  table.foreign('user_id').references('users.id');
  table.integer('department_id').unsigned();
  table.foreign('department_id').references('departments.id');
  table.timestamps(true, true);
})
.then(() => knex.schema.table('classes', (table) => {
  table.dropForeign('teacher_id');
  table.foreign('teacher_id').references('teachers.id');
}));
