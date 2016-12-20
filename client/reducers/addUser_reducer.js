export default function (state = [], action) {
  switch (action.type) {
    case 'CREATE_USER':
      return [action.payload, ...state];
    default:
      return state;
  }
}
