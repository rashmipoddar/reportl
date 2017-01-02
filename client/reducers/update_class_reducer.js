export default function (state = [], action) {
  switch (action.type) {
    case 'UPDATE_CLASS_INFO':
      return [action.payload, ...state];
    default:
      return state;
  }
}
