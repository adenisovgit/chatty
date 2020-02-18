import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { handleAddChannel } from './processingChannelSlice';
import { EnterTextModal } from '../ui/enterTextModal';

function NewChannelButton() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const handleClose = () => setModalVisibility(false);
  const handleShow = () => setModalVisibility(true);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmit = ({ name }) => {
    dispatch(handleAddChannel(name));
    handleClose();
  };

  return (
    <>
      <Button className="btn-block" variant="primary" onClick={handleShow}>
        {t('addchannel')}
      </Button>
      <EnterTextModal
        isModalVisible={isModalVisible}
        handleClose={handleClose}
        onSubmit={onSubmit}
        title={t('addchannel')}
        placeholder={t('enternewchannelname')}
        cancelBtnText={t('cancel')}
        submitBtnText={t('addchannel')}
      />
    </>
  );
}

export default NewChannelButton;
