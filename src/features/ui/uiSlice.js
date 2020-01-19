import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { notificationType: '', notificationShow: false },
  reducers: {
    setNotification: (_state, action) => action.payload,
    closeNotification: () => ({ notificationType: '', notificationShow: false }),
  },
});


export const { actions } = uiSlice;
export default uiSlice.reducer;
