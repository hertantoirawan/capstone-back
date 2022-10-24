module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('oauth-tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      access_token: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      access_token_expires_at: {
        type: Sequelize.DATE,
      },
      refresh_token: {
        type: Sequelize.STRING,
      },
      refresh_token_expires_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('oauth-tokens');
  },
};
