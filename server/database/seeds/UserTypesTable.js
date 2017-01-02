exports.seed = (knex, Promise) => {
  const tableName = 'users_types';
  const data = [
    {
      id: 1,
      name: 'student',
    },
    {
      id: 2,
      name: 'teacher',
    },
    {
      id: 3,
      name: 'staff',
    },
    {
      id: 4,
      name: 'parent',
    },
  ];

  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => knex(tableName).del())
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))))
    .finally(() => knex.raw('SET foreign_key_checks = 1;'));
};
