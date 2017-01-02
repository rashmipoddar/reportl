require('dotenv').config({
  silent: true,
});
require('dotenv').config({
  path: '../../.env',
  silent: true,
});

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    pool: {
      max: 1,
    },
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
