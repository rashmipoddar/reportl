import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';

export function createUser(user) {
  const request = axios.post('/user', user);

  return {
    type: CREATE_USER,
    payload: request,
  };
}
