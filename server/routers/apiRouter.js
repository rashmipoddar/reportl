const router = require('express').Router();
const userRouter = require('./userRouter');
const studentRouter = require('./studentRouter');

router.all('*', (req, res, next) => {
  console.log('apiRouter');
  next();
});

router.use('/users', (req, res, next) => {
  console.log('apiRouter -> userRouter');
  next();
}, userRouter);
router.use('/students', (req, res, next) => {
  console.log('apiRouter -> studentRouter');
  next();
}, studentRouter);

module.exports = router;
