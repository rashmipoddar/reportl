const Department = require('../models/departmentModel');
const UserType = require('../models/userTypeModel');

const departmentController = {
  getUsers({ params: { name }, baseUrl, originalUrl }, res) {
    Department.forge({ name })
    .fetch({
      withRelated: [
        'users',
      ],
    })
    .then(department => res.json(department))
    .catch((err) => {
      console.log(`departmentController.getUsers - Error: ${err}`);
      res.status(404).json({
        error: {
          message: 'Cannot find department',
        },
        request: {
          endpoint: baseUrl,
          url: originalUrl,
          parameters: {
            name,
          },
        },
      });
    });
  },

  getUsersByType({ params: { type, name }, baseUrl, originalUrl }, res, next) {
    if (isNaN(name)) {
      UserType.forge({
        name: type,
      }).fetch()
      .then((userType) => {
        if (userType) {
          return Department.forge({ name }).fetch({
            withRelated: [
              {
                users(qb) {
                  return qb.where('users.type_id', userType.get('id'));
                },
              },
            ],
          });
        }

        res.status(404).json({
          error: {
            message: 'Not a valid user type',
          },
          request: {
            endpoint: baseUrl,
            url: originalUrl,
            parameters: {
              type,
              name,
            },
          },
        });

        // FIXME: temp fix to not send twice
        return 'no';
      })
      .then((department) => {
        if (department) {
          if (department !== 'no') {
            res.json(department);
          }
        } else {
          res.status(404).json({
            error: {
              message: 'Not a valid department',
            },
            request: {
              endpoint: baseUrl,
              url: originalUrl,
              parameters: {
                type,
                name,
              },
            },
          });
        }
      });
    } else {
      console.log('test', type, name);
      next();
    }
  },

  getAll(req, res) {
    Department.fetchAll()
    .then(departments => res.json(departments))
    .catch((err) => {
      console.log(`departmentController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

  getDepartmentById({ params: { id }, baseUrl, originalUrl }, res) {
    Department.forge({ id })
      .fetch()
      .then((department) => {
        if (department) {
          res.json(department);
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
        console.log(`departmentController.getDepartmentById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  newDepartment({ body: departmentData, baseUrl, originalUrl }, res) {
    Department.forge(departmentData)
      .save()
      .then((department) => {
        res.json(department);
      })
      .catch((err) => {
        console.log(`departmentController.newDepartment - Error: ${err}`);
        res.status(404).json({
          error: {
            message: 'Cannot create department',
          },
          request: {
            endpoint: baseUrl,
            url: originalUrl,
            content: departmentData,
          },
        });
      });
  },
};

module.exports = departmentController;
