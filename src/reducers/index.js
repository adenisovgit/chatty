import { combineReducers } from 'redux';

// const text = (state = '', action) => {
//   switch (action.type) {
//     case 'TEXT_UPDATE': {
//       return action.payload.text;
//     }
//     case 'TASK_ADD': {
//       return '';
//     }
//     default:
//       return state;
//   }
// };

const channels = (state = [], action) => {
  switch (action.type) {
    case 'CHANNEL_ADD': {
      return [action.payload.channel, ...state];
    }
    case 'CHANNEL_REMOVE': {
      return state.filter((t) => t.id !== action.payload.id);
    }
    default:
      return state;
  }
};

export default combineReducers({
  // text,
  channels,
});
