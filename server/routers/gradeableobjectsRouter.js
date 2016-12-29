const router = require('express').Router();
const gradeableobjectsController = require('../controllers/gradeableobjectsController');

router.get('/', gradeableobjectsController.getAll);
router.put('/:id', gradeableobjectsController.changeGradeableObject);
router.post('/', gradeableobjectsController.newGradeableObject);

module.exports = router;
