const Module = require('../models/moduleModel');

const moduleController = {

  addClassModule({ body: moduleData }, res) {
  // console.log('req.body', req.body);
  // console.log('req.body.data', req.body.data);
    console.log('moduleData', moduleData);
    Module.forge(moduleData)
      .save()
      .then((moduleInfo) => {
        console.log('New module', JSON.stringify(moduleInfo));
        res.json(moduleInfo);
      })
      .catch((err) => {
        console.log(`moduleController.addClassModule - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getAll(req, res) {
    Module.fetchAll({ withRelated: ['classes', 'gradeableobjects'] })
    .then(modules => res.json(modules))
    .catch((err) => {
      console.log(`moduleController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },
  changeModule(req, res) {
    Module.forge({ id: req.params.id }, res)
    .fetch()
    .then(updatedModule =>
      updatedModule.save({
        moduleName: req.body.moduleName,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        percentOfClassGrade: req.body.ofGrade,
        classId: req.body.classId,
        gradeableobjects: req.body.gradeableobjects,
      })
    )
    .then((updatedModuleInfo) => {
      console.log('New module', JSON.stringify(updatedModuleInfo));
      return res.json(updatedModuleInfo);
    })
    .catch((err) => {
      console.log(`moduleController.changeModule - Error: ${err}`);
      res.sendStatus(500);
    })
    .catch((err) => {
      console.log(`moduleController.changeModule - Error: ${err}`);
      res.sendStatus(500);
    });
  },

};

module.exports = moduleController;
