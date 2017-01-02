export default function (state = [], action) {
  switch (action.type) {
    case 'CLASS_CREATED':
      return [action.payload, ...state];
    default:
      return state;
  }
}
