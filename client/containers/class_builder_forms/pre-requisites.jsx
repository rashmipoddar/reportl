import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const PreRequisitesForm = ({ handleSubmit }) => (
  <div>
    <h2>PreRequisites Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Class Id">Input ClassId</label>
        <Field name="id" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="pre_requisites">PreRequisites</label>
        <Field name="PreRequisites" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

PreRequisitesForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const PreRequisitesMakerForm = reduxForm({
  form: 'addClassModule',
  onSubmit: makeNewClass,
})(PreRequisitesForm);

export default PreRequisitesMakerForm;
