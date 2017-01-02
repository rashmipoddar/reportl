const router = require('express').Router();
const gradeableobjectsTypeController = require('../controllers/gradeableobjectsTypeController');

router.get('/', gradeableobjectsTypeController.getAll);
router.post('/', gradeableobjectsTypeController.newGradeableObjectType);

module.exports = router;
