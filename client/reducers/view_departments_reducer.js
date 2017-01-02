export default function (state = [], action) {
  switch (action.type) {
    case 'GET_DEPARTMENTS':
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
