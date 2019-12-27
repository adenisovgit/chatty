import { createSlice } from '@reduxjs/toolkit';

const activeChannelSlice = createSlice({
  name: 'activeChannel',
  initialState: 0,
  reducers: {
    setActiveChannel: (state, action) => action.payload,
  },
});


export const { setActiveChannel } = activeChannelSlice.actions;
export default activeChannelSlice.reducer;
