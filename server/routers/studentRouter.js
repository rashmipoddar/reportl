const router = require('express').Router();
const studentController = require('../controllers/studentController');


// router.post('/', (req, res) => {
//   console.log('The request is', req.body);
//   res.sendStatus(201);
// });

// router.get('/', (req, res) => {
//   console.log('The request for get request is', req.body);
//   res.send();
// });

router.get('/:id', studentController.getStudentById);
router.post('/', studentController.newStudent);

module.exports = router;
