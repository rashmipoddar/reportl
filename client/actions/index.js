// import axios from 'axios';

export function loginSubmit(login) {
  return {
    type: 'LOGIN_SUBMITTED',
    payload: login,
  };
}

export function createUser(user) {
  // TO DO:
  // post user to server
  // on creation, return using user data as payload
  // const request = axios.post('/user', user);

  return {
    type: 'CREATE_USER',
    payload: user, // temporary
  };
}
