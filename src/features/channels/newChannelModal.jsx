import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { handleAddChannel } from './processingChannelSlice';

function NewChannelModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { register, handleSubmit/* , errors */ } = useForm();
  const onSubmit = ({ name }) => {
    dispatch(handleAddChannel(name));
    handleClose();
  };

  return (
    <>
      <Button className="btn-block" variant="primary" onClick={handleShow}>
        {t('addchannel')}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t('addchannel')}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <input
              className="form-control"
              type="text"
              placeholder={t('enternewchannelname')}
              name="name"
              ref={register({ required: true })}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {t('cancel')}
            </Button>
            <Button variant="primary" onClick={handleSubmit(onSubmit)}>
              {t('addchannel')}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default NewChannelModal;
