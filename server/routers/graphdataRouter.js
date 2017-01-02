const router = require('express').Router();
const graphDataContoller = require('../controllers/graphDataContoller');

router.post('/:id', graphDataContoller.addData);
router.get('/', graphDataContoller.getAll);

module.exports = router;
