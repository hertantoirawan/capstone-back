export default function initApplicationModel(sequelize, DataTypes) {
  return sequelize.define(
    'application',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      resumeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'resumes',
          key: 'id',
        },
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      company: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    },
  );
}
