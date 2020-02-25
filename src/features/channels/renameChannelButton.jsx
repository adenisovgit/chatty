import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { handleRenameChannel } from './processingChannelSlice';
import { EnterTextModal } from '../ui/enterTextModal';

function RenameChannelButton(props) {
  const { id, oldName } = props;
  const [isModalVisible, setModalVisibility] = useState(false);
  const handleClose = () => setModalVisibility(false);
  const handleShow = () => setModalVisibility(true);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmit = ({ name }) => {
    dispatch(handleRenameChannel(id, name, oldName));
    handleClose();
  };

  return (
    <>
      <button
        onClick={handleShow}
        className="btn button-icon-rename"
        type="button"
        aria-label={t('renamechannel')}
        title={t('renamechannel')}
      />
      <EnterTextModal
        isModalVisible={isModalVisible}
        handleClose={handleClose}
        onSubmit={onSubmit}
        title={t('renamechannelquiestion', { message1: oldName })}
        placeholder={oldName}
        cancelBtnText={t('cancel')}
        submitBtnText={t('renamechannel')}
      />
    </>
  );
}

export default RenameChannelButton;
