import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import io from 'socket.io-client';


import reducers, { actions } from './reducers';
import App from './components/app';

import './i18n';

export default (gon) => {
  const { channels, messages } = gon;
  const activeChannel = channels[0].id;
  const processingChannel = { loading: false, error: null };
  const ui = { notificationText: '', notificationShow: false };
  const store = configureStore({
    reducer: reducers,
    middleware: [...getDefaultMiddleware()],
    preloadedState: {
      channels, messages, activeChannel, processingChannel, ui,
    },
  });

  const socket = io();
  socket.on('newMessage', ({ data: { attributes } }) => store.dispatch(actions.addMessage(attributes)));
  socket.on('newChannel', ({ data: { attributes } }) => store.dispatch(actions.addChannel(attributes)));
  socket.on('removeChannel', ({ data: { id } }) => store.dispatch(actions.removeChannel(id)));
  socket.on('renameChannel', ({ data: { attributes } }) => store.dispatch(actions.renameChannel(attributes)));

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('chat'),
  );
};
