const router = require('express').Router();
const teachersClassesController = require('../controllers/teachersClassesController');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('teachersClassesRouter');
    next();
  });
}

router.post('/', teachersClassesController.addTeacherToClass);
router.get('/:class_id', teachersClassesController.getTeacherByClassId);

module.exports = router;
