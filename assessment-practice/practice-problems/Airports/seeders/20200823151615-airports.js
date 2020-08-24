'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Airports', [
      { airportCode: 'YYC', airportName: 'Calgary', createdAt: new Date(), updatedAt: new Date() },
      { airportCode: 'YYZ', airportName: 'Toronto', createdAt: new Date(), updatedAt: new Date() },
      { airportCode: 'YVR', airportName: 'Vancouver', createdAt: new Date(), updatedAt: new Date() },
      { airportCode: 'YUL', airportName: 'Montreal', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
  
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
