import React, { Component } from 'react';
import LoginField from '../containers/login-field';
import UserForm from '../containers/addUser';
import ClassMaker from '../containers/class-maker';

export default class App extends Component {

  render() {
    return (
      <div>
        <LoginField />
        <h1>Create a New User:</h1>
        <UserForm />
        <ClassMaker />
        <LoginField />
      </div>
    );
  }
}
