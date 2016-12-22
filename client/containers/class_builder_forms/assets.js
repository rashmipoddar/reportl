import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const AssetForm = ({ handleSubmit }) => (
  <div>
    <h2>Asset Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="class_name">Class Name</label>
        <Field name="Class Name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

AssetForm.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const AssetMakerForm = reduxForm({
  form: 'addClassAsset',
  onSubmit: makeNewClass,
})(AssetForm);

export default AssetMakerForm;
