const GradeableObjectModelType = require('../models/gradeableObjectModelType');

const gradeableObjectTypeController = {

  newGradeableObjectType({ body: gradeableobjectTypeData }, res) {
    GradeableObjectModelType.forge(gradeableobjectTypeData)
      .save()
      .then((gradeableobjectstype) => {
        console.log('New module', JSON.stringify(gradeableobjectstype));
        res.json(gradeableobjectstype);
      })
      .catch((err) => {
        console.log(`gradeableObjectTypeController.newGradeableObject - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getAll(req, res) {
    GradeableObjectModelType.fetchAll({
      withRelated: ['gradeableobjects'],
    })
    .then(gradeableobjectstypes => res.json(gradeableobjectstypes))
    .catch((err) => {
      console.log(`gradeableObjectTypeController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

};

module.exports = gradeableObjectTypeController;
