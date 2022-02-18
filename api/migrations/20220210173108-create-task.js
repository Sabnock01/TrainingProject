

const tableName = "tasks";

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize.transaction (async (t) => {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      summary: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  }),

  down: async (queryInterface, Sequelize) => queryInterface.sequelize.transaction (async (t) => {
    await queryInterface.dropTable(tableName, { transaction: t });
  }),
};
