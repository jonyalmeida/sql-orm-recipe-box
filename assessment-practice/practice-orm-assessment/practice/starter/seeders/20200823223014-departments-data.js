'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Departments', [
      { name: 'Economics', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mathematics', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Music', createdAt: new Date(), updatedAt: new Date() },
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
    return queryInterface.bulkDelete('Departments', {
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
