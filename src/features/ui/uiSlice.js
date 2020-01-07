import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { toastText: '', toastShow: false },
  reducers: {
    setToast: (_state, action) => action.payload,
  },
});


export const { actions } = uiSlice;
export default uiSlice.reducer;
