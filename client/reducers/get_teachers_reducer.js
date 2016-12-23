export default function (state = [], action) {
  switch (action.type) {
    case 'GET_TEACHERS':
      return action.payload.data.users;
    default:
      return state;
  }
}
