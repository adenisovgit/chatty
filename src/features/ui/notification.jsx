import React from 'react';
import Toast from 'react-bootstrap/Toast';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import connect from '../../connect';


export const notifications = {
  channelAdding: { text: 'channeladding', status: 'secondary' },
  channelAdded: { text: 'channeladded', status: 'success' },
  channelAddingError: { text: 'channeladdingerror', status: 'warning' },
};

function Notification(props) {
  const { show, closeNotification } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <Toast
      onClose={() => dispatch(closeNotification())}
      show={show}
      className="zindex-modal float-right"
      style={{
        zIndex: '9999999999', position: 'absolute', top: 0, right: 0,
      }}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <strong className="mr-auto">{t('Bootstrap')}</strong>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
}

export default connect(null)(Notification);
