import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ClassRoomBuilder from './classroombuilder';
import UserForm from './addUser.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>Classroom Builder</h1>
        <ClassRoomBuilder />
        <h1>User Form</h1>
        <UserForm />
      </div>
    );
  }
}
