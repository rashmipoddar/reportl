import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginField from '../containers/login-field';
import UserForm from '../containers/addUser';

export default class App extends Component {

  render() {
    return (
      <div>
        <LoginField />
        <h1>Create a New User:</h1>
        <UserForm />
      </div>
    );
  }
}
