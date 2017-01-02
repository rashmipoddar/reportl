exports.up = knex => knex.schema.table('students_parents', (table) => {
  table.dropForeign('parent_id');
  table.foreign('parent_id').references('users.id');
})
.then(() => knex.schema.dropTable('parents'));

exports.down = knex => knex.schema.createTable('parents', (table) => {
  table.increments('id').primary();
  table.integer('user_id').unsigned();
  table.foreign('user_id').references('users.id');
  table.timestamps(true, true);
})
.then(() => knex.schema.table('students_parents', (table) => {
  table.dropForeign('parent_id');
  table.foreign('parent_id').references('parents.id');
}));
