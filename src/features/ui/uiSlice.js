import { createSlice } from '@reduxjs/toolkit';

import { actions as processingChannelActions } from '../channels/processingChannelSlice';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { notificationType: '', notificationShow: false, messages: [''] },
  reducers: {
    setNotification: (_state, action) => action.payload,
    closeNotification: () => ({ notificationType: '', notificationShow: false, messages: [''] }),
  },
  extraReducers: {
    [processingChannelActions.renameChannelSuccess]:
      (_state, { payload: { name, oldName } }) => ({
        notificationType: 'channelRenamed', notificationShow: true, messages: [name, oldName],
      }),
  },
});


export const { actions } = uiSlice;
export default uiSlice.reducer;
