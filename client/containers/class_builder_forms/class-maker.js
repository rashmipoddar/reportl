import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const ClassMaker = ({ handleSubmit }) => (
  <div>
    <h2>Create Class</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="class_name">Class Name</label>
        <Field name="Class Name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="teacher_id">Teacher ID</label>
        <Field name="Teacher ID" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="description">Class Description</label>
        <Field name="Class Description" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="size">Class Size</label>
        <Field name="Class Size" component="input" type="number" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

ClassMaker.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const ClassMakerForm = reduxForm({
  form: 'addClass',
  onSubmit: makeNewClass,
})(ClassMaker);

export default ClassMakerForm;
