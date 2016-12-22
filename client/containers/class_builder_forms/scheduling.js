import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const ScheduleForm = ({ handleSubmit }) => (
  <div>
    <h2>Schedule Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="class_name">Class Name</label>
        <Field name="Class Name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

ScheduleForm.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const ScheduleMakerForm = reduxForm({
  form: 'addClassSchedule',
  onSubmit: makeNewClass,
})(ScheduleForm);

export default ScheduleMakerForm;
