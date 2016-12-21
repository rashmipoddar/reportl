import axios from 'axios';

const ROOT_API_URL = 'localhost:8000';

export function loginSubmit(login) {
  const request = axios.post('/login', login);
  return {
    type: 'LOGIN_SUBMITTED',
    payload: request,
  };
}

export function createUser(user) {
  const request = axios.post('/api/users', user);
  return {
    type: 'CREATE_USER',
    payload: request,
  };
}

export function makeNewClass(classes) {
  const request = axios.post('/createclass', classes);
  return {
    type: 'CLASS_CREATED',
    payload: request,
  };
}

export function getAllClasses() {
  const request = axios.get('/api/users/3');
  return {
    type: 'GET_CLASSES',
    payload: request,
  };
}

export function getAllUsers() {
  const request = axios.get(`${ROOT_API_URL}/api/user`); // endpoint not built yet. modify when complete.
  return {
    type: 'GET_USERS',
    payload: request,
  };
}
