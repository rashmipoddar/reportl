export default function (state = {}, action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      return [action.payload, ...state];
    default:
      return state;
  }
}
