exports.up = knex => knex.schema.createTable('test_questions', (table) => {
  table.increments('id').primary();
  table.integer('test_id').unsigned();
  table.text('qiestion');
  table.integer('answer_id');
  table.timestamps(true, true);
  table.foreign('test_id').references('tests.id');
});

exports.down = knex => knex.schema.dropTable('test_questions');
