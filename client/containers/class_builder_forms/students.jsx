import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addStudentsToClass } from '../../actions/index';

const StudentForm = ({ handleSubmit }) => (
  <div>
    <h2>Student Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="student_name">Student Name</label>
        <Field name="Student Name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

StudentForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const StudentMakerForm = reduxForm({
  form: 'addStudents',
})(StudentForm);

export default connect(state => ({
  classId: state.classId,
}), {
  onSubmit: addStudentsToClass,
})(StudentMakerForm);
