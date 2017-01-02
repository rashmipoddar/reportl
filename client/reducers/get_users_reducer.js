export default function (state = [], action) {
  switch (action.type) {
    case 'GET_USERS':
      // return [...state, action.payload.data];
      return action.payload.data;
    default:
      return state;
  }
}
