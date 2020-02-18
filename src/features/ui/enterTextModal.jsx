import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';

export function EnterTextModal(props) {
  const {
    isModalVisible, handleClose, onSubmit, title, placeholder, cancelBtnText, submitBtnText,
  } = props;
  const { register, handleSubmit/* , errors */ } = useForm();

  return (
    <Modal show={isModalVisible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <input
            className="form-control"
            type="text"
            placeholder={placeholder}
            name="name"
            ref={register({ required: true })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {cancelBtnText}
          </Button>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
            {submitBtnText}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default EnterTextModal;
