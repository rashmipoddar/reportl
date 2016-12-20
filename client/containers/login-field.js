import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginSubmit } from '../actions/index'; // needs to be written

class LoginField extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="Class Name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="Start Date" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

LoginField = reduxForm({
  form: 'login',
  onSubmit: loginSubmit,
})(LoginField);

export default LoginField;
