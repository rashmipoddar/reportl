export default function (state = [], action) {
  switch (action.type) {
    case 'GET_DEPARTMENT':
      return [action.payload, ...state];
    default:
      return state;
  }
}
