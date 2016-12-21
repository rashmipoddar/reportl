export default function (state = [], action) {
  switch (action.type) {
    case 'GET_CLASSES':
      return {...state, allClass: action.payload.data}
    default:
      return state;
  }
}
