exports.up = knex => knex.schema.createTable('assignments_submissions_files', (table) => {
  table.integer('file_id').unsigned();
  table.integer('submission_id').unsigned();
  table.timestamps(true, true);
  table.primary(['file_id', 'submission_id']);
  table.foreign('file_id').references('files.id');
  table.foreign('submission_id').references('assignments_submissions.id');
});


exports.down = knex => knex.schema.dropTable('assignments_submissions_files');
