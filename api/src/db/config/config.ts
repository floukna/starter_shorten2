import { config } from 'dotenv';
// if the env path is incorrect on your local machine, the db will
// likely say the migration was correct but it might not be. double check
// that the migration has been a success! this env path is relative to
// the location of the built database files (root/db-build)
config({ path: './../.env' });
module.exports = {
  development: {
    url: process.env.DB_URL,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    // url: process.env.DB_URL,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    // url: process.env.DB_URL,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
