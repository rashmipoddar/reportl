import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTeachers } from '../actions/index';
import { getAllStudents } from '../actions/index';
import { deleteUser } from '../actions/index';

class RenderUsers extends Component {
  componentWillMount() {
    this.props.getAllTeachers();
    this.props.getAllStudents();
  }

  renderTeachers() {
    console.log('props: allTeachers: ',this.props.allTeachers)
    return this.props.allTeachers.map(eachTeacher => (
      <div>
        <li key={eachTeacher.email}>
          <div>Name: {eachTeacher.fullName}</div>
          <div>Email: {eachTeacher.email}</div>
        </li>
        <button onClick={() => deleteUser(eachTeacher.id)} >DELETE</button>
      </div>
    ));
  }

  renderStudents() {
    console.log('props: allStudents: ',this.props.allStudents)
    return this.props.allStudents.map(eachStudent => (
      <div>
        <li key={eachStudent.email}>
          <div>Name: {eachStudent.fullName}</div>
          <div>Email: {eachStudent.email}</div>
        </li>
        <button onClick={() => deleteUser(eachStudent.id)}>DELETE</button>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <ul>
          {this.renderStudents()}
        </ul>
        <h1>Teachers</h1>
        <ul>
          {this.renderTeachers()}
        </ul>
      </div>
    );
  }
}

RenderUsers.propTypes = {
};

function mapStateToProps(state) {
  console.log('state in mapStateToProps: ', state);
  return { allTeachers: state.allTeachers,
           allStudents: state.allStudents };
}

export default connect(mapStateToProps, { getAllTeachers, getAllStudents })(RenderUsers);
