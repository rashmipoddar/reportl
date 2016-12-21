const Student = require('../models/studentModel');

const studentController = {
  getStudentById({ params: { id } }, res) {
    Student.forge({ id })
      .fetch({
        withRelated: ['user'],
      })
      .then((student) => {
        //console.log(student.related('user').toJSON());
        //console.log(student.toJSON());
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
