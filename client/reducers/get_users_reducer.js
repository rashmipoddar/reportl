export default function (state = [], action) {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, usersAll: action.payload.data };
    default:
      return state;
  }
}
