const Student = require('../models/studentModel');

const studentController = {
  getStudentById({ params: { user_id } }, res) {
    Student.forge({ user_id })
      .fetch({
        withRelated: ['user'],
      })
      .then((student) => {
        console.log(JSON.stringify(student));
        res.json(student);
      })
      .catch((err) => {
        console.log(`studentController.getStudentById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  newStudent({ body: studentData }, res) {
    Student.forge(studentData)
    .save()
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      console.log(`studentController.newStudent - Error: ${err}`);
      res.sendStatus(500);
    });
  },
};

module.exports = studentController;
