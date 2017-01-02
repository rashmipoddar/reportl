export default function (state = [], action) {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return [action.payload, ...state];
    default:
      return state;
  }
}
