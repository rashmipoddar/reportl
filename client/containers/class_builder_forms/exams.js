import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const ExamsForm = ({ handleSubmit }) => (
  <div>
    <h2>Exams Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="exam_name">Exam Name</label>
        <Field name="Class Name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="scale">Scale</label>
        <Field name="Grade Scale" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="weight">Weight</label>
        <Field name="Grade Weight" component="input" type="number" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

ExamsForm.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const ExamMakerForm = reduxForm({
  form: 'addClassAsset',
  onSubmit: makeNewClass,
})(ExamsForm);

export default ExamMakerForm;
