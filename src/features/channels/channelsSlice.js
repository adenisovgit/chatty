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
    renameChannel: (state, action) => state.filter((t) => t.id !== action.payload.id),
  },
});

export const { actions, reducer } = channelsSlice;
// export const { addChannel, removeChannel } = actions;
export default reducer;
