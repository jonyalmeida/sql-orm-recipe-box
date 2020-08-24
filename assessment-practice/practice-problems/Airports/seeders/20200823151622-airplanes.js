'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Airplanes', [
      { model: '747', capacity: 500, createdAt: new Date(), updatedAt: new Date() },
      { model: '737', capacity: 100, createdAt: new Date(), updatedAt: new Date() },
      { model: 'Cessna 172', capacity: 4, createdAt: new Date(), updatedAt: new Date() }
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
