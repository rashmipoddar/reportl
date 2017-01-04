import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createCourse } from '../actions/index';

const CourseForm = ({ handleSubmit }) => (
  <div>
    <h2>Create Course</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <Field name="description" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="department_id">Department Id</label>
        <Field name="department_id" component="input" type="number" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

CourseForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const CourseFormMaker = reduxForm({
  form: 'addCourse',
  onSubmit: createCourse,
})(CourseForm);

export default CourseFormMaker;
