import { combineReducers } from 'redux';
import LoginField from './login_reducer';

const rootReducer = combineReducers({
  login: LoginField
});

export default rootReducer;
