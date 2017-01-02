exports.seed = (knex, Promise) => {
  const tableName = 'departments';
  const data = [
    {
      id: 1,
      name: 'English',
    },
    {
      id: 2,
      name: 'Math',
    },
    {
      id: 3,
      name: 'Science',
    },
    {
      id: 4,
      name: 'Modern Languages',
    },
  ];

  return knex(tableName).del()
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))));
};
