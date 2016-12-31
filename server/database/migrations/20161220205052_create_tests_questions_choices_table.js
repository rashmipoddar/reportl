exports.up = knex => knex.schema.createTable('tests_questions_choices', (table) => {
  table.increments('id').primary();
  table.integer('question_id').unsigned();
  table.text('choice');
  table.timestamps(true, true);
  table.foreign('question_id').references('tests_questions.id');
});


exports.down = knex => knex.schema.dropTable('tests_questions_choices');
