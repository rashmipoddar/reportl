import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginField from './login_reducer';
import UserForm from './addUser_reducer';

const rootReducer = combineReducers({
  login: LoginField,
  form: formReducer,
  addUser: UserForm,
});

export default rootReducer;
