import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { notificationType: '', notificationShow: false, message: '' },
  reducers: {
    setNotification: (_state, action) => action.payload,
    closeNotification: () => ({ notificationType: '', notificationShow: false, message: '' }),
  },
});


export const { actions } = uiSlice;
export default uiSlice.reducer;
