import { createSlice } from '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    addChannel: {
      reducer: (state, action) => [action.payload.channel, ...state],
      prepare: (channel) => ({ payload: channel }),
    },
    removeChannel: {
      reducer: (state, action) => state.filter((t) => t.id !== action.payload.id),
      prepare: (id) => ({ payload: id }),
    },
  },
});

export const { addChannel, removeChannel } = channelsSlice.actions;
export default channelsSlice.reducer;
