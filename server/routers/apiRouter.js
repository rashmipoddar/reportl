const router = require('express').Router();
const userRouter = require('./userRouter');

router.all('*', (req, res, next) => {
  console.log('apiRouter');
  next();
});

router.use('/users', (req, res, next) => {
  console.log('apiRouter -> userRouter');
  next();
}, userRouter);

module.exports = router;
