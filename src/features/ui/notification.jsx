/* eslint-disable react/no-danger */
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import connect from '../../connect';


export const notifications = {
  addChannelStart: { text: 'channeladding', status: 'secondary' },
  addChannelSuccess: { text: 'channeladded', status: 'success' },
  addChannelFailure: { text: 'channeladdingerror', status: 'warning' },
  removeChannelStart: { text: 'channelremoving', status: 'secondary' },
  removeChannelSuccess: { text: 'channelremoved', status: 'success' },
  removeChannelFailure: { text: 'channelremovingerror', status: 'warning' },
  renameChannelStart: { text: 'channelrenaming', status: 'secondary' },
  renameChannelSuccess: { text: 'channelrenamed', status: 'success' },
  renameChannelFailure: { text: 'channelrenamingerror', status: 'warning' },
};

function Notification(props) {
  const {
    show, type, messages: [message1, message2 = ''], closeNotification,
  } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeNotification(type));
  if (show) setTimeout(handleClose, 5000);
  console.log('+++++++++', type, message1, message2);
  return show && notifications[type] && (
    <Alert
      className="zindex-tooltip fixed-top"
      show={show}
      variant={notifications[type].status}
      onClose={handleClose}
      dismissible
    >
      <div dangerouslySetInnerHTML={{
        __html:
          t(notifications[type].text, { message1, message2 }),
      }}
      />
    </Alert>
  );
}

export default connect(null)(Notification);
