/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
    renameChannelStart: () => ({ loading: true, error: null }),
    renameChannelSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    renameChannelFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addChannelStart,
  addChannelSuccess,
  addChannelFailure,
  removeChannelStart,
  removeChannelSuccess,
  removeChannelFailure,
  renameChannelStart,
  renameChannelSuccess,
  renameChannelFailure,
} = processingChannelSlice.actions;
export const { actions } = processingChannelSlice;
export default processingChannelSlice.reducer;


export const handleAddChannel = (channelName) => async (dispatch) => {
  try {
    // dispatch(uiActions.setNotification(
    //   { notificationType: 'channelAdding', notificationShow: true, message: channelName },
    // ));
    dispatch(addChannelStart()); // !!!!!!! add externalReducer to process ^
    const channel = { data: { attributes: { name: channelName } } };
    const { data } = await axios.post(routes.channelsPath(), channel);
    dispatch(addChannelSuccess(data));
    // dispatch(uiActions.setNotification(
    //   { notificationType: 'channelAdded', notificationShow: true, message: channelName },
    // ));
  } catch (err) {
    dispatch(addChannelFailure(err));
    // dispatch(uiActions.setNotification(
    //   { notificationType: 'channelAddingError', notificationShow: true, message: channelName },
    // ));
  }
};

export const handleRemoveChannel = (id, channelName) => async (dispatch) => {
  try {
    // dispatch(uiActions.setNotification(
    //   { notificationType: 'channelRemoving', notificationShow: true, message: channelName },
    // ));
    dispatch(removeChannelStart());
    const channel = { data: { attributes: { id } } };
    const { data } = await axios.delete(routes.channelPath(id), channel);
    dispatch(removeChannelSuccess(data));
    // dispatch(uiActions.setNotification(
    //   { notificationType: 'channelRemoved', notificationShow: true, message: channelName },
    // ));
  } catch (err) {
    dispatch(removeChannelFailure(err));
    // dispatch(uiActions.setNotification(
    //   { notificationType: 'channelRemovingError', notificationShow: true, message: channelName },
    // ));
  }
};

export const handleRenameChannel = (id, newName, oldName) => async (dispatch) => {
  try {
    // dispatch(uiActions.setNotification(
    //   { notificationType: 'channelRenaming', notificationShow: true, message: newName },
    // ));
    dispatch(renameChannelStart());
    const channel = { data: { attributes: { id, name: newName } } };
    const { data: { data: { attributes: response } } } = await axios
      .patch(routes.channelPath(id), channel);
    response.oldName = oldName;
    console.log(response);

    dispatch(renameChannelSuccess(response));
    // dispatch(uiActions.setNotification(
    //   { notificationType: 'channelRenamed', notificationShow: true, message: newName },
    // ));
  } catch (err) {
    dispatch(renameChannelFailure(err));
    // dispatch(uiActions.setNotification(
    //   { notificationType: 'channelRenamingError', notificationShow: true, message: newName },
    // ));
  }
};
