export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_MODULE_TO_CLASS':
      return [action.payload, ...state];
    default:
      return state;
  }
}
