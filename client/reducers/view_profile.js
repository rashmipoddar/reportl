export default function (state = [], action) {
  switch (action.type) {
    case 'GET_PROFILE':
      return [action.payload, ...state];
    default:
      return state;
  }
}
