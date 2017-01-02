exports.seed = (knex, Promise) => {
  const tableName = 'gradeable_objects';
  const data = [
    {
      id: 1,
      object_name: 'Homework - Short Essay',
      duration: '1',
      filename: 'waiting',
      percent_of_module_grade: '.2',
      module_id: '1',
      type_id: '3',
    },
    {
      id: 2,
      object_name: 'Homework - Long Essay',
      duration: '3',
      filename: 'waiting',
      percent_of_module_grade: '.4',
      module_id: '1',
      type_id: '4',
    },
    {
      id: 3,
      object_name: 'Homework - Worksheet',
      duration: '1',
      filename: 'waiting',
      percent_of_module_grade: '.2',
      module_id: '1',
      type_id: '3',
    },
    {
      id: 4,
      object_name: 'Homework - Short Response',
      duration: '1',
      filename: 'waiting',
      percent_of_module_grade: '.2',
      module_id: '1',
      type_id: '3',
    },
    {
      id: 5,
      object_name: 'Final Exam',
      duration: '1',
      filename: 'waiting',
      percent_of_module_grade: '1',
      module_id: '4',
      type_id: '1',
    },
  ];

  return knex(tableName).del()
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))));
};
