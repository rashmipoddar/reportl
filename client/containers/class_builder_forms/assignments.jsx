import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const AssignmentsForm = ({ handleSubmit }) => (
  <div>
    <h2>Assignments Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Class Id">Input ClassId</label>
        <Field name="id" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="assignment_name">Assignment Name</label>
        <Field name="Assignment Name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="assignment_type">Assignment Type</label>
        <Field name="Assignment Type" component="input" type="text" />
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

AssignmentsForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const AssignmentsMakerForm = reduxForm({
  form: 'addClassAsset',
  onSubmit: makeNewClass,
})(AssignmentsForm);

export default AssignmentsMakerForm;
