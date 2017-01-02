export default function (state = [], action) {
  switch (action.type) {
    case 'GET_DEPARTMENT':
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
