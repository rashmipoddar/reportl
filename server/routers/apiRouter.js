const router = require('express').Router();
const userRouter = require('./userRouter');
const userTypeRouter = require('./userTypeRouter');
const classRouter = require('./classRouter');
const courseRouter = require('./courseRouter');
const departmentRouter = require('./departmentRouter');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('apiRouter');
    next();
  });
}

router.use('/users', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> userRouter');
  }
  next();
}, userRouter);

router.use('/usertypes', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> userTypeRouter');
  }
  next();
}, userTypeRouter);

router.use('/departments', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> departmentRouter');
  }
  next();
}, departmentRouter);

router.use('/classes', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> classRouter');
  }
  next();
}, classRouter);

router.use('/courses', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> courseRouter');
  }
  next();
}, courseRouter);

module.exports = router;
