import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../actions/index'; // needs to be written

class ClassMaker extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="class_name">First Name</label>
          <Field name="Class Name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="start_date">Start Date</label>
          <Field name="Start Date" component="input" type="text" />
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
          <label htmlFor="size">Class Size</label>
          <Field name="Class Size" component="input" type="number" />
        </div>
        <div>
          <label htmlFor="pre_requisites">PreRequisites</label>
          <Field name="PreRequisites" component="input" type="search" />
        </div>
        <div>
          <label htmlFor="class_description">Description</label>
          <Field name="Description" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="students">Students</label>
          <Field name="Students" component="input" type="search" />
        </div>
        <div>
          <label htmlFor="modules">Modules</label>
          <Field name="Modules" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="lessons">Lessons</label>
          <Field name="Lessons" component="input" type="test" />
        </div>
        <div>
          <label htmlFor="assets">Assets</label>
          <Field name="Assets" component="input" type="file" />
        </div>
        <div>
          <label htmlFor="assignments">Assignments</label>
          <Field name="Assignments" component="input" type="file" />
        </div>
        <div>
          <label htmlFor="exams">Exams</label>
          <Field name="Exams" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="assignments">Assignments</label>
          <Field name="Assignments" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="grades">Grades</label>
          <Field name="Grades" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="announcements">Announcements</label>
          <Field name="Announcements" component="input" type="file" />
        </div>
        <div>
          <label htmlFor="class_events">Events</label>
          <Field name="Events" component="input" type="datetime" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ClassMaker = reduxForm({
  form: 'addClass',
  onSubmit: makeNewClass,
})(ClassMaker);

export default ClassMaker;
