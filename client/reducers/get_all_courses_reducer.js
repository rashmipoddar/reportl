export default function (state = [], action) {
  switch (action.type) {
    case 'GET_ALL_COURSES':
      return [action.payload, ...state];
    default:
      return state;
  }
}
