const router = require('express').Router();
const studentsClassesController = require('../controllers/studentsClassesController');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('moduleRouter');
    next();
  });
}

router.post('/', studentsClassesController.addStudentToClass);

module.exports = router;
