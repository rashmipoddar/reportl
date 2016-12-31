exports.up = knex => knex.schema.createTable('classes', (table) => {
  table.increments('id').primary();
  table.integer('teacher_id').unsigned();
  table.integer('course_id').unsigned();
  table.string('name');
  table.integer('size');
  table.timestamp('start_date').defaultTo(knex.fn.now());
  table.timestamp('end_date').defaultTo(knex.fn.now());
  table.timestamps(true, true);
  table.foreign('teacher_id').references('teachers.id');
  table.foreign('course_id').references('courses.id');
});


exports.down = knex => knex.schema.dropTable('classes');
