import { combineReducers } from 'redux';
import channelsReducer from '../features/channels/channelsSlice.js';
import messagesReducer from '../features/messages/messagesSlice.js';
import activeChannelReducer from '../features/channels/activeChannelSlice.js';
import processingChannelReducer from '../features/channels/processingChannelSlice';

export default combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  activeChannel: activeChannelReducer,
  processingChannel: processingChannelReducer,
});
