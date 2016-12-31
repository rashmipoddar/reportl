exports.up = knex => knex.schema.createTable('users_departments', (table) => {
  table.integer('user_id').unsigned();
  table.integer('department_id').unsigned();
  table.timestamps(true, true);
  table.primary(['user_id', 'department_id']);
  table.foreign('user_id').references('users.id');
  table.foreign('department_id').references('departments.id');
});


exports.down = knex => knex.schema.dropTable('users_departments');
