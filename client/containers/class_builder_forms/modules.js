import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const ModuleForm = ({ handleSubmit }) => (
  <div>
    <h2>Module Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="class_name">Class Name</label>
        <Field name="Class Name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

ModuleForm.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const ModuleMakerForm = reduxForm({
  form: 'addClassModule',
  onSubmit: makeNewClass,
})(ModuleForm);

export default ModuleMakerForm;
