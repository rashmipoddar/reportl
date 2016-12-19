import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ClassRoomBuilder from './classroombuilder';

export default class App extends Component {

  render() {
   return (
     <div>
     <h1>Hello World</h1>
     <ClassRoomBuilder />
     </div>
   );
  }
}
