const router = require('express').Router();

router.post('/', (req, res) => {
  console.log('The request is', req.body);
  res.sendStatus(201);
});

router.get('/', (req, res) => {
  console.log('The request for get request is', req.body);
  res.send();
});

module.exports = router;
