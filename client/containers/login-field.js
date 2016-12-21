import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginSubmit } from '../actions/index'; // needs to be written

const LoginField = ({ handleSubmit }) => (
  <div>
    <h2>Login</h2>
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
  </div>
);

LoginField.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const LoginFieldMaker = reduxForm({
  form: 'login',
  onSubmit: loginSubmit,
})(LoginField);

export default LoginFieldMaker;
