const router = require('express').Router();
const userController = require('../controllers/userController');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('userRouter');
    next();
  });
}

router.get('/', userController.getAll);
router.get('/:id', userController.getUserById);
router.post('/', userController.newUser);

module.exports = router;
