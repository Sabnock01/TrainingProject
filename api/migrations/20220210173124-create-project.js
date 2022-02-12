'use strict';

const tableName = "projects";

module.exports = {
  up: async (queryInterface, Sequelize)  => queryInterface.sequelize.transaction (async (t) => {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lead_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    });
  }),

  down: async (queryInterface, Sequelize) => queryInterface.sequelize.transaction (async (t) => {
    await queryInterface.dropTable(tableName, { transaction: t });
  }),
};
