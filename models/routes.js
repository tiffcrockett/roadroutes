module.exports = function (sequelize, DataTypes) {
  var Routes = sequelize.define("Routes", {
    routeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    routeState: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    routeCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    routeArea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    routeDistance: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    routeSteps: {
      type: DataTypes.STRING(8000),
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Routes;
};
