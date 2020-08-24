'use strict';
module.exports = (sequelize, DataTypes) => {
  const Airplane = sequelize.define('Airplane', {
    model: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
    },
    capacity: DataTypes.INTEGER
  }, {});
  Airplane.associate = function (models) {
    // associations can be defined here
    Airplane.belongsTo(models.Flight, { foreignKey: 'airplaneId ' });
  };
  return Airplane;
};