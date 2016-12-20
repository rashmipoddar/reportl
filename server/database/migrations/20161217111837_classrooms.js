exports.up = knex => knex.schema.createTable('classrooms', (table) => {
  table.increments('id').primary();
  table.string('class_name');
  table.integer('teacher_id');
  table.integer('course_id');
  table.integer('chat_id'); // if we want to have class related chatrooms

  table.string('files'); // for storing class-related files
  table.string('syllabus'); // could be included in the files column
  table.string('grades'); // may need to be it's own table
  table.string('assignments'); // may need to be it's own table
  table.string('sections'); // may need to be it's own table
                            // & hold data related to units the
                            // class is going over e.g. Algebra, linear algebra, etc.
  table.string('announcements');
  table.string('pages'); // not sure if we'll get around to allowing people to configure additional pages in our app
  table.string('homepage'); // selects which page is the landing page for students
  table.string('location');
  table.timestamp('start_date').defaultTo(knex.fn.now());
  table.timestamp('end_date').defaultTo(knex.fn.now());
  table.string('events'); // for parties the class might throw,
                          // or days when a speaker might come in etc.

  table.boolean('monday');  // booleans reflecting timing for classes
                            // if true, class is on that day and we get the start & end time
  table.boolean('tuesday');
  table.boolean('wednesday');
  table.boolean('thursday');
  table.boolean('friday');
  table.boolean('saturday');
  table.boolean('sunday');

  table.integer('start_time_hour'); // using integers here because it may be easier to handle and change
  table.integer('start_time_minute');
  table.integer('end_time_hour');
  table.integer('end_time_minute');
});

exports.down = knex => knex.schema.dropTable('classrooms');
