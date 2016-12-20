export function loginSubmit(login) {
  return {
    type: 'LOGIN_SUBMITTED',
    payload: login,
  };
}

export function createUser(user) {
  return {
    type: 'CREATE_USER',
    payload: user,
  };
}

export function makeNewClass(classes) {
  return {
    type: 'CLASS_CREATED',
    payload: classes,
  };
}
