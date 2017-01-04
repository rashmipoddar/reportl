import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

const ScheduleForm = ({ handleSubmit }) => (
  <div>
    <h2>Schedule Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Class Id">Input ClassId</label>
        <Field name="id" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="start_time">Class Start Time</label>
        <Field name="Class Start Time" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="end_time">Class End Time</label>
        <Field name="Class End Time" component="input" type="number" />
      </div>
      <div>
        {weekdays.map(day =>
          <div>
            <label htmlFor={day}>{day}</label>
            <Field name={day} component="input" type="checkbox" value="true" />
          </div>)}
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <Field name="Location" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

ScheduleForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const ScheduleMakerForm = reduxForm({
  form: 'addClassSchedule',
  onSubmit: makeNewClass,
})(ScheduleForm);

export default ScheduleMakerForm;
