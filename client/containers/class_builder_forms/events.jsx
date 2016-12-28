import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const EventsForm = ({ handleSubmit }) => (
  <div>
    <h2>Events Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Class Id">Input ClassId</label>
        <Field name="id" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="event_name">Event Name</label>
        <Field name="Event Name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="description">Class Description</label>
        <Field name="Class Description" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="start_date">Start Date</label>
        <Field name="Start Date" component="input" type="date" />
      </div>
      <div>
        <label htmlFor="end_date">End Date</label>
        <Field name="End Date" component="input" type="date" />
      </div>
      <div>
        <label htmlFor="time">Class Time</label>
        <Field name="Class Time" component="input" type="time" />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <Field name="Location" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

EventsForm.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const EventMakerForm = reduxForm({
  form: 'addEvent',
  onSubmit: makeNewClass,
})(EventsForm);

export default EventMakerForm;
