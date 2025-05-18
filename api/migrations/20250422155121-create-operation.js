'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Operations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      employee_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Employees', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      profession_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Professions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Departments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      salary: { type: Sequelize.INTEGER, defaultValue: 22440 },
      deleted_at: { type: Sequelize.DATE, allowNull: true },
      updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Operations');
  },
};
