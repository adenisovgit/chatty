import { combineReducers } from 'redux';
import channelsReducer from '../features/channels/channelsSlice.js';
import messagesReducer from '../features/messages/messagesSlice.js';
import activeChannelReducer from '../features/channels/activeChannelSlice.js';

export default combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  activeChannel: activeChannelReducer,
});
