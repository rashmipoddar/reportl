import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const AnnouncementsForm = ({ handleSubmit }) => (
  <div>
    <h2>Announcements Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="class_name">Class Name</label>
        <Field name="Class Name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

AnnouncementsForm.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const AnnouncementsMakerForm = reduxForm({
  form: 'addClassAsset',
  onSubmit: makeNewClass,
})(AnnouncementsForm);

export default AnnouncementsMakerForm;
