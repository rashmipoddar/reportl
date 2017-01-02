const router = require('express').Router();
const courseController = require('../controllers/courseController');

// router.get('/:id', courseController.getCourseById);
router.get('/:id', courseController.getAllClass);
router.post('/', courseController.newCourse);

module.exports = router;
