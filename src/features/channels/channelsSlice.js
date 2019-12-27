import { createSlice } from '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    addChannel: (state, action) => {
      const { payload: channel } = action;
      return [...state, channel];
    },
    removeChannel: (state, action) => state.filter((t) => t.id !== action.payload.id),
  },
});

export const { addChannel, removeChannel } = channelsSlice.actions;
export default channelsSlice.reducer;
