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

  return knex(tableName).del()
    .then(() => Promise.all(data.map(user => knex(tableName).insert(user))));
};
