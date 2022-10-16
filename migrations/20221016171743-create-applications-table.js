module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      resume_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'resumes',
          key: 'id',
        },
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      company: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      date: {
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
    await queryInterface.dropTable('applications');
  },
};
