import { createSlice } from '@reduxjs/toolkit';

const activeChannelSlice = createSlice({
  name: 'activeChannel',
  initialState: 0,
  reducers: {
    setActiveChannel: (state, action) => action.payload,
  },
});


export const { actions } = activeChannelSlice;
export default activeChannelSlice.reducer;
