const router = require('express').Router();
const userRouter = require('./userRouter');

router.all('*', (req, res, next) => {
  console.log('apiRouter');
  next();
});

module.exports = router;
