'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    level: DataTypes.INTEGER,
    campusId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER
  }, {});
  Course.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      foreignKey: 'courseId',
      through: 'Enrollments',
      otherKey: 'personId'
    }
    Course.belongsToMany(
      models.Person,
      columnMapping
    );
    Course.belongsTo(
      models.Campus,
      { foreignKey: 'campusId' }
    );
    Course.belongsTo(
      models.Department,
      { foreignKey: 'departmentId' }
    )
  };
  return Course;
};