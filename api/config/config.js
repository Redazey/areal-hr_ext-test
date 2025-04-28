require('dotenv').config({ path: __dirname + '/../.env' });

module.exports = {
  development: {
    username: process.env.DB_USER || 'backend',
    password: process.env.DB_PASSWORD || 'backend1!',
    database: process.env.DB_NAME || 'areal',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USER || 'backend',
    password: process.env.DB_PASSWORD || 'backend1!',
    database: process.env.DB_NAME || 'areal',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER || 'backend',
    password: process.env.DB_PASSWORD || 'backend1!',
    database: process.env.DB_NAME || 'areal',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
  },
};
