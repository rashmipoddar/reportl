exports.up = knex => knex.schema.createTable('graph_data', (table) => {
  table.increments('id').primary();
  table.integer('department_id').unsigned();
  table.integer('course_id').unsigned();
  table.integer('class_id').unsigned();
  table.integer('teacher_id').unsigned();
  table.integer('student_id').unsigned();
  table.integer('module_id').unsigned();
  table.integer('gradeableobject_id').unsigned();
  table.integer('gradeableobjecttype_id').unsigned();
  table.integer('tag_id').unsigned();
  table.timestamp('start_date').defaultTo(knex.fn.now());
  table.timestamp('end_date').defaultTo(knex.fn.now());
  table.timestamps(true, true);
  table.integer('grade');
  table.foreign('department_id').references('departments.id');
  table.foreign('course_id').references('courses.id');
  table.foreign('class_id').references('classes.id');
  table.foreign('teacher_id').references('users.id');
  table.foreign('student_id').references('users.id');
  table.foreign('module_id').references('files.id');
  table.foreign('gradeableobject_id').references('gradeable_objects.id');
  table.foreign('gradeableobjecttype_id').references('gradeable_objects_types.id');
  table.foreign('tag_id').references('tags.id');
});

exports.down = knex => knex.schema.dropTable('graph_data');
