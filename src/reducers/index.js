import { combineReducers } from 'redux';

import channelsReducer, { actions as channelsActions } from '../features/channels/channelsSlice.js';
import messagesReducer, { actions as messagesActions } from '../features/messages/messagesSlice.js';
import activeChannelReducer, { actions as activeChannelActions } from '../features/channels/activeChannelSlice.js';
import processingChannelReducer, { actions as processingChannelActions } from '../features/channels/processingChannelSlice';
import uiReducer, { actions as uiActions } from '../features/ui/uiSlice.js';


export default combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  activeChannel: activeChannelReducer,
  processingChannel: processingChannelReducer,
  ui: uiReducer,
});


export const actions = {
  ...channelsActions,
  ...messagesActions,
  ...activeChannelActions,
  ...processingChannelActions,
  ...uiActions,
};
