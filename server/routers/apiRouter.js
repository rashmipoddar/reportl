const router = require('express').Router();
const userRouter = require('./userRouter');
const userTypeRouter = require('./userTypeRouter');
const classRouter = require('./classRouter');
const courseRouter = require('./courseRouter');
const departmentRouter = require('./departmentRouter');
const fileRouter = require('./fileRouter');
const moduleRouter = require('./moduleRouter');

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

<<<<<<< HEAD
router.use('/files', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> fileRouter');
  }
  next();
}, fileRouter);
=======
router.use('/modules', (req, res, next) => {
  console.log('apiRouter -> moduleRouter');
  next();
}, moduleRouter);
>>>>>>> feat(Added Modules and gradeable objects): Add Modules and gradeable objects

module.exports = router;
