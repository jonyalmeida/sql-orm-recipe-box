'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
  }, {});
  Person.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      foreignKey: 'personId',
      through: 'Enrollments',
      otherkey: 'courseId'
    }
    Person.belongsToMany(
      models.Course,
      columnMapping
    );
  };
  return Person;
};