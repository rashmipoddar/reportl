const User = require('../models/userModel');

const userController = {
  getUserById({ params: { id } }, res) {
  getAll(req, res) {
    User.fetchAll()
    .then(users => res.json(users))
    .catch((err) => {
      console.log(`userController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

    User.forge({ id })
      .fetch()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(`userController.getUserById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  newUser({ body: userData }, res) {
    User.forge(userData)
      .save()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(`userController.newUser - Error: ${err}`);
        res.sendStatus(500);
      });
  },
};

module.exports = userController;
