const { Person, Course } = require('../models');

async function lookupPersonAndCourses(personId) {
  // Find person and associated courses by `personId`
  return await Person.findByPk(personId, {
    include: 'Courses'
  });
};

async function lookupPersonByLastName(lastName) {
  // Find people by `lastName`
  return await Person.findAll({
    where: {
      lastName
    }
  });
};

async function lookupCoursesByPersonEmail(email) {
  // Find person by `email` and return associated courses
  const peCo = await Person.findOne({
    where: {
      email: email,
    },
    include: 'Courses'
  });
  return peCo.Courses;
};

module.exports = {
  lookupPersonAndCourses,
  lookupPersonByLastName,
  lookupCoursesByPersonEmail,
};
