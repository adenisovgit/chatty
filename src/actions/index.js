export const addChannel = (channel) => ({
  type: 'CHANNEL_ADD',
  payload: {
    channel,
  },
});

export const removeChannel = (id) => ({
  type: 'CHANNEL_REMOVE',
  payload: {
    id,
  },
});
