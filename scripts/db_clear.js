const knexConfig = require('../server/database/knexfile.js');
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'development']);

const migrateConfig = {
  directory: './server/database/migrations',
};

const rollback = () => knex.migrate.rollback(migrateConfig)
  .then((data) => {
    console.log('rollback', data);
    return knex.migrate.currentVersion(migrateConfig);
  })
  .then((version) => {
    console.log('version', version);
    return version;
  });

const goBack = () => rollback().then((version) => {
  if (version === 'none') {
    return process.exit();
  }
  return goBack();
})
.catch((error) => {
  console.log('Error', error);
  process.exit(1);
});

knex.raw('SET foreign_key_checks = 0;')
  .then(() => goBack())
  .finally(() => knex.raw('SET foreign_key_checks = 1;'));
