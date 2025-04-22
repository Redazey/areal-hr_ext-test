'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      last_name: { type: Sequelize.STRING },
      first_name: { type: Sequelize.STRING },
      patronymic: { type: Sequelize.STRING },
      dob: { type: Sequelize.DATE },
      passport: { type: Sequelize.STRING },
      registration_address: { type: Sequelize.STRING },
      passport_scan: { type: Sequelize.INTEGER, references: { model: 'Files', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'SET NULL' },
      deleted_at: { type: Sequelize.DATE, allowNull: true },
      updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Employees');
  }
};
