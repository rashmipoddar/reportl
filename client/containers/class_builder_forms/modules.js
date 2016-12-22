import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const ModuleForm = ({ handleSubmit }) => (
  <div>
    <h2>Module Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Class Id">Input ClassId</label>
        <Field name="id" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="module">Module Name</label>
        <Field name="Module Name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="module_description">Module Description</label>
        <Field name="Module Description" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="tags">Tags</label>
        <Field name="Tags" component="input" type="text" />
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
