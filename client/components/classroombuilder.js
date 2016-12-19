import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class ClassRoomBuilder extends Component {
  constructor(props) {
  super(props);

  this.state = {
    class_name: '',
    start_date: '',
    end_date: '',
    time: '',
    size: '',
    pre_requisites: '',
    class_description: '',
    students: [],
    modules: [],
    lessons: [],
    assets: [],
    assignments: [],
    exams: [],
    grades: [],
    announcements: [],
    events: []
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
  this.onInputChangeEvents = this.onInputChangeEvents.bind(this);
}

onFormSubmit(event) {
  event.preventDefault();
  console.log("event.target.value, event", event);
}

onInputChangeClass(event) {
  this.setState({class_name: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeStartDate(event) {
  this.setState({start_date: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeEndDate(event) {
  this.setState({end_date: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeTime(event) {
  this.setState({time: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeSize(event) {
  this.setState({size: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangePreRequisites(event) {
  this.setState({pre_requisites: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeDescription(event) {
  this.setState({class_description: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeStudents(event) {
  this.setState({students: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeModules(event) {
  this.setState({modules: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeLessons(event) {
  this.setState({lessons: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeAssets(event) {
  this.setState({assets: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}


onInputChangeAssignments(event) {
  this.setState({assignments: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeExams(event) {
  this.setState({exams: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeGrades(event) {
  this.setState({grades: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeAnnouncements(event) {
  this.setState({announcements: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}

onInputChangeEvents(event) {
  this.setState({events: event.target.value})
  console.log("event.target.value, event", event.target.value, event);
}


  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
      <input
        placeholder='Class Name'
        value={this.state.class_name}
        onChange={this.onInputChangeClass}
      /><br></br>
      <input
        placeholder='Start Date:'
        value={this.state.start_date}
        onChange={this.onInputChangeStartDate}
      /><br></br>
      <input
        placeholder='End Date:'
        value={this.state.end_date}
        onChange={this.onInputChangeEndDate}
      /><br></br>
      <input
        placeholder='Time:'
        value={this.state.time}
        onChange={this.onInputChangeTime}
      /><br></br>
      <input
        placeholder='Class Size:'
        value={this.state.size}
        onChange={this.onInputChangeSize}
      /><br></br>
      <input
        placeholder='Pre-Requisites:'
        value={this.state.pre_requisites}
        onChange={this.onInputChangePreRequisites}
      /><br></br>
      <input
        placeholder='Description:'
        value={this.state.description}
        onChange={this.onInputChangeDescription}
      /><br></br>
      <input
        placeholder='Students:'
        value={this.state.students}
        onChange={this.onInputChangeStudents}
      /><br></br>
      <input
        placeholder='Modules:'
        value={this.state.modules}
        onChange={this.onInputChangeModules}
      /><br></br>
      <input
        placeholder='Lessons:'
        value={this.state.lessons}
        onChange={this.onInputChangeLessons}
      /><br></br>
      <input
        placeholder='Assets:'
        value={this.state.assets}
        onChange={this.onInputChangeAssets}
      /><br></br>
      <input
        placeholder='Assignments:'
        value={this.state.assignments}
        onChange={this.onInputChangeAssignments}
      /><br></br>
      <input
        placeholder='Exams:'
        value={this.state.exams}
        onChange={this.onInputChangeExams}
      /><br></br>
      <input
        placeholder='Grades:'
        value={this.state.grades}
        onChange={this.onInputChangeGrades}
      /><br></br>
      <input
        placeholder='Announcements:'
        value={this.state.announcements}
        onChange={this.onInputChangeAnnouncements}
      /><br></br>
      <input
        placeholder='Events:'
        value={this.state.events}
        onChange={this.onInputChangeEvents}
      /><br></br>
      <button type="submit">Add Class</button>
      </form>
    );
  }
}


//<form onSubmit={this.onFormSubmit} className="input-group">
      // <input
      //   placeholder='Get a five day forecast'
      //   className="form-control"
      //   value={this.state.term}
      //   onChange={this.onInputChange}
      //   />
      // <span className="input-group-btn">
      //   <button type="submit" className="btn btn-secondary">Submit</button>
      // </span>
      // </form>
