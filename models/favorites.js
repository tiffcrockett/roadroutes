module.exports = function (sequelize, DataTypes) {
  var Favorites = sequelize.define("Favorites", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  });

  Favorites.associate = function (models) {
    Favorites.belongsTo(models.Routes, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Favorites;
};
