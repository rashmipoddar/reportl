export default function (state = [], action) {
  console.log('we got to the reducer #####');
  switch (action.type) {
    case 'GET_ATTENDEES':
      console.log('payload: ', action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}
