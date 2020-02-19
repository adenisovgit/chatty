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
    renameChannel: (state, action) => {
      const { payload: channel } = action;
      const channelInState = state.find((el) => el.id === channel.id);
      channelInState.name = channel.name;
      return state;
    },
  },
});

export const { actions, reducer } = channelsSlice;
// export const { addChannel, removeChannel } = actions;
export default reducer;
