exports.up = knex => knex.schema.createTable('tests_submissions_questions', (table) => {
  table.increments('id').primary();
  table.integer('submission_id').unsigned();
  table.integer('question_id').unsigned();
  table.integer('choice_id').unsigned();
  table.timestamps(true, true);
  table.foreign('submission_id').references('tests_submissions.id');
  table.foreign('question_id').references('tests_questions.id');
  table.foreign('choice_id').references('tests_questions_choices.id');
});


exports.down = knex => knex.schema.dropTable('tests_submissions_questions');
