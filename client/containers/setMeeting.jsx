import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getAllAttendees } from '../actions/index';

const MeetingForm = ({ handleSubmit }) => (
  <div>
    <h2>Select a Meeting</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="meeting">Id:</label>
        <Field name="meeting" component="input" type="number" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

MeetingForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const MeetingFormMaker = reduxForm({
  form: 'setMeeting',
})(MeetingForm);

export default connect(() => ({}), { onSubmit: getAllAttendees })(MeetingFormMaker);
