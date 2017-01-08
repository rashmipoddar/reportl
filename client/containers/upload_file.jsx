import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { uploadProfilePhoto } from '../actions/index';

const UploadFile = ({ handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="uploadedFile" component="input" type="file" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

UploadFile.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const UploadFileMaker = reduxForm({
  form: 'profile',
  onSubmit: uploadProfilePhoto,
})(UploadFile);

export default UploadFileMaker;
