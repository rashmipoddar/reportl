export default function (state = [], action) {
  switch (action.type) {
    case 'LOGIN_SUBMITTED':
      return [action.payload, ...state];
    default:
      return state;
  }
}
