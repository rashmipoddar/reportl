const router = require('express').Router();
const userController = require('../controllers/userController');

router.all('*', (req, res, next) => {
  console.log('userRouter');
  next();
});

module.exports = router;
