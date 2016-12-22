const UserType = require('../models/userTypeModel');

const userTypeController = {
  getAll(req, res) {
    UserType.fetchAll()
    .then(types => res.json(types))
    .catch((err) => {
      console.log(`userTypeController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

  getByType({ params: { type: name }, baseUrl, originalUrl }, res, next) {
    if (isNaN(name)) {
      UserType.forge({ name })
        .fetch({
          withRelated: [
            'users',
          ],
        })
        .then((type) => {
          if (type) {
            res.json(type);
          } else {
            res.status(404).json({
              error: {
                message: 'Not Found',
              },
              request: {
                endpoint: baseUrl,
                url: originalUrl,
                parameters: {
                  name,
                },
              },
            });
          }
        })
        .catch((err) => {
          console.log(`userController.getByType - Error: ${err}`);
          res.sendStatus(500);
        });
    } else {
      next();
    }
  },

  getTypeById({ params: { id }, baseUrl, originalUrl }, res) {
    UserType.forge({ id })
      .fetch()
      .then((type) => {
        if (type) {
          res.json(type);
        } else {
          res.status(404).json({
            error: {
              message: 'Not Found',
            },
            request: {
              endpoint: baseUrl,
              url: originalUrl,
              parameters: {
                id,
              },
            },
          });
        }
      })
      .catch((err) => {
        console.log(`userTypeController.getTypeById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  newType({ body: typeData, baseUrl, originalUrl }, res) {
    UserType.forge(typeData)
      .save()
      .then((type) => {
        res.json(type);
      })
      .catch((err) => {
        console.log(`userTypeController.newType - Error: ${err}`);
        res.status(404).json({
          error: {
            message: 'Cannot create type',
          },
          request: {
            endpoint: baseUrl,
            url: originalUrl,
            content: typeData,
          },
        });
      });
  },
};

module.exports = userTypeController;
