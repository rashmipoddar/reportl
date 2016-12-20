const router = require('express').Router();
const userRouter = require('./userRouter');
const studentRouter = require('./studentRouter');
const teacherRouter = require('./teacherRouter');

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

router.use('/teachers', (req, res, next) => {
  console.log('apiRouter -> teacherRouter');
  next();
}, teacherRouter);


module.exports = router;
