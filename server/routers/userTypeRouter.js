const router = require('express').Router();
const userTypeController = require('../controllers/userTypeController');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('userTypeRouter');
    next();
  });
}

router.get('/', userTypeController.getAll);
router.get('/:type', userTypeController.getByType);
router.get('/:id', userTypeController.getTypeById);
router.post('/', userTypeController.newType);

module.exports = router;
