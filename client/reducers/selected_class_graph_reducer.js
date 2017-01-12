export default function (state = ['American Literature'], action) {
  console.log('Selected Class', action.payload);
  switch (action.type) {
    case 'SET_SELECTED_CLASS':
      return action.payload;
    default:
      return state;
  }
}
