/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { actions as uiActions } from '../ui/uiSlice';
import routes from '../../routes';


const initialState = {
  loading: false,
  error: null,
};

const processingChannelSlice = createSlice({
  name: 'processingChannel',
  initialState,
  reducers: {
    addChannelStart: () => ({ loading: true, error: null }),
    addChannelSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    addChannelFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    removeChannelStart: () => ({ loading: true, error: null }),
    removeChannelSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    removeChannelFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addChannelStart,
  addChannelSuccess,
  addChannelFailure,
} = processingChannelSlice.actions;
export const { actions } = processingChannelSlice;
export default processingChannelSlice.reducer;


export const addNewChannel = (channelName) => async (dispatch) => {
  try {
    dispatch(uiActions.setNotification(
      { notificationType: 'channelAdding', notificationShow: true, message: channelName },
    ));
    dispatch(addChannelStart());
    const channel = { data: { attributes: { name: channelName } } };
    const { data } = await axios.post(routes.channelsPath(), channel);
    dispatch(addChannelSuccess(data));
    dispatch(uiActions.setNotification(
      { notificationType: 'channelAdded', notificationShow: true, message: channelName },
    ));
  } catch (err) {
    dispatch(addChannelFailure(err));
    dispatch(uiActions.setNotification(
      { notificationType: 'channelAddingError', notificationShow: true, message: channelName },
    ));
  }
};
