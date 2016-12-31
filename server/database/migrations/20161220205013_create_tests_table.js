exports.up = knex => knex.schema.createTable('tests', (table) => {
  table.increments('id').primary();
  table.integer('class_id').unsigned();
  table.string('name');
  table.text('description');
  table.integer('duration');
  table.integer('length');
  table.timestamps(true, true);
  table.foreign('class_id').references('classes.id');
});


exports.down = knex => knex.schema.dropTable('tests');
