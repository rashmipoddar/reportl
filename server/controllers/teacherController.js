const Teacher = require('../models/teacherModel');

const teacherController = {
  getTeacherById({ params: { id } }, res) {
    Teacher.forge({ id })
      .fetch({
        withRelated: ['user'],
      })
      .then((teacher) => {
        console.log(JSON.stringify(teacher));
        res.json(teacher);
      })
      .catch((err) => {
        console.log(`teacherController.getTeacherById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  newTeacher({ body: TeacherData }, res) {
    Teacher.forge(TeacherData)
      .save()
      .then((teacher) => {
        res.json(teacher);
      })
      .catch((err) => {
        console.log(`teacherController.newTeacher - Error: ${err}`);
        res.sendStatus(500);
      });
  },
};

module.exports = teacherController;
