'use strict';

const argon2 = require('argon2');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const passwordHash = await argon2.hash('admin123123', {
      type: argon2.argon2id,
    });

    return queryInterface.bulkInsert('Users', [{
      last_name: 'admin',
      first_name: 'admin',
      patronymic: 'admin',
      email: 'admin@gmail.com',
      password: passwordHash,
      role_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', { email: 'admin' }, {});
  }
};