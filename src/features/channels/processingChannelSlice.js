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
    addChannelSuccess(state, action) {
      // const { comments, issueId } = action.payload
      // state.commentsByIssue[issueId] = comments
      console.log('++++++++addChannelSuccess action', action);
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
export default processingChannelSlice.reducer;


export const addNewChannel = (channelName) => async (dispatch) => {
  try {
    dispatch(addChannelStart());
    const channel = { data: { attributes: { name: channelName } } };
    const { data } = await axios.post(routes.channelsPath(), channel);
    dispatch(addChannelSuccess(data));
  } catch (err) {
    dispatch(addChannelFailure(err));
  }
};
