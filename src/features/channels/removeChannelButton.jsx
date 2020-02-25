import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { handleRemoveChannel } from './processingChannelSlice';
import { QuestionModal } from '../ui/questionModal';

function RemoveChannelButton(props) {
  const { id, name } = props;
  const [isModalVisible, setModalVisibility] = useState(false);
  const handleClose = () => setModalVisibility(false);
  const handleShow = () => setModalVisibility(true);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmit = () => {
    dispatch(handleRemoveChannel(id, name));
    handleClose();
  };

  return (
    <>
      <button
        onClick={handleShow}
        className="btn"
        type="button"
        aria-label={t('removechannel')}
        title={t('removechannel')}
      >
        &times;
      </button>
      <QuestionModal
        isModalVisible={isModalVisible}
        handleClose={handleClose}
        onSubmit={onSubmit}
        title={t('removechannelquiestion', { message1: name })}
        cancelBtnText={t('No')}
        submitBtnText={t('Yes')}
      />
    </>
  );
}

export default RemoveChannelButton;
