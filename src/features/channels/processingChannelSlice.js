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
      // const { comments, issueId } = action.payload
      // state.commentsByIssue[issueId] = comments
      state.loading = false;
      state.error = null;
    },
    addChannelFailure(state, action) {
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
    dispatch(addChannelStart());
    const channel = { data: { attributes: { name: channelName } } };
    const { data } = await axios.post(routes.channelsPath(), channel);
    dispatch(addChannelSuccess(data));
    dispatch(uiActions.setNotification({ notificationType: 'channeladded', notificationShow: true }));
  } catch (err) {
    dispatch(addChannelFailure(err));
  }
};
