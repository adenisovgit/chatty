import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

// import { addChannel } from '../features/channels/channelsSlice';

// const mapDispatchToProps = { addChannel };

function NewChannelModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  // const { addChannel, t } = this.props;
  const { t } = useTranslation();

  const processAddChannel = () => {
    dispatch({ type: 'channels/addChannel', payload: { id: 5, name: 'main', removable: false } });
    handleClose();
  };


  return (
    <>
      <Button className="btn-block" variant="primary" onClick={handleShow}>
        {t('addchannel')}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t('cancel')}
          </Button>
          <Button variant="primary" onClick={processAddChannel}>
            {t('addchannel')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default NewChannelModal;
