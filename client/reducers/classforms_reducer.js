export default function (state = [], action) {
  switch (action.type) {
    case 'SELECT_FORM':
      return [action.payload, ...state];
    default:
      return state;
  }
}
