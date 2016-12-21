exports.up = knex => knex.schema.createTable('test_question_choices', (table) => {
  table.increments('id').primary();
  table.integer('question_id').unsigned();
  table.text('choice');
  table.timestamps(true, true);
  table.foreign('question_id').references('test_questions.id');
});

exports.down = knex => knex.schema.dropTable('test_question_choices');
