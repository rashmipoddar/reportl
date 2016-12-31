exports.up = knex => knex.schema.table('teachers', (table) => {
  table.integer('department_id').unsigned();
  table.foreign('department_id').references('departments.id');
});


exports.down = knex => knex.schema.table('teachers', (table) => {
  table.dropForeign('department_id');
  table.dropColumn('department_id');
});
