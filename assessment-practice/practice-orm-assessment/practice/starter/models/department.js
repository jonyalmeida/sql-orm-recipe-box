'use strict';
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    }
  }, {});
  Department.associate = function (models) {
    // associations can be defined here
    Department.hasMany(
      models.Course,
      { foreignKey: 'departmentId' }
    )
  };
  return Department;
};