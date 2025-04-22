'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Professions', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING },
      comment: { type: Sequelize.STRING },
      deleted_at: { type: Sequelize.DATE, allowNull: true },
      updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Professions');
  }
};

