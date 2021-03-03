module.exports = function (sequelize, DataTypes) {
  var Routes = sequelize.define("Routes", {
    // pkid: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [4],
    //   },
    // },
    // routeID: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   validate: {
    //     len: [4],
    //   },
    // },
    routeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
    routeState: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
    routeCity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
    routeArea: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
    routeDistance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [4],
      },
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
      validate: {
        len: [4],
      },
    },
  });
  return Routes;
};
