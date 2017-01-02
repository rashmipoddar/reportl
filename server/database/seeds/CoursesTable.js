exports.seed = (knex, Promise) => {
  const tableName = 'courses';
  const data = [
    {
      id: 1,
      department_id: '1',
      name: 'American Literature',
      description: 'This course covers American Literature from the Pre-Columbian era, to the early American writers, through the industrial revolution and ending in the mid-20th Century.',
    },
    {
      id: 2,
      department_id: '2',
      name: 'Pre-Algebra',
      description: 'This course covers Trigonometry, Geometry, Algebra and Statistics.',
    },
    {
      id: 3,
      department_id: '3',
      name: 'Biology',
      description: 'This course covers Scientific Method, Characteristics of Life, Cells and Cell Processes and Genetics and DNA.',
    },
    {
      id: 4,
      department_id: '4',
      name: 'Spanish',
      description: 'This course covers Beginning, Intermediate and Advanced Spanish.',
    },
  ];

  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => knex(tableName).del())
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))))
    .finally(() => knex.raw('SET foreign_key_checks = 1;'));
};
