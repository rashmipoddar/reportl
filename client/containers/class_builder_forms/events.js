import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const EventsForm = ({ handleSubmit }) => (
  <div>
    <h2>Events Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="class_name">Class Name</label>
        <Field name="Class Name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

EventsForm.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const EventMakerForm = reduxForm({
  form: 'addClassAsset',
  onSubmit: makeNewClass,
})(EventsForm);

export default EventMakerForm;
