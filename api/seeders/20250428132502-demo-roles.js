'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          name: 'user',
        },
        {
          name: 'admin',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
