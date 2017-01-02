import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createUser } from '../actions/index'; // needs to be written

const UserForm = ({ handleSubmit }) => (
  <div>
    <h2>Create User</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="type_id"> Student</label>
        <Field name="type_id" component="input" type="radio" value="1" />
        <label htmlFor="type_id"> Teacher</label>
        <Field name="type_id" component="input" type="radio" value="2" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

UserForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const UserFormMaker = reduxForm({
  form: 'addUser',
  onSubmit: createUser,
})(UserForm);

export default UserFormMaker;
