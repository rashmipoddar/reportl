const router = require('express').Router();
const userRouter = require('./userRouter');
const userTypeRouter = require('./userTypeRouter');
const studentRouter = require('./studentRouter');
const teacherRouter = require('./teacherRouter');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('apiRouter');
    next();
  });
}

router.use('/users', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> userRouter');
    next();
  }
}, userRouter);

router.use('/usertypes', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> userTypeRouter');
    next();
  }
}, userTypeRouter);

router.use('/students', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> studentRouter');
    next();
  }
}, studentRouter);

router.use('/teachers', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> teacherRouter');
    next();
  }
}, teacherRouter);

module.exports = router;
