'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      time: {
        allowNull: false,
        type: Sequelize.TIME
      },
      departureAirportId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Airports" }
      },
      arrivalAirportId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Airports" }
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      departureGate: {
        allowNull: false,
        type: Sequelize.STRING
      },
      airplaneId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Airplanes" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Flights');
  }
};