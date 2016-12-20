const router = require('express').Router();
const teacherController = require('../controllers/teacherController');

router.get('/:id', teacherController.getTeacherById);
router.post('/', teacherController.newTeacher);

module.exports = router;
