import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewModule } from '../../actions/index';

const ModuleForm = ({ handleSubmit }) => (
  <div>
    <h2>Module Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Class Id">Input ClassId</label>
        <Field name="class_id" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="Module Name">Module Name</label>
        <Field name="module_name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="Percent of Grade">Percent of Class Grade</label>
        <Field name="percent_of_class_grade" component="input" type="number" />
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
  handleSubmit: React.PropTypes.func,
};

const ModuleMakerForm = reduxForm({
  form: 'addClassModule',
  onSubmit: makeNewModule,
})(ModuleForm);

export default ModuleMakerForm;
