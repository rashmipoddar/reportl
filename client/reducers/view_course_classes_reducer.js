export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_CLASSES_FOR_COURSE':
      return action.payload.data;
    default: return state;
  }
}
