exports.seed = (knex, Promise) => {
  const tableName = 'modules';
  const data = [
    {
      id: 1,
      module_name: 'Pre-Columbian',
      percent_of_class_grade: '.25',
      class_id: '1',
    },
    {
      id: 2,
      module_name: 'Early American',
      percent_of_class_grade: '.25',
      class_id: '1',
    },
    {
      id: 3,
      module_name: 'Industrial Revolution',
      percent_of_class_grade: '.25',
      class_id: '1',
    },
    {
      id: 4,
      module_name: '20th Century',
      percent_of_class_grade: '.25',
      class_id: '1',
    },
    {
      id: 5,
      module_name: 'Trigonometry',
      percent_of_class_grade: '.25',
      class_id: '2',
    },
    {
      id: 6,
      module_name: 'Geometry',
      percent_of_class_grade: '.25',
      class_id: '2',
    },
    {
      id: 7,
      module_name: 'Algebra',
      percent_of_class_grade: '.25',
      class_id: '2',
    },
    {
      id: 8,
      module_name: 'Statistics',
      percent_of_class_grade: '.25',
      class_id: '2',
    },
    {
      id: 9,
      module_name: 'Scientific Method',
      percent_of_class_grade: '.25',
      class_id: '3',
    },
    {
      id: 10,
      module_name: 'Characteristics of Life',
      percent_of_class_grade: '.25',
      class_id: '3',
    },
    {
      id: 11,
      module_name: 'Cells and Cell Processes',
      percent_of_class_grade: '.25',
      class_id: '3',
    },
    {
      id: 12,
      module_name: 'Genetics and DNA',
      percent_of_class_grade: '.25',
      class_id: '3',
    },
    {
      id: 13,
      module_name: 'Beginning',
      percent_of_class_grade: '.33',
      class_id: '4',
    },
    {
      id: 14,
      module_name: 'Intermediate',
      percent_of_class_grade: '.33',
      class_id: '4',
    },
    {
      id: 15,
      module_name: 'Advanced',
      percent_of_class_grade: '.34',
      class_id: '4',
    },
  ];

  return knex(tableName).del()
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))));
};
