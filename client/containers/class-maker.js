import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeNewClass } from '../actions/index';

class ClassMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class_name: '',
      start_date: '',
      end_date: '',
      time: '',
      size: '',
      pre_requisite: '',
      pre_requisites: [],
      class_description: '',
      student: '',
      students: [],
      module: '',
      modules: [],
      lesson: '',
      lessons: [],
      asset: '',
      assets: [],
      assignment: '',
      assignments: [],
      exam: '',
      exams: [],
      grade: '',
      grades: [],
      announcement: '',
      announcements: [],
      class_event: '',
      class_events: [],
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.onInputChangeClass = this.onInputChangeClass.bind(this);
    this.onInputChangeStartDate = this.onInputChangeStartDate.bind(this);
    this.onInputChangeEndDate = this.onInputChangeEndDate.bind(this);
    this.onInputChangeTime = this.onInputChangeTime.bind(this);
    this.onInputChangeSize = this.onInputChangeSize.bind(this);
    this.onInputChangePreRequisites = this.onInputChangePreRequisites.bind(this);
    this.onInputChangeDescription = this.onInputChangeDescription.bind(this);
    this.onInputChangeStudents = this.onInputChangeStudents.bind(this);
    this.onInputChangeModules = this.onInputChangeModules.bind(this);
    this.onInputChangeLessons = this.onInputChangeLessons.bind(this);
    this.onInputChangeAssets = this.onInputChangeAssets.bind(this);
    this.onInputChangeAssignments = this.onInputChangeAssignments.bind(this);
    this.onInputChangeExams = this.onInputChangeExams.bind(this);
    this.onInputChangeGrades = this.onInputChangeGrades.bind(this);
    this.onInputChangeAnnouncements = this.onInputChangeAnnouncements.bind(this);
    this.onInputChangeClassEvents = this.onInputChangeClassEvents.bind(this);

    this.onPreRequisiteSubmit = this.onPreRequisiteSubmit.bind(this);
    this.onStudentSubmit = this.onStudentSubmit.bind(this);
    this.onModuleSubmit = this.onModuleSubmit.bind(this);
    this.onLessonSubmit = this.onModuleSubmit.bind(this);
    this.onAssetSubmit = this.onModuleSubmit.bind(this);
    this.onAssignmentSubmit = this.onModuleSubmit.bind(this);
    this.onExamSubmit = this.onModuleSubmit.bind(this);
    this.onGradeSubmit = this.onModuleSubmit.bind(this);
    this.onAnnouncementSubmit = this.onModuleSubmit.bind(this);
    this.onClassEventSubmit = this.onModuleSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.makeNewClass(JSON.stringify(this.state));
    this.setState({
      class_name: '',
      start_date: '',
      end_date: '',
      time: '',
      size: '',
      pre_requisite: '',
      pre_requisites: [],
      class_description: '',
      student: '',
      students: [],
      module: '',
      modules: [],
      lesson: '',
      lessons: [],
      asset: '',
      assets: [],
      assignment: '',
      assignments: [],
      exam: '',
      exams: [],
      grade: '',
      grades: [],
      announcement: '',
      announcements: [],
      class_event: '',
      class_events: [],
    });
  }

  onInputChangeClass(event) {
    this.setState({ class_name: event.target.value });
  }

  onInputChangeStartDate(event) {
    this.setState({ start_date: event.target.value });
  }

  onInputChangeEndDate(event) {
    this.setState({ end_date: event.target.value });
  }

  onInputChangeTime(event) {
    this.setState({ time: event.target.value });
  }

  onInputChangeSize(event) {
    this.setState({ size: event.target.value });
  }

  onInputChangePreRequisites(event) {
    this.setState({ pre_requisite: event.target.value });
  }

  onInputChangeDescription(event) {
    this.setState({ class_description: event.target.value });
  }

  onInputChangeStudents(event) {
    this.setState({ student: event.target.value });
  }

  onInputChangeModules(event) {
    this.setState({ module: event.target.value });
  }

  onInputChangeLessons(event) {
    this.setState({ lesson: event.target.value });
  }

  onInputChangeAssets(event) {
    this.setState({ asset: event.target.value });
  }

  onInputChangeExams(event) {
    this.setState({ exam: event.target.value });
  }

  onInputChangeAssignments(event) {
    this.setState({ assignment: event.target.value });
  }

  onInputChangeGrades(event) {
    this.setState({ grade: event.target.value });
  }

  onInputChangeAnnouncements(event) {
    this.setState({ announcement: event.target.value });
  }

  onInputChangeClassEvents(event) {
    this.setState({ class_event: event.target.value });
  }

  onPreRequisiteSubmit(event) {
    const newPreReq = this.state.pre_requisites.slice();
    newPreReq.push(event.target.value);
    this.setState({ pre_requisites: newPreReq, pre_requisite: '' });
  }

  onStudentSubmit(event) {
    const newStudents = this.state.students.slice();
    newStudents.push(event.target.value);
    this.setState({ students: newStudents, student: '' });
  }

  onModuleSubmit(event) {
    const newModules = this.state.modules.slice();
    newModules.push(event.target.value);
    this.setState({ modules: newModules, module: '' });
  }

  onLessonSubmit(event) {
    const newLessons = this.state.lessons.slice();
    newLessons.push(event.target.value);
    this.setState({ lessons: newLessons, lesson: '' });
  }

  onAssetSubmit(event) {
    const newAssets = this.state.assets.slice();
    newAssets.push(event.target.value);
    this.setState({ assets: newAssets, asset: '' });
  }

  onAssignmentSubmit(event) {
    const newAssignments = this.state.assignments.slice();
    newAssignments.push(event.target.value);
    this.setState({ assignments: newAssignments, assignment: '' });
  }

  onExamSubmit(event) {
    const newExams = this.state.exams.slice();
    newExams.push(event.target.value);
    this.setState({ exams: newExams, exam: '' });
  }

  onGradeSubmit(event) {
    const newGrades = this.state.grades.slice();
    newGrades.push(event.target.value);
    this.setState({ grades: newGrades, grade: '' });
  }

  onAnnouncementSubmit(event) {
    const newAnnouncements = this.state.announcements.slice();
    newAnnouncements.push(event.target.value);
    this.setState({ announcements: newAnnouncements, announcement: '' });
  }

  onClassEventSubmit(event) {
    const newClassEvents = this.state.class_events.slice();
    newClassEvents.push(event.target.value);
    this.setState({ class_events: newClassEvents, class_event: '' });
  }

  renderClassBuilder() {
    return this.props.classes.map(singleclass =>
      <li>Class info: {singleclass}</li>
  );
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderClassBuilder()}
        </ul>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Class Name"
            value={this.state.class_name}
            onChange={this.onInputChangeClass}
          />
          <br />
          <input
            placeholder="Start Date"
            value={this.state.start_date}
            onChange={this.onInputChangeStartDate}
          /><br />
          <input
            placeholder="End Date"
            value={this.state.end_date}
            onChange={this.onInputChangeEndDate}
          /><br />
          <input
            placeholder="Time"
            value={this.state.time}
            onChange={this.onInputChangeTime}
          /><br />
          <input
            placeholder="Class Size"
            value={this.state.size}
            onChange={this.onInputChangeSize}
          /><br />
          <input
            placeholder="Pre-Requisites"
            value={this.state.pre_requisite}
            onChange={this.onInputChangePreRequisites}
          /><button onClick={this.onPreRequisiteSubmit}>Add Pre-Requisites</button><br />
          <input
            placeholder="Description"
            value={this.state.description}
            onChange={this.onInputChangeDescription}
          /><br />
          <input
            placeholder="Students"
            value={this.state.student}
            onChange={this.onInputChangeStudents}
          /><button onClick={this.onStudentSubmit}>Add Student</button><br />
          <input
            placeholder="Modules"
            value={this.state.module}
            onChange={this.onInputChangeModules}
          /><button onClick={this.onModuleSubmit}>Add Module</button><br />
          <input
            placeholder="Lessons"
            value={this.state.lesson}
            onChange={this.onInputChangeLessons}
          /><button onClick={this.onLessonSubmit}>Add Lesson</button><br />
          <input
            placeholder="Announcements"
            value={this.state.announcement}
            onChange={this.onInputChangeAnnouncements}
          /><button onClick={this.onAnnouncementSubmit}>Add Announcement</button><br />
          <input
            placeholder="Events"
            value={this.state.event}
            onChange={this.onInputChangeEvents}
          /><button onClick={this.onClassEventSubmit}>Add Class Events</button><br />
          <button type="submit">Add Class</button>
        </form>
      </div>
    );
  }
}

ClassMaker.propTypes = {
  makeNewClass: React.PropTypes.function,
  classes: React.PropTypes.function,
};

function mapStateToProps(state) {
  return {
    classes: state.classes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeNewClass }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassMaker);
