export default function (state = 'John Smith', action) {
  console.log('Selected User', action.payload);
  switch (action.type) {
    case 'SET_SELECTED_USER':
      return action.payload;
    default:
      return state;
  }
}
