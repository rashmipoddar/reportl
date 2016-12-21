exports.up = knex => knex.schema.createTable('test_submissions_questions', (table) => {
  table.increments('id').primary();
  table.integer('submission_id').unsigned();
  table.integer('question_id').unsigned();
  table.integer('choice_id').unsigned();
  table.timestamps(true, true);
  table.foreign('submission_id').references('test_submissions.id');
  table.foreign('question_id').references('test_questions.id');
  table.foreign('choice_id').references('test_question_choices.id');
});

exports.down = knex => knex.schema.dropTable('test_submissions_questions');
