export default function initResumeTagModel(sequelize, DataTypes) {
  return sequelize.define(
    'resume_tag',
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
      tagId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tags',
          key: 'id',
        },
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
