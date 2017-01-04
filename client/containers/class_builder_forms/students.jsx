import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addStudentsToClass } from '../../actions/index';

const StudentForm = ({ handleSubmit, classId }) => (
  <div>
    <h2>Student Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="student_id">Student ID</label>
        <Field name="student_id" component="input" type="text" />
      </div>
      <div>
        <p>Class id: {classId}</p>
        <label htmlFor="class_id">Class Id</label>
        <Field name="class_id" component="input" type="text" value={this.props.classId} />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

StudentForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  classId: React.PropTypes.string,
};

const StudentMakerForm = reduxForm({
  form: 'addStudents',
})(StudentForm);

export default connect(state => ({
  classId: state.classId,
}), {
  onSubmit: addStudentsToClass,
})(StudentMakerForm);
