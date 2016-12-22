const router = require('express').Router();
const classController = require('../controllers/classController');

router.get('/', classController.getAllClass);
router.get('/:id', classController.getClassById);
router.post('/', classController.newClass);

module.exports = router;
