'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('People', [
      { firstName: 'Daniel', lastName: 'Hays', email: 'Cras.sed.leo@Vivamusmolestie.co.uk', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Wade', lastName: 'Woodard', email: 'massa.Integer@lectus.ca', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Frances', lastName: 'Rosales', email: 'ligula@velitduisemper.ca', createdAt: new Date(), updatedAt: new Date() },
    ], {});


    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', {
      id: { [Sequelize.Op.gt]: 0 }
    });
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
