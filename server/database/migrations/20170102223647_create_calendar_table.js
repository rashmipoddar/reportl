exports.up = knex => knex.schema.createTable('calendar', (table) => {
  table.increments('id').primary();
  table.integer('day_count');
  table.integer('month_count');
  table.string('week_day');
  table.integer('day_of_month');
  table.string('month');
  table.timestamps(true, true);
})
.then(() => knex.schema.table('meetings', (table) => {
  table.integer('calendar_day').unsigned();
  table.foreign('calendar_day').references('calendar.id');
}))
.then(() => knex.schema.table('gradeable_objects', (table) => {
  table.integer('day_assigned').unsigned();
  table.integer('day_due').unsigned();
  table.foreign('day_assigned').references('calendar.id');
  table.foreign('day_due').references('calendar.id');
}));

exports.down = knex => knex.schema.dropTable('calendar')
.then(() => knex.schema.table('meetings', (table) => {
  table.dropForeign('calendar_day');
  table.foreign('calendar_day').references('calendar.id');
}))
.then(() => knex.schema.table('gradeable_objects', (table) => {
  table.dropForeign('day_assigned');
  table.dropForeign('day_due');
  table.foreign('day_assigned').references('calendar.id');
  table.foreign('day_due').references('calendar.id');
}));
