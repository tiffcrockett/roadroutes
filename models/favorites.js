module.exports = function (sequelize, DataTypes) {
  var Favorites = sequelize.define("Favorites", {});

  Favorites.associate = function (models) {
    Favorites.belongsTo(models.Routes, {
      foreignKey: {
        allowNull: false,
      },
    });
    Favorites.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Favorites;
};
