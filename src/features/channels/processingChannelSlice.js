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
    addChannelSuccess: () => ({ loading: false, error: null }),
    addChannelFailure: (_state, action) => ({ loading: false, error: action.payload.message }),
    removeChannelStart: () => ({ loading: true, error: null }),
    removeChannelSuccess: () => ({ loading: false, error: null }),
    removeChannelFailure: (_state, action) => ({ loading: false, error: action.payload.message }),
    renameChannelStart: () => ({ loading: true, error: null }),
    renameChannelSuccess: () => ({ loading: false, error: null }),
    renameChannelFailure: (_state, action) => ({ loading: false, error: action.payload.message }),
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
    dispatch(addChannelStart({ name: channelName }));
    const channel = { data: { attributes: { name: channelName } } };
    await axios.post(routes.channelsPath(), channel);
    dispatch(addChannelSuccess({ name: channelName }));
  } catch (err) {
    dispatch(addChannelFailure({ name: channelName, err: err.message }));
  }
};

export const handleRemoveChannel = (id, channelName) => async (dispatch) => {
  try {
    dispatch(removeChannelStart({ name: channelName }));
    const channel = { data: { attributes: { id } } };
    await axios.delete(routes.channelPath(id), channel);
    dispatch(removeChannelSuccess({ name: channelName }));
  } catch (err) {
    dispatch(removeChannelFailure({ name: channelName, err: err.message }));
  }
};

export const handleRenameChannel = (id, newName, oldName) => async (dispatch) => {
  try {
    dispatch(renameChannelStart({ name: newName, oldName }));
    const channel = { data: { attributes: { id, name: newName } } };
    const { data: { data: { attributes: response } } } = await axios
      .patch(routes.channelPath(id), channel);
    response.oldName = oldName;
    dispatch(renameChannelSuccess(response));
  } catch (err) {
    dispatch(renameChannelFailure({ oldName, err: err.message }));
  }
};
