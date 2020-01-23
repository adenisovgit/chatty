/* eslint-disable react/no-danger */
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import connect from '../../connect';

export const notifications = {
  channelAdding: { text: 'channeladding', status: 'secondary' },
  channelAdded: { text: 'channeladded', status: 'success' },
  channelAddingError: { text: 'channeladdingerror', status: 'warning' },
  channelRemoving: { text: 'channelremoving', status: 'secondary' },
  channelRemoved: { text: 'channelremoved', status: 'success' },
  channelRemovingError: { text: 'channelremovingerror', status: 'warning' },
};

function Notification(props) {
  const {
    show, type, message, closeNotification,
  } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeNotification());
  if (show) setTimeout(handleClose, 5000);
  return show && notifications[type] && (
    <Alert
      className="zindex-modal float-right"
      style={{
        zIndex: '9999999999', position: 'absolute', top: 0, right: 0,
      }}
      show={show}
      variant={notifications[type].status}
      onClose={handleClose}
      dismissible
    >
      <div dangerouslySetInnerHTML={{ __html: t(notifications[type].text, { message }) }} />
    </Alert>
  );
}

export default connect(null)(Notification);
