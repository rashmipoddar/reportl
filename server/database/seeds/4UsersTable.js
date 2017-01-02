exports.seed = (knex, Promise) => {
  const tableName = 'users';
  const data = [
    {
      id: 1,
      name: 'armyf35',
      first_name: 'Sam',
      last_name: 'Phillips',
      email: 'armyf35@gmail.com',
      type_id: 1,
    },
    {
      id: 2,
      name: 'mattie2',
      first_name: 'Mattie',
      last_name: 'Lents',
      email: 'mattie@mattie.com',
      type_id: 2,
    },
    {
      id: 3,
      name: 'student1',
      first_name: 'Alvin',
      last_name: 'Ardsley',
      email: 'alvin@gmail.com',
      type_id: 1,
    },
    {
      id: 4,
      name: 'student2',
      first_name: 'Jennifer',
      last_name: 'Vasquez',
      email: 'jen@gmail.com',
      type_id: 1,
    },
    {
      id: 5,
      name: 'student3',
      first_name: 'Erin',
      last_name: 'McClellan',
      email: 'erin@gmail.com',
      type_id: 1,
    },
    {
      id: 6,
      name: 'student4',
      first_name: 'Lindsay',
      last_name: 'Herzog',
      email: 'lindsay@gmail.com',
      type_id: 1,
    },
    {
      id: 7,
      name: 'student5',
      first_name: 'Samuel',
      last_name: 'Growan',
      email: 'samuel@gmail.com',
      type_id: 1,
    },
  ];

  return knex(tableName).del()
    .then(() => Promise.all(data.map(user => knex(tableName).insert(user))));
};
