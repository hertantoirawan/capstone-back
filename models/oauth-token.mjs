export default function initOAuthTokenModel(sequelize, DataTypes) {
  return sequelize.define(
    'oauth-token',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      accessToken: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      accessTokenExpiresAt: {
        type: DataTypes.DATE,
      },
      refreshToken: {
        type: DataTypes.STRING,
      },
      refreshTokenExpiresAt: {
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
