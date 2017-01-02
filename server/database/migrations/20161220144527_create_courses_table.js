exports.up = knex => knex.schema.createTable('courses', (table) => {
  table.increments('id').primary();
  table.integer('department_id').unsigned();
  table.string('name');
  table.text('description');
  table.timestamps(true, true);
  table.foreign('department_id').references('departments.id');
});

exports.down = knex => knex.schema.dropTable('courses');
