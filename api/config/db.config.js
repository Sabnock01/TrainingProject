require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: "database_development",
    host: process.env.DB_HOST_DEV,
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USERNAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: "database_test",
    host: process.env.DB_HOST_TEST,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "database_production",
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
};