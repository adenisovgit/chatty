import { createSlice } from '@reduxjs/toolkit';

import { actions as processingChannelActions } from '../channels/processingChannelSlice';


const uiSlice = createSlice({
  name: 'ui',
  initialState: { notificationType: 'init', notificationShow: false, messages: ['', ''] },
  reducers: {
    setNotification: (_state, action) => action.payload,
    closeNotification: (message) => ({ notificationType: 'closeNotification', notificationShow: false, messages: [message, ''] }),
  },
  extraReducers: {
    [processingChannelActions.renameChannelSuccess]:
      (_state, { payload: { name, oldName } }) => ({
        notificationType: 'renameChannelSuccess', notificationShow: true, messages: [name, oldName],
      }),
    [processingChannelActions.renameChannelStart]:
      (_state, { payload: { name, oldName } }) => ({
        notificationType: 'renameChannelStart', notificationShow: true, messages: [name, oldName],
      }),
    [processingChannelActions.renameChannelFailure]:
      (_state, { payload: { oldName, err } }) => ({
        notificationType: 'renameChannelFailure', notificationShow: true, messages: [oldName, err],
      }),
    [processingChannelActions.addChannelSuccess]:
      (_state, { payload: { name } }) => ({
        notificationType: 'addChannelSuccess', notificationShow: true, messages: [name],
      }),
    [processingChannelActions.addChannelStart]:
      (_state, { payload: { name } }) => ({
        notificationType: 'addChannelStart', notificationShow: true, messages: [name],
      }),
    [processingChannelActions.addChannelFailure]:
      (_state, { payload: { name, err } }) => ({
        notificationType: 'addChannelFailure', notificationShow: true, messages: [name, err],
      }),
    [processingChannelActions.removeChannelSuccess]:
      (_state, { payload: { name } }) => ({
        notificationType: 'removeChannelSuccess', notificationShow: true, messages: [name],
      }),
    [processingChannelActions.removeChannelStart]:
      (_state, { payload: { name } }) => ({
        notificationType: 'removeChannelStart', notificationShow: true, messages: [name],
      }),
    [processingChannelActions.removeChannelFailure]:
      (_state, { payload: { name, err } }) => ({
        notificationType: 'removeChannelFailure', notificationShow: true, messages: [name, err],
      }),
  },
});

export const { actions } = uiSlice;
export default uiSlice.reducer;
