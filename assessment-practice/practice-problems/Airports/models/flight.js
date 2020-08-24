'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define('Flight', {
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    departureAirportId: DataTypes.INTEGER,
    arrivalAirportId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
    },
    departureGate: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
    },
    airplaneId: DataTypes.INTEGER
  }, {});
  Flight.associate = function (models) {
    // associations can be defined here
    Flight.hasMany(models.Airport, { foreignKey: 'departureAirportId' });
    Flight.hasMany(models.Airport, { foreignKey: 'arrivalAirportId' });
    Flight.hasMany(models.Airplane, { foreignKey: 'airplaneId' });
  };
  return Flight;
};