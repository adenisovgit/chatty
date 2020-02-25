import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function QuestionModal(props) {
  const {
    isModalVisible, handleClose, onSubmit, title, cancelBtnText, submitBtnText,
  } = props;

  return (
    <Modal show={isModalVisible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {cancelBtnText}
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          {submitBtnText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default QuestionModal;
