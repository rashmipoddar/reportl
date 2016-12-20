import React, { Component } from 'react';
import LoginField from '../containers/login-field';
import UserForm from '../containers/addUser';
import ClassMaker from '../containers/class-maker';

export default class App extends Component {

  render() {
    return (
      <div>
        <h2>Login</h2>
        <LoginField />
        <h2>Create User</h2>
        <UserForm />
        <h2>Create Class</h2>
        <ClassMaker />
      </div>
    );
  }
}
