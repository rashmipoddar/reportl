import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginField from './login_reducer';
import UserForm from './addUser_reducer';
import ClassMaker from './class_reducer';

const rootReducer = combineReducers({
  login: LoginField,
  form: formReducer,
  addUser: UserForm,
  classes: ClassMaker,
});

export default rootReducer;
