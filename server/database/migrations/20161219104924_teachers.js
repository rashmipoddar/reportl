
exports.up = knex => knex.schema.createTable('teachers', (table) => {
  table.increments('id').primary();
  table.integer('user_id');
  table.foreign('user_id').references('users.id');
  table.integer('department_id');
  table.foreign('department_id').references('departments.id');
});

exports.down = knex => knex.schema.dropTable('teachers');
