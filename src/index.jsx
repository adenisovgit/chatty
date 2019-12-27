import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import App from './components/app';

export default (gon) => {
  const { channels, messages } = gon;
  const activeChannel = channels[0].id;
  const store = configureStore({
    reducer: reducers,
    preloadedState: { channels, messages, activeChannel },
  });
  console.log('+++++++++++store.getState()', store.getState());
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('chat'),
  );
};
