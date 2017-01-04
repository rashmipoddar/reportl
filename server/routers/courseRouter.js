const router = require('express').Router();
const courseController = require('../controllers/courseController');

// router.get('/:id', courseController.getCourseById);
router.get('/:id', courseController.getAllClass);
router.get('/', courseController.getAllCourses);
router.post('/', courseController.newCourse);

module.exports = router;
