exports.seed = (knex, Promise) => {
  const tableName = 'tags';
  const data = [
    {
      id: 1,
      name: 'Critical Thinking',
    },
    {
      id: 2,
      name: 'Reasoning',
    },
    {
      id: 3,
      name: 'Communication',
    },
  ];

  return knex(tableName).del()
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))));
};
