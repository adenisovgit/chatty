import { createSlice } from '@reduxjs/toolkit';

const activeChannelSlice = createSlice({
  name: 'activeChannel',
  initialState: 0,
  reducers: {
    setActiveChannel: {
      reducer: (state, action) => action.payload.id,
      prepare: (id) => ({ payload: id }),
    },
  },
});

export const { setActiveChannel } = activeChannelSlice.actions;
export default activeChannelSlice.reducer;
