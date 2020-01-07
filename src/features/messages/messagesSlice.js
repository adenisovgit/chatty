import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, action) => [action.payload.message, ...state],
    removeMessage: (state, action) => state.filter((t) => t.id !== action.payload.id),
  },
});

export const { actions } = messagesSlice;
export default messagesSlice.reducer;
