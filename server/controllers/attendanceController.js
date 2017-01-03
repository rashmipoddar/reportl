const Attendance = require('../models/attendanceModel');

const attendanceController = {
  getByMeetingId({ params: { id } }, res) {
    Attendance.forge({ id })
      .fetch()
      .then((attendance) => {
        console.log(JSON.stringify(attendance));
        res.json(attendance);
      })
      .catch((err) => {
        console.log(`classController.getClassById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  // getAll(req, res) {
  //   Attendance.fetchAll({
  //     withRelated: ['course', 'modules', 'users'],
  //   })
  //   .then(classes => res.json(classes))
  //   .catch((err) => {
  //     console.log(`classController.getAll - Error: ${err}`);
  //     res.sendStatus(500);
  //   });
  // },

};

module.exports = attendanceController;
