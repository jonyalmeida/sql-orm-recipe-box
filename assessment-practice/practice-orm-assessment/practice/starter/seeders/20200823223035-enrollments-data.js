'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Enrollments', [
      { personId: 3, courseId: 7, createdAt: new Date(), updatedAt: new Date() },
      { personId: 3, courseId: 1, createdAt: new Date(), updatedAt: new Date() },
      { personId: 3, courseId: 4, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 4, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 6, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 1, createdAt: new Date(), updatedAt: new Date() },
      { personId: 3, courseId: 5, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 5, createdAt: new Date(), updatedAt: new Date() },
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
    return queryInterface.bulkDelete('Enrollments', {
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
