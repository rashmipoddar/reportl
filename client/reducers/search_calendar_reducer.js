export default function (state = [], action) {
  switch (action.type) {
    case 'SEARCH_CALENDAR':
      return action.payload.data;
    default:
      return state;
  }
}
