const router = require('express').Router();
const userController = require('../controllers/userController');

router.all('*', (req, res, next) => {
  console.log('userRouter');
  next();
});

router.get('/:id', userController.getUserById);
router.post('/', userController.newUser);

module.exports = router;
