module.exports = function (sequelize, DataTypes) {
  var Routes = sequelize.define("Routes", {
    routeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    routeSteps: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("routeSteps").split(";");
      },
      set(val) {
        this.setDataValue("routeSteps", val.join(";"));
      },
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Routes;
};
