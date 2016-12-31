exports.up = knex => knex.schema.createTable('assignments', (table) => {
  table.increments('id').primary();
  table.integer('class_id').unsigned();
  table.string('name');
  table.text('description');
  table.timestamp('assigned_at').defaultTo(knex.fn.now());
  table.timestamp('due_at').defaultTo(knex.fn.now());
  table.timestamps(true, true);
  table.foreign('class_id').references('classes.id');
});


exports.down = knex => knex.schema.dropTable('assignments');
