import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const AssignmentsForm = ({ handleSubmit }) => (
  <div>
    <h2>Assignments Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="class_name">Class Name</label>
        <Field name="Class Name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

AssignmentsForm.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const AssignmentsMakerForm = reduxForm({
  form: 'addClassAsset',
  onSubmit: makeNewClass,
})(AssignmentsForm);

export default AssignmentsMakerForm;
